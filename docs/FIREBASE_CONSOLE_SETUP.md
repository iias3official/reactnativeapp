# Firebase Console Setup Checklist

**Project:** AstroWisdom (astrowisdom-e62ad)
**Last Updated:** October 28, 2025

This document guides you through enabling and configuring Firebase services in the Firebase Console.

---

## 🔗 Quick Links

- **Firebase Console:** https://console.firebase.google.com/
- **Project:** https://console.firebase.google.com/project/astrowisdom-e62ad

---

## ✅ Setup Checklist

### 1. Authentication Setup

**Navigate to:** Firebase Console → Build → Authentication

#### a) Enable Authentication

- [ ] Click "Get Started" if first time
- [ ] Authentication is now enabled

#### b) Enable Phone Authentication

1. [ ] Go to **Sign-in method** tab
2. [ ] Click **Add new provider**
3. [ ] Select **Phone**
4. [ ] Toggle **Enable**
5. [ ] Click **Save**

**Testing Phone Auth:**

- For development, you can add test phone numbers:
- [ ] Scroll down to **Phone numbers for testing**
- [ ] Add test number: `+919876543210` with code: `123456`
- [ ] Click **Add**

#### c) Enable Email/Password Authentication

1. [ ] Go to **Sign-in method** tab
2. [ ] Click **Add new provider**
3. [ ] Select **Email/Password**
4. [ ] Toggle **Enable** (first option only, not Email link)
5. [ ] Click **Save**

**Status:**

```
✅ Phone Authentication: Enabled
✅ Email/Password: Enabled
✅ Test phone numbers: Configured (optional for dev)
```

---

### 2. Cloud Messaging (FCM) Setup

**Navigate to:** Firebase Console → Build → Cloud Messaging

#### a) Enable Cloud Messaging API

1. [ ] Go to **Cloud Messaging** section
2. [ ] If prompted, click **Enable Cloud Messaging API**
3. [ ] Wait for API to be enabled

#### b) Configure Android

1. [ ] Go to **Project Settings** (gear icon) → **Cloud Messaging** tab
2. [ ] Verify **Server key** is generated
3. [ ] Copy **Server key** (needed for backend to send notifications)
4. [ ] Save server key to backend `.env`:
   ```
   FIREBASE_SERVER_KEY=<your-server-key>
   ```

#### c) Configure iOS (When ready for iOS build)

1. [ ] Upload APNs Authentication Key or APNs Certificate
2. [ ] Enter Team ID and Key ID
3. [ ] Click **Upload**

**Status:**

```
✅ Cloud Messaging API: Enabled
✅ Server Key: Generated and saved
⏳ iOS APNs: Pending (configure when building iOS)
```

---

### 3. Firestore Database (Optional - for future use)

**Navigate to:** Firebase Console → Build → Firestore Database

**Note:** Not immediately required, but recommended for future features like chat history, user profiles, etc.

#### a) Create Database

1. [ ] Click **Create database**
2. [ ] Select location: `asia-south1` (Mumbai - closest to India)
3. [ ] Start in **Test mode** (for development)
4. [ ] Click **Enable**

#### b) Set Security Rules (Important!)

Default test mode rules expire in 30 days. Update to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Chat messages - only authenticated users
    match /chats/{chatId} {
      allow read, write: if request.auth != null;
    }

    // Public astrologer profiles
    match /astrologers/{astrologerId} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can update
    }
  }
}
```

**Status:**

```
⏳ Firestore: Optional (recommended for future)
```

---

### 4. Firebase Storage (Optional - for user uploads)

**Navigate to:** Firebase Console → Build → Storage

**Note:** For storing user profile pictures, astrologer photos, etc.

#### a) Create Storage Bucket

1. [ ] Click **Get started**
2. [ ] Start in **Test mode**
3. [ ] Select location: `asia-south1` (Mumbai)
4. [ ] Click **Done**

#### b) Set Security Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // User profile pictures
    match /users/{userId}/profile/{filename} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId
                   && request.resource.size < 5 * 1024 * 1024; // 5MB limit
    }

    // Astrologer photos
    match /astrologers/{astrologerId}/{filename} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

**Status:**

```
⏳ Storage: Optional (recommended for future)
```

---

### 5. Get iOS Configuration (When ready for iOS)

**Navigate to:** Firebase Console → Project Settings → General

1. [ ] Scroll to **Your apps** section
2. [ ] Click **Add app** → **iOS**
3. [ ] Enter iOS bundle ID: `com.lumora.astrowisdom`
4. [ ] Download `GoogleService-Info.plist`
5. [ ] Place in project root: `/home/iamcode01/Desktop/bestgore/astrowisdom/`
6. [ ] Update `.gitignore` (already done)

**Status:**

```
⏳ iOS Config: Pending (when ready for iOS build)
```

---

### 6. Set Up Service Account (For Backend)

**Navigate to:** Firebase Console → Project Settings → Service Accounts

#### a) Generate Private Key

1. [ ] Go to **Service accounts** tab
2. [ ] Click **Generate new private key**
3. [ ] Confirm and download JSON file
4. [ ] **IMPORTANT:** Keep this file secure! Never commit to git!

#### b) Add to Backend

1. [ ] Place file in backend: `config/firebase-admin-key.json`
2. [ ] Update backend `.gitignore`:
   ```
   config/firebase-admin-key.json
   ```
3. [ ] Reference in backend code:

   ```javascript
   const admin = require('firebase-admin');
   const serviceAccount = require('./config/firebase-admin-key.json');

   admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
   });
   ```

**Status:**

```
⏳ Service Account: Needed for backend Firebase Admin SDK
```

---

## 🧪 Testing Firebase Integration

### Test 1: Phone Authentication

Create a test file: `app/__tests__/firebase-phone-test.js`

```javascript
import { signInWithPhoneNumber, verifyOTP } from '../config/firebase';

