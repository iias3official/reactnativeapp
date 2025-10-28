import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, SIZES, SHADOWS } from '../theme';

const Card = ({ children, style, onPress, variant = 'default', padding = SPACING.base }) => {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[
        styles.card,
        { padding },
        variant === 'default' && styles.defaultCard,
        variant === 'gradient' && styles.gradientCard,
        variant === 'outlined' && styles.outlinedCard,
        style,
      ]}
    >
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: SIZES.radiusLg,
    backgroundColor: COLORS.backgroundCard,
    ...SHADOWS.card,
  },
  defaultCard: {
    backgroundColor: COLORS.backgroundCard,
  },
  gradientCard: {
    backgroundColor: COLORS.primary,
  },
  outlinedCard: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});

export default Card;
