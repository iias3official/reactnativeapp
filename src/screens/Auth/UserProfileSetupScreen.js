import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, SIZES } from '../../theme';

const UserProfileSetupScreen = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handleGenderSelect = (gender) => {
    setProfileData({ ...profileData, gender });
  };

  const handleComplete = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to Home after profile setup
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 1000);
  };

  const isFormValid =
    profileData.dateOfBirth &&
    profileData.timeOfBirth &&
    profileData.placeOfBirth &&
    profileData.gender;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[COLORS.primary, COLORS.primaryLight]} style={styles.header}>
          <Text style={styles.headerEmoji}>🌙</Text>
          <Text style={styles.headerTitle}>Complete Your Profile</Text>
          <Text style={styles.headerSubtitle}>Tell us about yourself for accurate predictions</Text>
        </LinearGradient>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Birth Details</Text>
          <Text style={styles.formDescription}>
            Your birth details help us create your personalized horoscope
          </Text>

          <Input
            label="Date of Birth"
            value={profileData.dateOfBirth}
            onChangeText={(value) => handleInputChange('dateOfBirth', value)}
            placeholder="DD/MM/YYYY"
            keyboardType="numeric"
          />

          <Input
            label="Time of Birth"
            value={profileData.timeOfBirth}
            onChangeText={(value) => handleInputChange('timeOfBirth', value)}
            placeholder="HH:MM AM/PM"
          />

          <Input
            label="Place of Birth"
            value={profileData.placeOfBirth}
            onChangeText={(value) => handleInputChange('placeOfBirth', value)}
            placeholder="City, State, Country"
          />

          <Text style={styles.genderLabel}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                profileData.gender === 'Male' && styles.genderButtonSelected,
              ]}
              onPress={() => handleGenderSelect('Male')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  profileData.gender === 'Male' && styles.genderButtonTextSelected,
                ]}
              >
                Male
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderButton,
                profileData.gender === 'Female' && styles.genderButtonSelected,
              ]}
              onPress={() => handleGenderSelect('Female')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  profileData.gender === 'Female' && styles.genderButtonTextSelected,
                ]}
              >
                Female
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderButton,
                profileData.gender === 'Other' && styles.genderButtonSelected,
              ]}
              onPress={() => handleGenderSelect('Other')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  profileData.gender === 'Other' && styles.genderButtonTextSelected,
                ]}
              >
                Other
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Complete Setup"
            onPress={handleComplete}
            variant="gradient"
            size="lg"
            loading={isLoading}
            disabled={!isFormValid}
            style={styles.completeButton}
          />

          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })}
          >
            <Text style={styles.skipText}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: SPACING.mega + SPACING.xl,
    paddingBottom: SPACING.xxxl,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
    borderBottomLeftRadius: SIZES.radiusXl * 2,
    borderBottomRightRadius: SIZES.radiusXl * 2,
  },
  headerEmoji: {
    fontSize: 60,
    marginBottom: SPACING.base,
  },
  headerTitle: {
    fontSize: FONT_SIZES.hero,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
    marginBottom: SPACING.sm,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textWhite,
    opacity: 0.9,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xxxl,
  },
  formTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  formDescription: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xl,
    lineHeight: 20,
  },
  genderLabel: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  genderContainer: {
    flexDirection: 'row',
    gap: SPACING.base,
    marginBottom: SPACING.xl,
  },
  genderButton: {
    flex: 1,
    height: SIZES.buttonMd,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radiusMd,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  genderButtonSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight + '20',
  },
  genderButtonText: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
  },
  genderButtonTextSelected: {
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.bold,
  },
  completeButton: {
    marginTop: SPACING.base,
    marginBottom: SPACING.lg,
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: SPACING.base,
  },
  skipText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textSecondary,
    textDecorationLine: 'underline',
  },
});

export default UserProfileSetupScreen;
