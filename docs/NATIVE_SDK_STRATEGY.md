# Native SDK Integration Strategy

**Decision Document for AstroWisdom**
**Last Updated:** October 28, 2025
**Status:** ✅ APPROVED

---

## 📋 Executive Summary

This document outlines the strategy for integrating native SDKs (Agora, Razorpay, Firebase) into the AstroWisdom React Native application while maintaining development efficiency and future flexibility.

**DECISION: Use Expo Development Client + EAS Build**

---

## 🎯 Native SDKs Required

### 1. **Agora SDK** (Voice/Video Calling)

- **Purpose**: Real-time voice and video consultations
- **Requires Native Modules**: Yes
- **Platform**: iOS & Android

### 2. **Razorpay Native SDK**

- **Purpose**: Payment processing
- **Requires Native Modules**: Yes (for better UX and features)
- **Platform**: iOS & Android

### 3. **Firebase SDK** (Auth & Messaging)

- **Purpose**: Authentication and push notifications
- **Requires Native Modules**: Yes
- **Platform**: iOS & Android

### 4. **React Native Firebase**

- **Purpose**: Integration layer for Firebase
- **Requires Native Modules**: Yes
- **Platform**: iOS & Android

---

## 🔍 Options Evaluated

### Option 1: Stay with Expo Go ❌

**Pros:**

- Fastest development
- No build configuration
- Instant updates

**Cons:**

- Cannot use native modules (Agora, Razorpay native)
- Limited to Expo SDK modules only
- Not suitable for production with custom native code

**Verdict**: Not viable for our requirements

---

### Option 2: Eject to Bare React Native Workflow ⚠️

**Pros:**

- Full control over native code
- Can use any native module
- No restrictions

**Cons:**

- Lose Expo's convenience features
- Must manage iOS/Android projects manually
- More complex build process
- Harder to maintain
- No Over-The-Air (OTA) updates

**Verdict**: Possible but not recommended (too much complexity)

---

### Option 3: Expo Development Client + EAS Build ✅

**Pros:**

- Keep most Expo benefits
- Can use custom native modules
- EAS Build handles native builds in the cloud
- Development Client allows local testing with native code
- Over-The-Air (OTA) updates still work for JS changes
- Simpler than bare workflow
- Official Expo recommendation for custom native code

**Cons:**

- Need EAS Build account (free tier available)
- Slightly longer build times
- Need development build for testing native features

**Verdict**: ✅ **RECOMMENDED APPROACH**

---

## 📖 Chosen Strategy: Expo Development Client

### What is Expo Development Client?

A customizable version of Expo Go that includes your app's native code. It's like Expo Go, but built specifically for your app with all your custom native modules included.

### How It Works

1. **Development**:
   - Install config plugins for native modules in `app.json`
   - Run `eas build --profile development` to create development client
   - Install development client on your device/emulator
   - Run `npx expo start --dev-client` for hot reload development

2. **Production**:
   - Run `eas build --profile production` for app store builds
   - Deploy JS-only updates with `eas update` (no rebuild needed)

### Workflow Diagram

```
Development:
  Write Code → Config Plugin (app.json) → EAS Build → Development Client → Test

Production:
  Ready for Release → EAS Build → App Store/Play Store
                   └─→ OTA Updates (JS only) → Live Users
```

---

## 🛠️ Implementation Plan

### Phase 1: Set Up EAS Build

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Configure project
eas build:configure

# Create development build
eas build --profile development --platform android
eas build --profile development --platform ios
```

### Phase 2: Add Config Plugins

Update `app.json`:

```json
{
  "expo": {
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/messaging",
      [
        "react-native-agora",
        {
          "appId": "your-agora-app-id"
        }
      ],
      "react-native-razorpay"
    ]
  }
}
```

### Phase 3: Install Native Dependencies

```bash
# Firebase
npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/messaging

# Agora
npm install react-native-agora

# Razorpay
npm install react-native-razorpay
```

### Phase 4: Build and Test

```bash
# Build development client
eas build --profile development --platform all

