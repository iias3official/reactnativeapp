---
name: Native Module Addition
about: Request to add a new native SDK or module
title: '[NATIVE] Add [Module Name]'
labels: native, enhancement
assignees: ''
---

## 📦 Native Module Information

**Module Name:** [e.g., react-native-camera]
**NPM Package:** [link to npm]
**GitHub Repository:** [link to GitHub]

## 🎯 Purpose

Describe why this native module is needed.

## ✅ Module Requirements Checklist

- [ ] Module is actively maintained
- [ ] Module supports both iOS and Android
- [ ] Module has Expo config plugin (or community plugin available)
- [ ] Module documentation is comprehensive
- [ ] Module has good community support
- [ ] No Expo-compatible alternative exists

## 🔌 Expo Config Plugin

**Status:**

- [ ] Official Expo config plugin exists
- [ ] Community config plugin exists
- [ ] No plugin exists (need to create one)
- [ ] Not applicable (bare workflow only)

**Plugin Package:** [if available]

## 📋 Installation Steps

Provide the installation and configuration steps:

```bash
# Installation command
npm install [package-name]

# Config plugin addition (if applicable)
# Add to app.json
```

## 🛠️ Configuration Required

**app.json changes:**

```json
{
  "expo": {
    "plugins": ["[plugin-name]"]
  }
}
```

**Additional native configuration:**

- iOS:
- Android:

## 🧪 Testing Plan

How will you test this integration?

- [ ] Tested on iOS
- [ ] Tested on Android
- [ ] Development build created
- [ ] Feature working as expected

## 📝 Documentation Updates

What documentation needs to be updated?

- [ ] README.md
- [ ] NATIVE_SDK_STRATEGY.md
- [ ] .env.example (if new env vars needed)
- [ ] NATIVE_DEPENDENCIES.md

## ⚠️ Breaking Changes

Will this require:

- [ ] New development build for all developers
- [ ] Expo account/EAS setup
- [ ] Additional environment variables
- [ ] Third-party service accounts

## 💰 Cost Implications

Does this module require:

- [ ] Paid service subscription
- [ ] API keys with usage limits
- [ ] Additional EAS build credits

**Estimated Cost:** [if applicable]

## 🔄 Rollback Plan

If this integration fails, what's the rollback plan?

## 🎯 Implementation Timeline

**Estimated Time:** [e.g., 1 week]

**Milestones:**

1. Research and approval
2. Development build with module
3. Feature implementation
4. Testing
5. Documentation
6. Production release

## ✅ Pre-Implementation Checklist

- [ ] Team approval obtained
- [ ] Technical lead reviewed
- [ ] Cost implications understood
- [ ] Documentation plan created
- [ ] Testing strategy defined

## 🔗 Related Resources

- [Module Documentation]()
- [Config Plugin Documentation]()
- [Similar Implementation Examples]()

---

**⚠️ Important Reminder:**

After adding native module:

1. Create feature branch: `feature/native-[module-name]`
2. Build new development client: `eas build --profile development`
3. All team members must install new development build
4. Update team in #dev-updates channel
