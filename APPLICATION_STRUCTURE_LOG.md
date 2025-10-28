# AstroWisdom Application Structure & Functionality Log

**Generated:** October 28, 2025
**Application Name:** AstroWisdom
**Version:** 1.0.0
**Platform:** React Native (Expo)

---

## 📋 Executive Summary

AstroWisdom is a comprehensive astrology consultation mobile application built with React Native and Expo. The app connects users with professional astrologers for consultations through multiple channels (chat, call, video). It features a modern, pink-themed UI with a focus on user experience and seamless navigation.

---

## 🏗️ Application Architecture

### Technology Stack

**Core Framework:**

- React Native 0.81.5
- React 19.1.0
- Expo ~54.0.0

**Navigation:**

- @react-navigation/native ^6.1.9
- @react-navigation/stack ^6.3.20
- @react-navigation/bottom-tabs ^6.5.11
- react-native-gesture-handler ~2.28.0
- react-native-screens ~4.16.0
- react-native-safe-area-context ~5.6.0

**State Management:**

- Zustand ^4.4.0

**UI/UX Libraries:**

- expo-linear-gradient ~15.0.7
- expo-status-bar ~3.0.8
- expo-splash-screen ~31.0.10

**Utilities:**

- Axios ^1.6.0 (HTTP client)
- expo-font ~14.0.9
- expo-asset ~12.0.9

---

## 📁 Project Structure

```
astrowisdom/
├── App.js                          # Root component & navigation container
├── app.json                        # Expo configuration
├── package.json                    # Dependencies & scripts
├── babel.config.js                 # Babel configuration
├── README.md                       # Project documentation
├── QUICK_START.md                  # Quick start guide
├── assets/                         # Static assets
│   ├── fonts/                      # Custom fonts
│   └── images/                     # Images and icons
└── src/
    ├── components/                 # Reusable UI components
    │   ├── Button.js              # Customizable button component
    │   ├── Card.js                # Card container component
    │   └── Input.js               # Input field component
    ├── navigation/
    │   └── AppNavigator.js        # Main navigation configuration
    ├── screens/
    │   ├── Auth/                  # Authentication flow screens
    │   │   ├── OnboardingScreen.js
    │   │   ├── LoginScreen.js
    │   │   ├── RegisterScreen.js
    │   │   ├── OtpVerificationScreen.js
    │   │   └── UserProfileSetupScreen.js
    │   ├── Home/                  # Main app screens
    │   │   ├── HomeScreen.js
    │   │   └── HoroscopeScreen.js
    │   └── Astrologer/            # Astrologer related screens
    │       ├── AstrologerListScreen.js
    │       └── AstrologerProfileScreen.js
    ├── services/                  # API services (empty)
    ├── store/
    │   └── userStore.js          # User state management
    ├── theme/                     # Design system
    │   ├── colors.js             # Color palette
    │   ├── typography.js         # Font styles & sizes
    │   ├── spacing.js            # Spacing & sizing constants
    │   └── index.js              # Theme aggregator
    └── utils/                     # Utility functions (empty)
```

---

## 🎨 Design System

### Color Palette

**Primary Colors:**

- Primary: #FF66B2 (Rose Pink)
- Primary Light: #FF99CC
- Primary Dark: #FF3399

**Secondary Colors:**

- Secondary: #FFFFFF (White)
- Tertiary: #000000 (Black)

**Background Colors:**

- Background: #FFF5F8 (Light Pink)
- Card Background: #FFFFFF
- Overlay: rgba(0, 0, 0, 0.5)

**Text Colors:**

- Primary Text: #1A1A1A
- Secondary Text: #666666
- Light Text: #999999
- White Text: #FFFFFF

**Status Colors:**

- Success: #4CAF50 (Green)
- Warning: #FFC107 (Amber)
- Error: #F44336 (Red)
- Info: #2196F3 (Blue)
- Online: #4CAF50
- Offline: #999999

**Border Colors:**

- Border: #FFE6F0
- Border Light: #FFF0F5

**Gradient:**

- Gradient Start: #FF66B2
- Gradient End: #FF99CC

### Typography

The app uses a comprehensive typography system with:

- Font sizes ranging from xs (12px) to xxxl (36px)
- Font weights: regular, medium, semibold, bold
- Line heights for optimal readability

### Spacing & Sizing

Consistent spacing scale:

