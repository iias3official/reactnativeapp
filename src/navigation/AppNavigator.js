import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING } from '../theme';

// Auth Screens
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import OtpVerificationScreen from '../screens/Auth/OtpVerificationScreen';
import UserProfileSetupScreen from '../screens/Auth/UserProfileSetupScreen';

// Home Screens
import HomeScreen from '../screens/Home/HomeScreen';
import HoroscopeScreen from '../screens/Home/HoroscopeScreen';

// Astrologer Screens
import AstrologerListScreen from '../screens/Astrologer/AstrologerListScreen';
import AstrologerProfileScreen from '../screens/Astrologer/AstrologerProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Placeholder Screens
const ChatScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>💬</Text>
    <Text style={styles.placeholderTitle}>Chat</Text>
    <Text style={styles.placeholderSubtitle}>Coming Soon</Text>
  </View>
);

const WalletScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>💰</Text>
    <Text style={styles.placeholderTitle}>Wallet</Text>
    <Text style={styles.placeholderSubtitle}>Coming Soon</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>👤</Text>
    <Text style={styles.placeholderTitle}>Profile</Text>
    <Text style={styles.placeholderSubtitle}>Coming Soon</Text>
  </View>
);

// Tab Icon Component
const TabIcon = ({ icon, label, focused }) => (
  <View style={styles.tabIconContainer}>
    <Text style={[styles.tabIcon, focused && styles.tabIconFocused]}>{icon}</Text>
    <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>{label}</Text>
  </View>
);

// Bottom Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="🏠" label="Home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="AstrologersTab"
        component={AstrologerListScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="🔮" label="Astrologers" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="💬" label="Chat" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="WalletTab"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="💰" label="Wallet" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="👤" label="Profile" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Main App Navigator
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Auth Flow */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
      <Stack.Screen name="UserProfileSetup" component={UserProfileSetupScreen} />

      {/* Main App */}
      <Stack.Screen name="Home" component={TabNavigator} />

      {/* Nested Screens */}
      <Stack.Screen name="Horoscope" component={HoroscopeScreen} />
      <Stack.Screen name="Astrologers" component={AstrologerListScreen} />
      <Stack.Screen name="AstrologerProfile" component={AstrologerProfileScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.secondary,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    height: 70,
    paddingBottom: SPACING.sm,
    paddingTop: SPACING.sm,
    elevation: 8,
    shadowColor: COLORS.shadowDark,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 2,
  },
  tabIconFocused: {
    transform: [{ scale: 1.1 }],
  },
  tabLabel: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  tabLabelFocused: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  placeholder: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SPACING.mega,
  },
  placeholderText: {
    fontSize: 80,
    marginBottom: SPACING.base,
  },
  placeholderTitle: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  placeholderSubtitle: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textSecondary,
  },
});

export default AppNavigator;
