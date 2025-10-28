import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/Card';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, SIZES, SHADOWS } from '../../theme';

const { width } = Dimensions.get('window');

const zodiacSigns = [
  { id: 1, name: 'Aries', symbol: '♈', emoji: '🐏', dates: 'Mar 21 - Apr 19' },
  { id: 2, name: 'Taurus', symbol: '♉', emoji: '🐂', dates: 'Apr 20 - May 20' },
  { id: 3, name: 'Gemini', symbol: '♊', emoji: '👯', dates: 'May 21 - Jun 20' },
  { id: 4, name: 'Cancer', symbol: '♋', emoji: '🦀', dates: 'Jun 21 - Jul 22' },
  { id: 5, name: 'Leo', symbol: '♌', emoji: '🦁', dates: 'Jul 23 - Aug 22' },
  { id: 6, name: 'Virgo', symbol: '♍', emoji: '👧', dates: 'Aug 23 - Sep 22' },
  { id: 7, name: 'Libra', symbol: '♎', emoji: '⚖️', dates: 'Sep 23 - Oct 22' },
  { id: 8, name: 'Scorpio', symbol: '♏', emoji: '🦂', dates: 'Oct 23 - Nov 21' },
  { id: 9, name: 'Sagittarius', symbol: '♐', emoji: '🏹', dates: 'Nov 22 - Dec 21' },
  { id: 10, name: 'Capricorn', symbol: '♑', emoji: '🐐', dates: 'Dec 22 - Jan 19' },
  { id: 11, name: 'Aquarius', symbol: '♒', emoji: '🏺', dates: 'Jan 20 - Feb 18' },
  { id: 12, name: 'Pisces', symbol: '♓', emoji: '🐟', dates: 'Feb 19 - Mar 20' },
];

const HoroscopeScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');
  const [selectedZodiac, setSelectedZodiac] = useState(zodiacSigns[0]);

  const periods = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
  ];

  const horoscopeData = {
    prediction:
      'Today brings exciting opportunities in your career. Your natural leadership skills will shine through, and colleagues will look to you for guidance. In love, communication is key - express your feelings openly.',
    love: 85,
    career: 92,
    health: 78,
    finance: 88,
    luckyNumber: 7,
    luckyColor: 'Red',
    compatibility: 'Leo',
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient colors={[COLORS.primary, COLORS.primaryLight]} style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Horoscope</Text>
        <View style={styles.headerPlaceholder} />
      </LinearGradient>

      <View style={styles.content}>
        {/* Period Selection */}
        <View style={styles.periodContainer}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period.id}
              style={[
                styles.periodButton,
                selectedPeriod === period.id && styles.periodButtonActive,
              ]}
              onPress={() => setSelectedPeriod(period.id)}
            >
              <Text
                style={[
                  styles.periodButtonText,
                  selectedPeriod === period.id && styles.periodButtonTextActive,
                ]}
              >
                {period.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Zodiac Sign Selection */}
        <Text style={styles.sectionTitle}>Select Your Zodiac Sign</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.zodiacScrollContent}
        >
          {zodiacSigns.map((sign) => (
            <TouchableOpacity
              key={sign.id}
              style={[
                styles.zodiacCard,
                selectedZodiac.id === sign.id && styles.zodiacCardSelected,
              ]}
              onPress={() => setSelectedZodiac(sign)}
            >
              <Text style={styles.zodiacEmoji}>{sign.emoji}</Text>
              <Text style={styles.zodiacName}>{sign.name}</Text>
              <Text style={styles.zodiacSymbol}>{sign.symbol}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Current Zodiac Info */}
        <Card style={styles.zodiacInfoCard}>
          <LinearGradient
            colors={[COLORS.primary, COLORS.primaryLight]}
            style={styles.zodiacInfoGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.zodiacInfoEmoji}>{selectedZodiac.emoji}</Text>
            <Text style={styles.zodiacInfoName}>{selectedZodiac.name}</Text>
            <Text style={styles.zodiacInfoDates}>{selectedZodiac.dates}</Text>
          </LinearGradient>
        </Card>

        {/* Horoscope Prediction */}
        <Card style={styles.predictionCard}>
          <View style={styles.predictionHeader}>
            <Text style={styles.predictionIcon}>✨</Text>
            <Text style={styles.predictionTitle}>Today's Prediction</Text>
          </View>
          <Text style={styles.predictionText}>{horoscopeData.prediction}</Text>
        </Card>

        {/* Metrics */}
        <Text style={styles.sectionTitle}>Life Aspects</Text>
        <View style={styles.metricsContainer}>
          <Card style={styles.metricCard}>
            <Text style={styles.metricIcon}>❤️</Text>
            <Text style={styles.metricLabel}>Love</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${horoscopeData.love}%` }]} />
            </View>
            <Text style={styles.metricValue}>{horoscopeData.love}%</Text>
          </Card>

          <Card style={styles.metricCard}>
            <Text style={styles.metricIcon}>💼</Text>
            <Text style={styles.metricLabel}>Career</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${horoscopeData.career}%` }]} />
            </View>
            <Text style={styles.metricValue}>{horoscopeData.career}%</Text>
          </Card>

          <Card style={styles.metricCard}>
            <Text style={styles.metricIcon}>💪</Text>
            <Text style={styles.metricLabel}>Health</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${horoscopeData.health}%` }]} />
            </View>
            <Text style={styles.metricValue}>{horoscopeData.health}%</Text>
          </Card>

          <Card style={styles.metricCard}>
            <Text style={styles.metricIcon}>💰</Text>
            <Text style={styles.metricLabel}>Finance</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${horoscopeData.finance}%` }]} />
            </View>
            <Text style={styles.metricValue}>{horoscopeData.finance}%</Text>
          </Card>
        </View>

        {/* Lucky Info */}
        <View style={styles.luckyContainer}>
          <Card style={styles.luckyCard}>
            <Text style={styles.luckyIcon}>🍀</Text>
            <Text style={styles.luckyLabel}>Lucky Number</Text>
            <Text style={styles.luckyValue}>{horoscopeData.luckyNumber}</Text>
          </Card>

          <Card style={styles.luckyCard}>
            <Text style={styles.luckyIcon}>🎨</Text>
            <Text style={styles.luckyLabel}>Lucky Color</Text>
            <Text style={styles.luckyValue}>{horoscopeData.luckyColor}</Text>
          </Card>

          <Card style={styles.luckyCard}>
            <Text style={styles.luckyIcon}>💕</Text>
            <Text style={styles.luckyLabel}>Compatibility</Text>
            <Text style={styles.luckyValue}>{horoscopeData.compatibility}</Text>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SPACING.mega + SPACING.lg,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.xl,
    borderBottomLeftRadius: SIZES.radiusXl * 2,
    borderBottomRightRadius: SIZES.radiusXl * 2,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary + '40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.textWhite,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
  headerPlaceholder: {
    width: 40,
  },
  content: {
    padding: SPACING.xl,
  },
  periodContainer: {
    flexDirection: 'row',
    gap: SPACING.base,
    marginBottom: SPACING.xl,
  },
  periodButton: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radiusMd,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  periodButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  periodButtonText: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
  },
  periodButtonTextActive: {
    color: COLORS.textWhite,
    fontWeight: FONT_WEIGHTS.bold,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.base,
  },
  zodiacScrollContent: {
    paddingBottom: SPACING.base,
  },
  zodiacCard: {
    width: 90,
    height: 100,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radiusLg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.base,
    borderWidth: 2,
    borderColor: COLORS.border,
    ...SHADOWS.small,
  },
  zodiacCardSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight + '20',
  },
  zodiacEmoji: {
    fontSize: 32,
    marginBottom: SPACING.xs,
  },
  zodiacName: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textPrimary,
  },
  zodiacSymbol: {
    fontSize: FONT_SIZES.lg,
    marginTop: SPACING.xs,
  },
  zodiacInfoCard: {
    padding: 0,
    marginTop: SPACING.xl,
    marginBottom: SPACING.xl,
    overflow: 'hidden',
  },
  zodiacInfoGradient: {
    padding: SPACING.xl,
    alignItems: 'center',
  },
  zodiacInfoEmoji: {
    fontSize: 80,
    marginBottom: SPACING.base,
  },
  zodiacInfoName: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
    marginBottom: SPACING.xs,
  },
  zodiacInfoDates: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textWhite,
    opacity: 0.9,
  },
  predictionCard: {
    marginBottom: SPACING.xl,
  },
  predictionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.base,
  },
  predictionIcon: {
    fontSize: 24,
    marginRight: SPACING.sm,
  },
  predictionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
  },
  predictionText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
  },
  metricCard: {
    width: (width - SPACING.xl * 2 - SPACING.base) / 2,
    padding: SPACING.base,
    marginBottom: SPACING.base,
    alignItems: 'center',
  },
  metricIcon: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  metricLabel: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    marginBottom: SPACING.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  metricValue: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
  },
  luckyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
  },
  luckyCard: {
    flex: 1,
    padding: SPACING.base,
    marginHorizontal: SPACING.xs,
    alignItems: 'center',
  },
  luckyIcon: {
    fontSize: 28,
    marginBottom: SPACING.sm,
  },
  luckyLabel: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  luckyValue: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
    textAlign: 'center',
  },
});

export default HoroscopeScreen;