- xs, sm, base, md, lg, xl, xxl, xxxl, mega
- Button sizes: small, medium, large
- Border radius: xs, sm, md, lg, xl, full

### Shadows

Platform-specific shadow system (iOS & Android):

- Small, medium, large shadows
- Card-specific shadow styling

---

## 🗺️ Navigation Structure

### Navigation Type: Hybrid Stack + Bottom Tabs

**Root Stack Navigator:**

1. Authentication Flow (Stack)
   - Onboarding
   - Login
   - Register
   - OTP Verification
   - User Profile Setup

2. Main App (Bottom Tabs)
   - Home Tab
   - Astrologers Tab
   - Chat Tab (Coming Soon)
   - Wallet Tab (Coming Soon)
   - Profile Tab (Coming Soon)

3. Nested Screens (Stack)
   - Horoscope Detail
   - Astrologer Profile

**Tab Bar Configuration:**

- Custom emoji-based icons
- Active/inactive states with color changes
- Labels below icons
- Smooth animations on tab switch
- Custom styling with elevated shadow

---

## 🔐 Authentication System

### State Management

Uses Zustand store with the following functionality:

- `user`: User object storage
- `isAuthenticated`: Authentication status
- `setUser`: Set user and mark as authenticated
- `updateUser`: Update user data
- `logout`: Clear user and mark as unauthenticated

### Authentication Flow Screens

**1. OnboardingScreen** (src/screens/Auth/OnboardingScreen.js)

- 3 animated slides with horizontal scrolling
- Features:
  - Connect with Expert Astrologers
  - Chat, Call or Video Consult
  - Personalized Horoscopes
- Animated pagination dots
- Skip button
- "Get Started" CTA on final slide
- Gradient background (Primary to Secondary)
- Uses FlatList for performance optimization

**2. LoginScreen**

- Phone/Email login option
- Input validation
- "Remember me" functionality
- Social login options
- Forgot password link
- Navigate to Register screen

**3. RegisterScreen**

- New user registration
- Multiple input fields
- Terms & conditions acceptance
- Navigate to OTP verification

**4. OtpVerificationScreen**

- 4/6 digit OTP input
- Resend OTP functionality
- Timer countdown
- Auto-verification
- Navigate to profile setup

**5. UserProfileSetupScreen**

- Birth date, time, place input
- Zodiac sign calculation
- Profile photo upload
- Personal details collection
- Complete registration flow

---

## 🏠 Home & Dashboard

### HomeScreen (src/screens/Home/HomeScreen.js)

**Features:**

1. **Header Section**
   - Personalized greeting with user name
   - Welcome message
   - Notification bell with badge count
   - Gradient background (Primary colors)
   - Rounded bottom corners

2. **Today's Horoscope Card**
   - User's zodiac sign display
   - Daily horoscope preview
   - Gradient card design
   - "Read More" CTA linking to detailed horoscope
   - Custom emoji icon

3. **Quick Actions Grid**
   - 4 action buttons in a row
   - Icons: Chat, Call, Video, Report
   - Color-coded backgrounds
   - Tap handlers for each action

4. **Quote of the Day Card**
   - Daily inspirational quote
   - Author attribution
   - Decorative icon
   - White card with shadow

5. **Featured Astrologers Carousel**
   - Horizontal scrollable list
   - Top-rated astrologers
   - Display information:
     - Avatar with initial
     - Name
     - Expertise
     - Rating with stars
     - Experience years
     - Price per minute
     - Online/offline status indicator
   - Chat button CTA
   - "View All" link to full list
   - Card-based layout

**UI Components:**

- Gradient backgrounds
- Shadow effects
- Rounded corners
- Responsive layout
- ScrollView for vertical scrolling

---

## 🌟 Horoscope Module

### HoroscopeScreen (src/screens/Home/HoroscopeScreen.js)

**Features:**

- Daily, Weekly, Monthly predictions
- Zodiac sign selection/switching
- Life aspects tabs:
  - Love & Relationships
  - Career & Business
  - Health & Wellness
  - Finance & Money
- Lucky numbers display
- Lucky colors display
- Compatibility information
- Share horoscope functionality

---

## 👨‍🏫 Astrologer Module

### AstrologerListScreen (src/screens/Astrologer/AstrologerListScreen.js)

**Features:**

1. **Header with Gradient**
   - Back button
   - Screen title
   - Filter/settings button
   - Search functionality