# Start development server
npx expo start --dev-client
```

---

## 📱 Testing Strategy

### Local Development

1. **Development Client on Physical Device**:
   - Install development build from EAS Build
   - Connect to same WiFi as dev machine
   - Run `npx expo start --dev-client`
   - Hot reload works as normal

2. **Simulator/Emulator**:
   - Download development build from EAS
   - Drag and drop to simulator
   - Same workflow as physical device

### Feature Branches

For features requiring new native code:

1. Create branch: `feature/native-<feature-name>`
2. Update config plugins if needed
3. Build new development client
4. Test thoroughly before merging
5. Document any native changes in PR

---

## 🔄 CI/CD Strategy

### EAS Build Profiles

Create `eas.json`:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": false
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

### Build Commands

```bash
# Development builds (for testing)
eas build --profile development --platform android

# Preview builds (for stakeholder testing)
eas build --profile preview --platform all

# Production builds (for app stores)
eas build --profile production --platform all

# Deploy JS updates (no rebuild)
eas update --branch production
```

---

## 💰 Cost Considerations

### Expo EAS Build Pricing

**Free Tier:**

- 30 builds/month (total across all platforms)
- Good for: Small teams, early development

**Production Plan ($99/month):**

- Unlimited builds
- Priority queue
- Needed for: Active development, frequent releases

**Recommendation**: Start with free tier, upgrade when hitting limits

---

## 📋 Native Module Checklist

Before adding a native module:

- [ ] Check if Expo has a built-in alternative
- [ ] Verify module has Expo config plugin support
- [ ] If no plugin, check if community plugin exists
- [ ] Document the native dependency in `NATIVE_DEPENDENCIES.md`
- [ ] Update `app.json` plugins array
- [ ] Create new development build
- [ ] Test on both iOS and Android
- [ ] Update team documentation

---

## 🚨 Important Notes

### 1. **EAS Build Required**

Once native modules are added, you **cannot** use Expo Go. All developers must:

- Install development client build
- Use `npx expo start --dev-client` command

### 2. **Development Client Updates**

Development client must be rebuilt when:

- Adding new native modules
- Changing config plugins
- Updating plugin configuration
- Upgrading React Native version

### 3. **JavaScript-Only Updates**

OTA updates work for:

- JavaScript code changes
- Assets (images, fonts)
- App configuration (that doesn't require native rebuild)

OTA updates **don't work** for:

- Native module changes
- Config plugin updates
- Native code modifications

### 4. **Version Management**

- **App Version**: Increment for native changes
- **Update Version**: Increment for JS-only updates
- Use semantic versioning: MAJOR.MINOR.PATCH

---

## 📚 Resources

### Official Documentation

- [Expo Development Client](https://docs.expo.dev/develop/development-builds/introduction/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Config Plugins](https://docs.expo.dev/config-plugins/introduction/)
- [EAS Update](https://docs.expo.dev/eas-update/introduction/)

### Native SDK Documentation

- [Agora React Native SDK](https://docs.agora.io/en/video-calling/get-started/get-started-sdk?platform=react-native)
- [Razorpay React Native](https://razorpay.com/docs/payments/payment-gateway/quick-integration/react-native/)
- [React Native Firebase](https://rnfirebase.io/)

---

## 🎯 Success Criteria

This strategy is successful if:

1. ✅ Developers can test native features locally
2. ✅ Hot reload works during development
3. ✅ Build process is automated via EAS
4. ✅ Can deploy JS updates without app store review
5. ✅ Both iOS and Android builds work
6. ✅ Team can onboard without native dev expertise

---

## 🔄 Review Schedule

This document should be reviewed:

- **Quarterly**: To assess if strategy is working
- **Before major SDK updates**: To ensure compatibility
- **When scaling team**: To optimize for team size
- **If encountering blockers**: To pivot if necessary

---

## ✅ Next Steps

1. [ ] Set up EAS account for team
2. [ ] Create `eas.json` configuration
3. [ ] Build first development client
4. [ ] Test Agora SDK integration
5. [ ] Test Razorpay integration
6. [ ] Document team workflow
7. [ ] Train team on new workflow

---

**Approved By:** Development Team
**Date:** October 28, 2025
**Review Date:** January 28, 2026
