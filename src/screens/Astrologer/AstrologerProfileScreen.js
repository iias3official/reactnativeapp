import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, SIZES, SHADOWS } from '../../theme';

const { width } = Dimensions.get('window');

const AstrologerProfileScreen = ({ navigation, route }) => {
  const { astrologer } = route.params || {};
  const [selectedTab, setSelectedTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const reviews = [
    {
      id: 1,
      userName: 'Ravi Kumar',
      rating: 5,
      comment: 'Excellent predictions! Very accurate and helpful guidance.',
      date: '2 days ago',
    },
    {
      id: 2,
      userName: 'Priya Singh',
      rating: 5,
      comment: 'Amazing experience. Really understood my concerns and gave great advice.',
      date: '5 days ago',
    },
    {
      id: 3,
      userName: 'Amit Sharma',
      rating: 4,
      comment: 'Good consultation. Helpful insights about my career.',
      date: '1 week ago',
    },
  ];

  const skills = [
    'Vedic Astrology',
    'Palmistry',
    'Vastu',
    'Numerology',
    'Face Reading',
    'Marriage Counseling',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={[COLORS.primary, COLORS.primaryLight]} style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.favoriteIcon}>🤍</Text>
        </TouchableOpacity>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Card */}
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{astrologer?.name?.charAt(0) || 'A'}</Text>
              </View>
              <View
                style={[
                  styles.onlineIndicator,
                  {
                    backgroundColor: astrologer?.isOnline ? COLORS.online : COLORS.offline,
                  },
                ]}
              />
            </View>

            <View style={styles.profileInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{astrologer?.name || 'Astrologer'}</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedIcon}>✓</Text>
                </View>
              </View>

              <Text style={styles.expertise}>{astrologer?.expertise || 'Astrology'}</Text>

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>⭐ {astrologer?.rating || '4.8'}</Text>
                  <Text style={styles.statLabel}>Rating</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{astrologer?.consultations || '5420'}</Text>
                  <Text style={styles.statLabel}>Consultations</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{astrologer?.experience || '15 years'}</Text>
                  <Text style={styles.statLabel}>Experience</Text>
                </View>
              </View>
            </View>
          </View>
        </Card>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.actionButtonSquare}>
            <Text style={styles.actionButtonIcon}>💬</Text>
            <Text style={styles.actionButtonLabel}>Chat</Text>
            <Text style={styles.actionButtonPrice}>₹{astrologer?.price || '25'}/min</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButtonSquare}>
            <Text style={styles.actionButtonIcon}>📞</Text>
            <Text style={styles.actionButtonLabel}>Call</Text>
            <Text style={styles.actionButtonPrice}>₹{astrologer?.price || '25'}/min</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButtonSquare}>
            <Text style={styles.actionButtonIcon}>🎥</Text>
            <Text style={styles.actionButtonLabel}>Video</Text>
            <Text style={styles.actionButtonPrice}>₹{(astrologer?.price || 25) + 10}/min</Text>
          </TouchableOpacity>
        </View>

        {/* Languages */}
        <Card style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Text style={styles.infoIcon}>🗣️</Text>
            <Text style={styles.infoTitle}>Languages</Text>
          </View>
          <View style={styles.languagesContainer}>
            {(astrologer?.languages || ['Hindi', 'English']).map((lang, index) => (
              <View key={index} style={styles.languageTag}>
                <Text style={styles.languageText}>{lang}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, selectedTab === tab.id && styles.tabActive]}
              onPress={() => setSelectedTab(tab.id)}
            >
              <Text style={[styles.tabText, selectedTab === tab.id && styles.tabTextActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        {selectedTab === 'about' && (
          <View>
            <Card style={styles.contentCard}>
              <Text style={styles.contentTitle}>About</Text>
              <Text style={styles.contentText}>
                {astrologer?.name || 'This astrologer'} is a highly experienced professional
                specializing in {astrologer?.expertise || 'astrology'} with{' '}
                {astrologer?.experience || '15 years'} of experience. Known for accurate predictions
                and compassionate guidance, helping thousands of clients find clarity and direction
                in their lives.
              </Text>
            </Card>

            <Card style={styles.contentCard}>
              <Text style={styles.contentTitle}>Skills & Expertise</Text>
              <View style={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <View key={index} style={styles.skillTag}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </Card>

            <Card style={styles.contentCard}>
              <View style={styles.achievementRow}>
                <Text style={styles.achievementIcon}>🏆</Text>
                <View style={styles.achievementContent}>
                  <Text style={styles.achievementTitle}>Awards & Recognition</Text>
                  <Text style={styles.achievementText}>Best Astrologer Award 2023</Text>
                  <Text style={styles.achievementText}>
                    Featured in National Astrology Conference
                  </Text>
                </View>
              </View>
            </Card>
          </View>
        )}

        {selectedTab === 'reviews' && (
          <View>
            {reviews.map((review) => (
              <Card key={review.id} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <View style={styles.reviewAvatar}>
                    <Text style={styles.reviewAvatarText}>{review.userName.charAt(0)}</Text>
                  </View>
                  <View style={styles.reviewInfo}>
                    <Text style={styles.reviewUserName}>{review.userName}</Text>
                    <View style={styles.reviewRating}>
                      {[...Array(5)].map((_, i) => (
                        <Text key={i} style={styles.star}>
                          {i < review.rating ? '⭐' : '☆'}
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                <Text style={styles.reviewComment}>{review.comment}</Text>
              </Card>
            ))}
          </View>
        )}

        {selectedTab === 'gallery' && (
          <Card style={styles.contentCard}>
            <Text style={styles.emptyText}>No gallery items available</Text>
          </Card>
        )}
      </ScrollView>

      {/* Bottom Action Bar */}
      <LinearGradient colors={[COLORS.background, COLORS.secondary]} style={styles.bottomBar}>
        <View style={styles.priceInfo}>
          <Text style={styles.bottomPrice}>₹{astrologer?.price || '25'}/min</Text>
          <Text style={styles.bottomPriceLabel}>Starting price</Text>
        </View>
        <Button
          title="Start Consultation"
          variant="gradient"
          onPress={() => console.log('Start consultation')}
          style={styles.consultButton}
        />
      </LinearGradient>
    </View>
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
    paddingTop: SPACING.mega + SPACING.lg,
    paddingBottom: SPACING.base,
    paddingHorizontal: SPACING.xl,
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
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary + '40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: FONT_SIZES.lg,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  profileCard: {
    marginHorizontal: SPACING.xl,
    marginTop: -SPACING.base,
    marginBottom: SPACING.base,
  },
  profileHeader: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: SPACING.base,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: COLORS.secondary,
  },
  avatarText: {
    fontSize: FONT_SIZES.hero,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLORS.secondary,
  },
  profileInfo: {
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  name: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginRight: SPACING.sm,
  },
  verifiedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedIcon: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textWhite,
    fontWeight: FONT_WEIGHTS.bold,
  },
  expertise: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textSecondary,
    marginBottom: SPACING.base,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
  },
  statValue: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  statLabel: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: COLORS.border,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING.base,
  },
  actionButtonSquare: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radiusLg,
    padding: SPACING.base,
    alignItems: 'center',
    marginHorizontal: SPACING.xs,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.small,
  },
  actionButtonIcon: {
    fontSize: 32,
    marginBottom: SPACING.xs,
  },
  actionButtonLabel: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  actionButtonPrice: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.bold,
  },
  infoCard: {
    marginHorizontal: SPACING.xl,
    marginBottom: SPACING.base,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.base,
  },
  infoIcon: {
    fontSize: 24,
    marginRight: SPACING.sm,
  },
  infoTitle: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  languageTag: {
    backgroundColor: COLORS.primaryLight + '20',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.sm,
    borderRadius: SIZES.radiusSm,
    borderWidth: 1,
    borderColor: COLORS.primary + '30',
  },
  languageText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING.base,
    gap: SPACING.sm,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
  tabActive: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  tabTextActive: {
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.bold,
  },
  contentCard: {
    marginHorizontal: SPACING.xl,
    marginBottom: SPACING.base,
  },
  contentTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  contentText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  skillTag: {
    backgroundColor: COLORS.border,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.sm,
    borderRadius: SIZES.radiusSm,
  },
  skillText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  achievementIcon: {
    fontSize: 32,
    marginRight: SPACING.base,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  achievementText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  reviewCard: {
    marginHorizontal: SPACING.xl,
    marginBottom: SPACING.base,
  },
  reviewHeader: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  reviewAvatarText: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewUserName: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  reviewRating: {
    flexDirection: 'row',
  },
  star: {
    fontSize: FONT_SIZES.sm,
  },
  reviewDate: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  reviewComment: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  emptyText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.textSecondary,
    textAlign: 'center',
    paddingVertical: SPACING.xl,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.base,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    ...SHADOWS.large,
  },
  priceInfo: {
    flex: 1,
  },
  bottomPrice: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
  },
  bottomPriceLabel: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  consultButton: {
    flex: 1.5,
  },
});

export default AstrologerProfileScreen;
