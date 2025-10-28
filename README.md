# AstroWisdom - Astrology Consultation App

A beautiful React Native application for connecting users with professional astrologers for consultations via chat, call, and video.

## 🎨 Design

- **Primary Color**: Rose Pink (#FF66B2)
- **Secondary Color**: White (#FFFFFF)
- **Tertiary Color**: Black (#000000)
- **Background**: Light Pink (#FFF5F8)

## ✨ Features

### Phase 1 (Completed)

1. **Authentication & Onboarding**
   - Beautiful onboarding slides
   - Phone/Email login
   - OTP verification
   - User profile setup with birth details

2. **Home Dashboard**
   - Personalized greeting
   - Today's horoscope card
   - Quick action buttons
   - Featured astrologers carousel
   - Daily quotes

3. **Horoscope**
   - Daily, Weekly, Monthly predictions
   - Zodiac sign selection
   - Life aspects (Love, Career, Health, Finance)
   - Lucky numbers and colors

4. **Astrologer Listing**
   - Search and filters
   - Category-based browsing
   - Sorting options
   - Online/Offline status
   - Ratings and reviews

5. **Astrologer Profile**
   - Detailed profile information
   - Skills and expertise
   - Reviews and ratings
   - Multiple consultation options (Chat, Call, Video)

## 📁 Project Structure

```
astrowisdom/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── Input.js
│   ├── screens/
│   │   ├── Auth/           # Authentication screens
│   │   ├── Home/           # Home & Horoscope screens
│   │   └── Astrologer/     # Astrologer screens
│   ├── navigation/         # Navigation configuration
│   ├── store/             # State management (Zustand)
│   ├── theme/             # Design tokens & theme
│   └── services/          # API services
├── App.js
├── app.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Run on your device:
   - Scan the QR code with Expo Go app (Android/iOS)
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Press `w` for web browser

## 📱 Screens Overview

### Authentication Flow

- Onboarding (3 slides)
- Login
- Register
- OTP Verification
- Profile Setup

### Main App

- Home Dashboard
- Horoscope
- Astrologer List
- Astrologer Profile
- Chat (Coming Soon)
- Wallet (Coming Soon)
- Profile (Coming Soon)

## 🎯 Next Steps

1. **Chat System**: Implement real-time chat using Socket.io
2. **Call Integration**: Add voice/video calling with Agora SDK
3. **Payment Gateway**: Integrate Razorpay/Stripe
4. **Reports**: Generate and purchase detailed astrology reports
5. **Backend API**: Build Node.js/Express backend
6. **Firebase**: Setup authentication and push notifications

## 🛠️ Tech Stack

- React Native (Expo)
- React Navigation
- Zustand (State Management)
- Expo Linear Gradient
- Axios (API calls)

## 📄 License

This project is private and proprietary.

## 👥 Team

- Project: AstroWisdom
- Version: 1.0.0