2. **Search Bar**
   - Real-time search input
   - Search icon
   - White background in gradient header
   - Placeholder text

3. **Category Filters**
   - Horizontal scrollable chips
   - Categories:
     - All (⭐)
     - Vedic (🔮)
     - Tarot (🃏)
     - Numerology (🔢)
     - Palmistry (✋)
   - Active/inactive states
   - Color-coded selection

4. **Sort Options**
   - Result count display
   - Sort by:
     - Top Rated
     - Price
     - Experience
   - Toggle buttons with active states

5. **Astrologer Cards (FlatList)**
   - Left side:
     - Avatar with initial
     - Online/offline indicator (colored dot)
   - Right side:
     - Name with "Top" badge for high-rated
     - Expertise area
     - Statistics row:
       - Rating with review count
       - Experience years
       - Total consultations
     - Language tags (first 2)
     - Footer with:
       - Price per minute
       - Action buttons (Chat, Call icons)
       - Primary "Chat" CTA button with gradient
   - Full card is tappable to view profile
   - Shadow and border styling

**Data Structure (Astrologer):**

- id, name, expertise
- rating, reviews, experience
- price (per minute)
- languages array
- isOnline boolean
- consultations count

### AstrologerProfileScreen (src/screens/Astrologer/AstrologerProfileScreen.js)

**Features:**

- Detailed astrologer information
- Profile photo/avatar
- About section
- Skills and expertise tags
- Specializations list
- Reviews and ratings section
- Individual review cards
- Statistics:
  - Total consultations
  - Years of experience
  - Average rating
  - Response time
- Pricing information
- Multiple consultation options:
  - Chat consultation
  - Voice call
  - Video call
- Availability schedule
- Gallery/portfolio
- Action buttons:
  - Book consultation
  - Chat now
  - Follow/Favorite

---

## 🧩 Reusable Components

### Button Component (src/components/Button.js)

**Props:**

- `title`: Button text
- `onPress`: Click handler
- `variant`: primary | secondary | outline | gradient
- `size`: sm | md | lg
- `loading`: Boolean for loading state
- `disabled`: Boolean for disabled state
- `icon`: Optional icon component
- `style`: Custom styles
- `textStyle`: Custom text styles

**Features:**

- Multiple variants with different styling
- Size-based dimensions and font sizes
- Loading spinner integration
- Gradient variant using LinearGradient
- Accessibility support
- Shadow effects
- Disabled state styling

### Card Component (src/components/Card.js)

**Props:**

- `children`: Content inside card
- `style`: Custom styles
- `onPress`: Optional press handler (makes it touchable)
- `variant`: default | gradient | outlined
- `padding`: Custom padding value

**Features:**

- Conditional TouchableOpacity or View wrapper
- Multiple style variants
- Shadow effects
- Rounded corners
- Flexible padding
- Press animation (opacity change)

### Input Component (src/components/Input.js)

**Expected Props:**

- Label text
- Placeholder
- Value
- onChange handler
- Input type (text, password, email, phone)
- Validation rules
- Error message display
- Icons (left/right)
- Disabled state
- Custom styling

---

## 📊 State Management

### User Store (src/store/userStore.js)

**Technology:** Zustand

**State:**

```javascript
{
  user: null,              // User object
  isAuthenticated: false   // Auth status
}
```

**Actions:**

- `setUser(user)`: Set user data and mark authenticated
- `updateUser(userData)`: Merge update to existing user data
- `logout()`: Clear user and mark unauthenticated

**Usage Pattern:**

- Import: `import useUserStore from '../store/userStore'`
- Access: `const { user, setUser } = useUserStore()`
- No providers needed (Zustand auto-manages)

---

## 🎯 Key Features Summary

### ✅ Implemented Features (Phase 1)

1. **Authentication & Onboarding**
   - 3-slide onboarding experience
   - Phone/Email login options
   - OTP verification system
   - User profile setup with birth details

2. **Home Dashboard**
   - Personalized user greeting
   - Today's horoscope preview card
   - Quick action buttons (Chat, Call, Video, Report)
   - Featured astrologers carousel
   - Daily inspirational quotes
   - Notification system

3. **Horoscope System**
   - Daily, Weekly, Monthly predictions
   - Zodiac sign selection
   - Life aspect categories (Love, Career, Health, Finance)
   - Lucky numbers and colors
   - Horoscope sharing

