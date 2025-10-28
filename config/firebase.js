import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

/**
 * Firebase Configuration
 *
 * Firebase is automatically initialized using the config from:
 * - Android: google-services.json
 * - iOS: GoogleService-Info.plist
 *
 * No manual initialization needed with React Native Firebase!
 */

/**
 * Request notification permissions (iOS requires explicit permission)
 */
export async function requestNotificationPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Notification permission granted:', authStatus);
      return true;
    } else {
      console.log('Notification permission denied');
      return false;
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return false;
  }
}

/**
 * Get FCM token for push notifications
 */
export async function getFCMToken() {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error getting FCM token:', error);
    return null;
  }
}

/**
 * Sign in with phone number (sends OTP)
 * @param {string} phoneNumber - Phone number with country code (e.g., +919876543210)
 */
export async function signInWithPhoneNumber(phoneNumber) {
  try {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('OTP sent to:', phoneNumber);
    return confirmation;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}

/**
 * Verify OTP and complete phone authentication
 * @param {object} confirmation - Confirmation object from signInWithPhoneNumber
 * @param {string} code - OTP code received by user
 */
export async function verifyOTP(confirmation, code) {
  try {
    const userCredential = await confirmation.confirm(code);
    console.log('User signed in:', userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
}

/**
 * Sign in with email and password
 * @param {string} email
 * @param {string} password
 */
export async function signInWithEmail(email, password) {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in:', userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in with email:', error);
    throw error;
  }
}

/**
 * Create new user with email and password
 * @param {string} email
 * @param {string} password
 */
export async function signUpWithEmail(email, password) {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('User created:', userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Sign out current user
 */
export async function signOut() {
  try {
    await auth().signOut();
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

/**
 * Get current authenticated user
 */
export function getCurrentUser() {
  return auth().currentUser;
}

/**
 * Listen to authentication state changes
 * @param {function} callback - Function to call when auth state changes
 */
export function onAuthStateChanged(callback) {
  return auth().onAuthStateChanged(callback);
}

// Export Firebase modules for direct access if needed
export { auth, messaging };