// Test with configured test phone number
async function testPhoneAuth() {
  try {
    console.log('Testing phone auth...');
    const confirmation = await signInWithPhoneNumber('+919876543210');
    console.log('✅ OTP sent successfully');

    // Use test code: 123456
    const user = await verifyOTP(confirmation, '123456');
    console.log('✅ User authenticated:', user.uid);
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testPhoneAuth();
```

### Test 2: Email Authentication

```javascript
import { signUpWithEmail, signInWithEmail } from '../config/firebase';

async function testEmailAuth() {
  try {
    // Sign up
    console.log('Testing email signup...');
    const user = await signUpWithEmail('test@astrowisdom.com', 'password123');
    console.log('✅ User created:', user.uid);

    // Sign in
    console.log('Testing email signin...');
    const signedInUser = await signInWithEmail('test@astrowisdom.com', 'password123');
    console.log('✅ User signed in:', signedInUser.uid);
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testEmailAuth();
```

### Test 3: FCM Token

```javascript
import { requestNotificationPermission, getFCMToken } from '../config/firebase';

async function testFCM() {
  try {
    console.log('Requesting notification permission...');
    const granted = await requestNotificationPermission();
    console.log('✅ Permission granted:', granted);

    if (granted) {
      const token = await getFCMToken();
      console.log('✅ FCM Token received:', token.substring(0, 20) + '...');
    }
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testFCM();
```

---

## 🔐 Security Reminders

### Files to NEVER Commit:

```bash
# Already in .gitignore
google-services.json
GoogleService-Info.plist
.env
config/firebase-admin-key.json
```

### Environment Variables:

All Firebase config should be in `.env` (already configured):

```bash
FIREBASE_API_KEY=AIzaSyBuW7_EeNWohFmDHfz-BqzIBoFhhSKjdQA
FIREBASE_AUTH_DOMAIN=astrowisdom-e62ad.firebaseapp.com
FIREBASE_PROJECT_ID=astrowisdom-e62ad
FIREBASE_STORAGE_BUCKET=astrowisdom-e62ad.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=418803198245
FIREBASE_APP_ID=1:418803198245:android:0c496baf0a8bb9286752cc
```

---

## 📊 Current Status Summary

| Service                    | Status              | Required For                    |
| -------------------------- | ------------------- | ------------------------------- |
| **Authentication (Phone)** | ⏳ Needs enabling   | User login with OTP             |
| **Authentication (Email)** | ⏳ Needs enabling   | Admin/Astrologer login          |
| **Cloud Messaging (FCM)**  | ⏳ Needs enabling   | Push notifications              |
| **Firestore Database**     | ⏳ Optional         | Chat history, profiles (future) |
| **Firebase Storage**       | ⏳ Optional         | File uploads (future)           |
| **Service Account Key**    | ⏳ Needs generation | Backend admin operations        |
| **iOS Configuration**      | ⏳ Pending          | iOS app build                   |

---

## 🎯 Immediate Action Items

**Before you can use Firebase in the app:**

1. [ ] Enable Phone Authentication in Firebase Console
2. [ ] Enable Email/Password Authentication
3. [ ] Enable Cloud Messaging (FCM)
4. [ ] Copy FCM Server Key to backend `.env`
5. [ ] Generate Service Account Key for backend
6. [ ] Add test phone number for development
7. [ ] Run Firebase test scripts to verify

**Estimated time:** 15-20 minutes

---

## 📚 References

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [React Native Firebase Docs](https://rnfirebase.io/)
- [FCM Setup Guide](https://firebase.google.com/docs/cloud-messaging)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

---

## ❓ Troubleshooting

### "Firebase not initialized" Error

**Solution:** Make sure you've added the config plugins to `app.json` (already done) and rebuilt the app with development client.

### "Phone auth not working" Error

**Solution:**

1. Verify Phone sign-in method is enabled in Firebase Console
2. For testing, add test phone number in Console
3. Check SHA-1 certificate is configured for Android

### "FCM token not generated" Error

**Solution:**

1. Verify Cloud Messaging API is enabled
2. Check notification permissions are granted
3. Run app on physical device (FCM doesn't work on some emulators)

---

**Next Steps:** Follow the checklist above to enable Firebase services, then proceed with building the development client using EAS Build.