4. **Astrologer Discovery**
   - Comprehensive search functionality
   - Category-based filtering (Vedic, Tarot, Numerology, Palmistry)
   - Multiple sorting options (Rating, Price, Experience)
   - Online/Offline status indicators
   - Ratings and reviews display
   - Language preferences

5. **Astrologer Profiles**
   - Detailed profile information
   - Skills and expertise showcase
   - Reviews and ratings
   - Statistics and achievements
   - Multiple consultation options (Chat, Call, Video)
   - Pricing transparency

6. **UI/UX Excellence**
   - Modern pink-themed design
   - Smooth animations and transitions
   - Gradient effects throughout
   - Shadow and depth effects
   - Responsive layouts
   - Bottom tab navigation
   - Custom emoji icons

### 🚧 Coming Soon (Planned Features)

1. **Chat System**
   - Real-time messaging
   - Socket.io integration
   - Message history
   - Media sharing
   - Typing indicators
   - Read receipts

2. **Call Integration**
   - Voice calling (Agora SDK)
   - Video calling (Agora SDK)
   - Call quality controls
   - Call history
   - Call recording

3. **Wallet & Payments**
   - Payment gateway integration (Razorpay/Stripe)
   - Wallet balance management
   - Transaction history
   - Recharge options
   - Payment methods
   - Refund system

4. **User Profile**
   - Edit profile details
   - Birth chart display
   - Consultation history
   - Favorites/Bookmarks
   - Settings & preferences
   - Notification settings

5. **Reports System**
   - Generate detailed astrology reports
   - Purchase and download reports
   - Report types:
     - Birth chart analysis
     - Compatibility reports
     - Career guidance
     - Marriage predictions
     - Yearly forecasts

6. **Backend Integration**
   - Node.js/Express API
   - Database integration
   - Firebase authentication
   - Push notifications
   - Real-time updates
   - Data synchronization

---

## 🔄 App Flow Diagram

```
[App Launch]
    ↓
[OnboardingScreen] (3 slides)
    ↓
[LoginScreen] ←→ [RegisterScreen]
    ↓
[OtpVerificationScreen]
    ↓
[UserProfileSetupScreen]
    ↓
[Main App - Bottom Tabs]
    ├── Home Tab (HomeScreen)
    │   ├── View Horoscope → [HoroscopeScreen]
    │   └── View Astrologer → [AstrologerProfileScreen]
    │
    ├── Astrologers Tab (AstrologerListScreen)
    │   └── Select Astrologer → [AstrologerProfileScreen]
    │
    ├── Chat Tab (Coming Soon)
    │
    ├── Wallet Tab (Coming Soon)
    │
    └── Profile Tab (Coming Soon)
```

---

## 📱 Screen Breakdown

### Total Screens Count: 13

**Implemented:** 7

- OnboardingScreen
- LoginScreen
- RegisterScreen
- OtpVerificationScreen
- UserProfileSetupScreen
- HomeScreen
- HoroscopeScreen
- AstrologerListScreen
- AstrologerProfileScreen

**Placeholder/Coming Soon:** 3

- ChatScreen
- WalletScreen
- ProfileScreen

---

## 🎨 UI/UX Patterns

### Common Patterns Used:

1. **Gradient Headers**
   - Primary to Primary Light gradient
   - Rounded bottom corners
   - White text
   - Consistent height

2. **Card-Based Layouts**
   - White background
   - Rounded corners (border radius: lg)
   - Shadow effects
   - Padding: base or custom
   - Touchable for navigation

3. **Bottom Tab Navigation**
   - Emoji icons with labels
   - Active/inactive states
   - Color-coded focus (primary color)
   - Elevated design with shadow

4. **Action Buttons**
   - Primary (solid color)
   - Secondary (outlined)
   - Gradient (linear gradient)
   - Icon support
   - Loading states
   - Disabled states

5. **List Patterns**
   - FlatList for performance
   - Horizontal scrolling carousels
   - Vertical scrolling lists
   - Pull-to-refresh ready
   - Empty state handling

6. **Status Indicators**
   - Online/Offline dots
   - Badge notifications
   - Rating stars
   - Color-coded statuses

---

## 🔧 Configuration Files

### app.json (Expo Configuration)

