import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, SIZES, SHADOWS } from '../theme';

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  style,
  textStyle,
}) => {
  const getButtonHeight = () => {
    switch (size) {
      case 'sm':
        return SIZES.buttonSm;
      case 'lg':
        return SIZES.buttonLg;
      default:
        return SIZES.buttonMd;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'sm':
        return FONT_SIZES.sm;
      case 'lg':
        return FONT_SIZES.lg;
      default:
        return FONT_SIZES.base;
    }
  };

  const renderContent = () => (
    <>
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' || variant === 'gradient' ? COLORS.textWhite : COLORS.primary}
        />
      ) : (
        <>
          {icon && icon}
          <Text
            style={[
              styles.text,
              { fontSize: getFontSize() },
              variant === 'primary' && styles.primaryText,
              variant === 'gradient' && styles.gradientText,
              variant === 'secondary' && styles.secondaryText,
              variant === 'outline' && styles.outlineText,
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </>
  );

  if (variant === 'gradient') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[style]}
      >
        <LinearGradient
          colors={[COLORS.gradientStart, COLORS.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.button,
            { height: getButtonHeight() },
            disabled && styles.disabled,
          ]}
        >
          {renderContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[
        styles.button,
        { height: getButtonHeight() },
        variant === 'primary' && styles.primaryButton,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'outline' && styles.outlineButton,
        disabled && styles.disabled,
        style,
      ]}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radiusMd,
    paddingHorizontal: SPACING.xl,
    gap: SPACING.sm,
    ...SHADOWS.small,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  text: {
    fontWeight: FONT_WEIGHTS.semibold,
  },
  primaryText: {
    color: COLORS.textWhite,
  },
  gradientText: {
    color: COLORS.textWhite,
  },
  secondaryText: {
    color: COLORS.textPrimary,
  },
  outlineText: {
    color: COLORS.primary,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
