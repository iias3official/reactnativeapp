import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/Card';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, SIZES, SHADOWS } from '../../theme';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const userName = 'User';
  const userZodiac = 'Aries';

  const quickActions = [
    { id: 1, icon: '💬', title: 'Chat', color: COLORS.primary },
    { id: 2, icon: '📞', title: 'Call', color: COLORS.info },
    { id: 3, icon: '🎥', title: 'Video', color: COLORS.success },
    { id: 4, icon: '📊', title: 'Report', color: COLORS.warning },
  ];

  const featuredAstrologers = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      expertise: 'Vedic Astrology',
      rating: 4.8,
      experience: '15 years',
      price: '₹25/min',
      isOnline: true,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      expertise: 'Tarot Reading',
      rating: 4.9,
      experience: '10 years',
      price: '₹30/min',
      isOnline: true,
    },
    {
      id: 3,
      name: 'Amit Patel',
      expertise: 'Numerology',
      rating: 4.7,
      experience: '12 years',
      price: '₹20/min',
      isOnline: false,
    },
  ];

  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Greeting */}
      <LinearGradient colors={[COLORS.primary, COLORS.primaryLight]} style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hello, {userName}! 👋</Text>
            <Text style={styles.subGreeting}>Welcome to AstroWisdom</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        {/* Today's Horoscope Card */}
        <Card style={styles.horoscopeCard}>
          <LinearGradient
            colors={[COLORS.primary, COLORS.primaryLight]}
            style={styles.horoscopeGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.horoscopeHeader}>
              <View>
                <Text style={styles.horoscopeTitle}>Today's Horoscope</Text>
                <Text style={styles.horoscopeZodiac}>{userZodiac} ♈</Text>
              </View>
              <View style={styles.horoscopeIconContainer}>
                <Text style={styles.horoscopeIcon}>✨</Text>
              </View>
            </View>
            <Text style={styles.horoscopeText}>
              Today brings positive energy and opportunities. Trust your intuition and take bold
              steps towards your goals.
            </Text>
            <TouchableOpacity
              style={styles.readMoreButton}
              onPress={() => navigation.navigate('Horoscope')}
            >
              <Text style={styles.readMoreText}>Read More →</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Card>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.id}
              style={styles.quickActionCard}
              onPress={() => handleQuickAction(action.title)}
            >
              <View style={[styles.quickActionIcon, { backgroundColor: action.color + '20' }]}>
                <Text style={styles.quickActionEmoji}>{action.icon}</Text>
              </View>
              <Text style={styles.quickActionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quote of the Day */}
        <Card style={styles.quoteCard}>
          <View style={styles.quoteHeader}>
            <Text style={styles.quoteIcon}>💫</Text>
            <Text style={styles.quoteLabel}>Quote of the Day</Text>
          </View>
          <Text style={styles.quoteText}>
            "The stars align for those who believe in their dreams."
          </Text>
          <Text style={styles.quoteAuthor}>- Ancient Wisdom</Text>
        </Card>

        {/* Featured Astrologers */}
        <View style={styles.astrologersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Astrologers</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Astrologers')}>
              <Text style={styles.viewAllText}>View All →</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.astrologersScrollContent}
          >
            {featuredAstrologers.map((astrologer) => (
              <Card
                key={astrologer.id}
                style={styles.astrologerCard}
                onPress={() => navigation.navigate('AstrologerProfile', { astrologer })}
              >
                <View style={styles.astrologerHeader}>
                  <View style={styles.astrologerAvatar}>
                    <Text style={styles.astrologerAvatarText}>{astrologer.name.charAt(0)}</Text>
                  </View>
                  <View
                    style={[
                      styles.onlineIndicator,
                      { backgroundColor: astrologer.isOnline ? COLORS.online : COLORS.offline },
                    ]}
                  />
                </View>
                <Text style={styles.astrologerName}>{astrologer.name}</Text>
                <Text style={styles.astrologerExpertise}>{astrologer.expertise}</Text>
                <View style={styles.astrologerStats}>
                  <View style={styles.astrologerStat}>
                    <Text style={styles.astrologerStatIcon}>⭐</Text>
                    <Text style={styles.astrologerStatText}>{astrologer.rating}</Text>
                  </View>
                  <View style={styles.astrologerStat}>
                    <Text style={styles.astrologerStatIcon}>📅</Text>
                    <Text style={styles.astrologerStatText}>{astrologer.experience}</Text>
                  </View>
                </View>
                <View style={styles.astrologerFooter}>
                  <Text style={styles.astrologerPrice}>{astrologer.price}</Text>
                  <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.chatButtonText}>Chat</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            ))}
          </ScrollView>
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
    paddingTop: SPACING.mega + SPACING.lg,
    paddingBottom: SPACING.xxxl,
    paddingHorizontal: SPACING.xl,
    borderBottomLeftRadius: SIZES.radiusXl * 2,
    borderBottomRightRadius: SIZES.radiusXl * 2,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
  subGreeting: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textWhite,
    opacity: 0.9,
    marginTop: SPACING.xs,
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.secondary + '40',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationIcon: {
    fontSize: 24,
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textWhite,
    fontWeight: FONT_WEIGHTS.bold,
  },
  content: {
    padding: SPACING.xl,
    marginTop: -SPACING.xl,
  },
  horoscopeCard: {
    padding: 0,
    marginBottom: SPACING.xl,
    overflow: 'hidden',
  },
  horoscopeGradient: {
    padding: SPACING.xl,
  },
  horoscopeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.base,
  },
  horoscopeTitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textWhite,
    opacity: 0.9,
  },
  horoscopeZodiac: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
    marginTop: SPACING.xs,
  },
  horoscopeIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.secondary + '40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horoscopeIcon: {
    fontSize: 32,
  },
  horoscopeText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textWhite,
    lineHeight: 24,
    marginBottom: SPACING.base,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.base,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
  },
  quickActionCard: {
    width: (width - SPACING.xl * 2 - SPACING.base * 3) / 4,
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 64,
    height: 64,
    borderRadius: SIZES.radiusLg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    ...SHADOWS.small,
  },
  quickActionEmoji: {
    fontSize: 32,
  },
  quickActionTitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  quoteCard: {
    marginBottom: SPACING.xl,
  },
  quoteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.base,
  },
  quoteIcon: {
    fontSize: 24,
    marginRight: SPACING.sm,
  },
  quoteLabel: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
  },
  quoteText: {
    fontSize: FONT_SIZES.lg,
    fontStyle: 'italic',
    color: COLORS.textPrimary,
    lineHeight: 26,
    marginBottom: SPACING.sm,
  },
  quoteAuthor: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
  },
  astrologersSection: {
    marginBottom: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.base,
  },
  viewAllText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.semibold,
  },
  astrologersScrollContent: {
    paddingRight: SPACING.xl,
  },
  astrologerCard: {
    width: 200,
    marginRight: SPACING.base,
    padding: SPACING.base,
  },
  astrologerHeader: {
    position: 'relative',
    marginBottom: SPACING.base,
  },
  astrologerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  astrologerAvatarText: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 60,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  astrologerName: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  astrologerExpertise: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.base,
  },
  astrologerStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.base,
    marginBottom: SPACING.base,
  },
  astrologerStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  astrologerStatIcon: {
    fontSize: 14,
  },
  astrologerStatText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  astrologerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SPACING.base,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  astrologerPrice: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
  },
  chatButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.sm,
    borderRadius: SIZES.radiusSm,
  },
  chatButtonText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textWhite,
  },
});

export default HomeScreen;