- App Name: AstroWisdom
- Slug: astrowisdom
- Version: 1.0.0
- Orientation: Portrait
- UI Style: Light
- Splash Screen: Light pink background (#FFF5F8)
- Platform-specific configs:
  - iOS: Bundle identifier, tablet support
  - Android: Package name, adaptive icon
  - Web: Metro bundler
- Plugins: expo-asset, expo-font

### package.json Scripts

- `start`: Start Expo development server
- `android`: Run on Android
- `ios`: Run on iOS
- `web`: Run on web browser

---

## 🌐 API Integration (Future)

### Expected API Endpoints:

**Authentication:**

- POST /auth/register
- POST /auth/login
- POST /auth/verify-otp
- POST /auth/logout
- POST /auth/refresh-token

**User:**

- GET /user/profile
- PUT /user/profile
- GET /user/horoscope
- GET /user/consultations

**Astrologers:**

- GET /astrologers (with filters, search, pagination)
- GET /astrologers/:id
- GET /astrologers/:id/reviews
- POST /astrologers/:id/favorite

**Chat:**

- POST /chat/initiate
- GET /chat/conversations
- GET /chat/:conversationId/messages
- POST /chat/:conversationId/message

**Calls:**

- POST /call/initiate
- GET /call/token
- POST /call/end

**Payments:**

- POST /payment/create
- POST /payment/verify
- GET /wallet/balance
- POST /wallet/recharge
- GET /transactions

**Horoscope:**

- GET /horoscope/daily/:zodiacSign
- GET /horoscope/weekly/:zodiacSign
- GET /horoscope/monthly/:zodiacSign

---

## 🐛 Known Issues / Technical Debt

1. No error boundary implementation
2. No offline mode support
3. No image lazy loading
4. API services folder is empty (mock data in components)
5. No analytics integration
6. No crash reporting setup
7. No performance monitoring
8. No accessibility labels
9. No internationalization (i18n)
10. No unit or integration tests

---

## 🔒 Security Considerations

### To Be Implemented:

- Secure token storage (encrypted)
- API request signing
- SSL certificate pinning
- Biometric authentication
- Session management
- Input sanitization
- XSS protection
- Rate limiting
- Payment security compliance

---

## 📈 Performance Considerations

### Current Optimizations:

- FlatList for long lists (virtualization)
- useRef for non-reactive values
- Animated.event with native driver where possible
- Image optimization pending

### Future Optimizations:

- React.memo for expensive components
- useMemo/useCallback for heavy computations
- Code splitting
- Image lazy loading
- Bundle size optimization
- Hermes engine (if not already enabled)

---

## 🎯 Development Guidelines

### Code Style:

- Functional components with hooks
- Arrow functions
- StyleSheet.create for styles
- Inline styles only when dynamic
- Consistent file naming (PascalCase for components)
- Modular component structure

### Best Practices:

- Single responsibility principle
- Reusable components in src/components/
- Screen-specific components in screen files
- Theme constants used consistently
- Zustand for global state
- Local state (useState) for component state

---

## 📝 Maintenance Notes

### Regular Tasks:

- Update dependencies monthly
- Test on latest iOS/Android versions
- Review and update documentation
- Clean up console.logs
- Optimize bundle size
- Monitor app performance
- Review user feedback

### Before Production:

- Remove all console.logs
- Enable production mode
- Set up error tracking (Sentry)
- Set up analytics (Firebase/Mixpanel)
- Configure app signing
- Set up CI/CD pipeline
- Prepare store listings
- Create privacy policy
- Create terms of service

---

## 📞 Support & Contact

### For Development Issues:

- Check README.md
- Check QUICK_START.md
- Review this documentation
- Check Expo documentation
- Review React Native documentation

---

## 📊 Statistics

- **Total Files (src/):** ~20
- **Total Screens:** 9 implemented + 3 placeholders
- **Total Components:** 3 reusable components
- **Total Dependencies:** 18 main dependencies
- **Lines of Code (approx):** ~3000+ lines
- **Platform Support:** iOS, Android, Web
- **Minimum React Native Version:** 0.81.5
- **Minimum Node.js Version:** 14+

---

## ✅ Conclusion

AstroWisdom is a well-structured, modern React Native application with a solid foundation for an astrology consultation platform. The Phase 1 implementation covers essential features including authentication, home dashboard, horoscope viewing, and astrologer discovery. The codebase follows React Native best practices and uses a modular, maintainable architecture.

The app is ready for backend integration and the implementation of real-time features (chat, calls) and payment systems to complete the full user experience.

---

**End of Application Structure Log**
