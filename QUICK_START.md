# 🚀 Quick Start Guide

## Run the App

### Option 1: Using npm

```bash
# Start the development server
npm start

# Or run directly on platform
npm run android    # For Android
npm run ios        # For iOS (Mac only)
npm run web        # For Web browser
```

### Option 2: Using Expo Go App (Recommended for Testing)

1. Install **Expo Go** on your phone:
   - [Android - Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Start the server:

   ```bash
   npm start
   ```

3. Scan the QR code:
   - **Android**: Use Expo Go app's QR scanner
   - **iOS**: Use Camera app, then open in Expo Go

## 📱 App Flow

1. **Onboarding**: Swipe through 3 beautiful intro slides
2. **Login**: Enter phone number → Receive OTP
3. **Profile Setup**: Enter birth details (optional)
4. **Home Dashboard**: View horoscope, browse astrologers
5. **Explore**: Navigate through bottom tabs

## 🎨 Features to Test

### ✅ Authentication

- Onboarding slides with smooth animations
- Login with phone number
- OTP verification (mock flow)
- Profile setup with birth details

### ✅ Home Screen

- Personalized greeting
- Today's horoscope card with gradient
- Quick action buttons
- Featured astrologers carousel
- Quote of the day

### ✅ Horoscope

- Daily/Weekly/Monthly toggle
- Zodiac sign selection
- Life aspects with progress bars
- Lucky numbers and colors

### ✅ Astrologers

- Search functionality
- Category filters
- Sort by rating/price/experience
- Online/Offline status
- Detailed profiles with reviews

### ✅ Navigation

- Bottom tab navigation
- Smooth transitions between screens
- Back navigation

## 🎯 Test Credentials

Since this is a demo without backend:

- Any phone number works
- OTP: Any 6 digits
- All data is mock/static

## 🐛 Troubleshooting

### Port already in use

```bash
# Kill the process on port 19000
npx kill-port 19000
```

### Module not found

```bash
npm install
# Clear cache
npx expo start -c
```

### Expo Go not connecting

1. Ensure phone and computer are on same WiFi
2. Try using tunnel mode: `npx expo start --tunnel`

## 📝 Project Highlights

### Design System

- **Primary**: Rose Pink (#FF66B2)
- **Secondary**: White (#FFFFFF)
- **Tertiary**: Black (#000000)
- **Background**: Light Pink (#FFF5F8)

### Components

- Reusable Button (4 variants)
- Card component with shadows
- Custom Input with validation
- Gradient backgrounds
- Smooth animations

### Screens

- 5 Auth screens
- 2 Home screens
- 2 Astrologer screens
- 5 Tab screens (3 placeholders)

## 🔧 Development Tips

1. **Hot Reload**: Shake device or press `r` in terminal
2. **Developer Menu**: Shake device or `Cmd+D` (iOS) / `Cmd+M` (Android)
3. **Inspect Element**: Enable in Developer Menu
4. **Performance**: Use `console.log()` for debugging

## 📱 Recommended Testing Order

1. Start with Onboarding → Login flow
2. Complete Profile Setup
3. Explore Home Dashboard
4. View Horoscope details
5. Browse Astrologer List
6. Open Astrologer Profile
7. Test bottom tab navigation

## 🔥 Firebase Setup (Optional)

To enable authentication and push notifications:

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the wizard
   - Project name: `astrowisdom` or `astrowisdom-dev`

2. **Enable Authentication**:
   - Navigate to Authentication > Sign-in method
   - Enable "Phone" and "Email/Password"
   - Add test phone numbers for development

3. **Get Configuration**:
   - Project Settings > Your apps > Add app (iOS/Android/Web)
   - Download config files:
     - iOS: `GoogleService-Info.plist`
     - Android: `google-services.json`
   - Copy Firebase config values

4. **Add to Environment**:
   - Update `.env` file with Firebase credentials from step 3
   - See `.env.example` for required fields

5. **Detailed Instructions**:
   - See `/docs/FIREBASE_SETUP.md` for complete guide
   - Backend setup: `../astrowisdom-backend/docs/FIREBASE_SETUP.md`

## 🎉 What's Next?

**Backend Setup:**

- [ ] Backend API with Node.js/Express → See `../astrowisdom-backend/`
- [ ] Real-time chat with Socket.io
- [ ] API contracts defined in OpenAPI spec

**Native Features:**

- [ ] Voice/Video calls with Agora SDK
- [ ] Payment integration (Razorpay)
- [ ] Firebase authentication & push notifications
- [ ] See `/docs/NATIVE_SDK_STRATEGY.md` for implementation approach

**Features:**

- [ ] Kundli generation
- [ ] Report purchases
- [ ] Wallet recharge
- [ ] Call scheduling

Enjoy exploring AstroWisdom! ✨
