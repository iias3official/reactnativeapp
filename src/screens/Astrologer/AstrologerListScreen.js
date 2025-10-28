import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/Card';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING, SIZES, SHADOWS } from '../../theme';

const astrologers = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    expertise: 'Vedic Astrology',
    rating: 4.8,
    reviews: 1250,
    experience: '15 years',
    price: 25,
    languages: ['Hindi', 'English'],
    isOnline: true,
    consultations: 5420,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    expertise: 'Tarot Reading',
    rating: 4.9,
    reviews: 890,
    experience: '10 years',
    price: 30,
    languages: ['English', 'Hindi'],
    isOnline: true,
    consultations: 3210,
  },
  {
    id: 3,
    name: 'Amit Patel',
    expertise: 'Numerology',
    rating: 4.7,
    reviews: 567,
    experience: '12 years',
    price: 20,
    languages: ['Hindi', 'Gujarati'],
    isOnline: false,
    consultations: 2150,
  },
  {
    id: 4,
    name: 'Sanjana Verma',
    expertise: 'Face Reading',
    rating: 4.6,
    reviews: 432,
    experience: '8 years',
    price: 22,
    languages: ['English', 'Hindi'],
    isOnline: true,
    consultations: 1890,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    expertise: 'Palmistry',
    rating: 4.8,
    reviews: 712,
    experience: '18 years',
    price: 28,
    languages: ['Hindi', 'Punjabi'],
    isOnline: false,
    consultations: 4120,
  },
];

const categories = [
  { id: 'all', label: 'All', icon: '⭐' },
  { id: 'vedic', label: 'Vedic', icon: '🔮' },
  { id: 'tarot', label: 'Tarot', icon: '🃏' },
  { id: 'numerology', label: 'Numerology', icon: '🔢' },
  { id: 'palmistry', label: 'Palmistry', icon: '✋' },
];

const AstrologerListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const renderAstrologerCard = ({ item }) => (
    <Card
      style={styles.astrologerCard}
      onPress={() => navigation.navigate('AstrologerProfile', { astrologer: item })}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
            </View>
            <View
              style={[
                styles.onlineIndicator,
                { backgroundColor: item.isOnline ? COLORS.online : COLORS.offline },
              ]}
            />
          </View>
        </View>

        <View style={styles.cardRight}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
            {item.rating >= 4.8 && <Text style={styles.badge}>⭐ Top</Text>}
          </View>

          <Text style={styles.expertise}>{item.expertise}</Text>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statIcon}>⭐</Text>
              <Text style={styles.statText}>
                {item.rating} ({item.reviews})
              </Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statIcon}>📅</Text>
              <Text style={styles.statText}>{item.experience}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statIcon}>💬</Text>
              <Text style={styles.statText}>{item.consultations}</Text>
            </View>
          </View>

          <View style={styles.languagesContainer}>
            {item.languages.slice(0, 2).map((lang, index) => (
              <View key={index} style={styles.languageTag}>
                <Text style={styles.languageText}>{lang}</Text>
              </View>
            ))}
          </View>

          <View style={styles.cardFooter}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>₹{item.price}</Text>
              <Text style={styles.priceUnit}>/min</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>💬</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>📞</Text>
              </TouchableOpacity>
              <LinearGradient
                colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                style={styles.chatButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <TouchableOpacity>
                  <Text style={styles.chatButtonText}>Chat</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={[COLORS.primary, COLORS.primaryLight]} style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Astrologers</Text>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilters(!showFilters)}
          >
            <Text style={styles.filterButtonText}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search astrologers..."
            placeholderTextColor={COLORS.textLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </LinearGradient>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.categoryTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sort Options */}
      <View style={styles.sortContainer}>
        <Text style={styles.resultCount}>{astrologers.length} Astrologers</Text>
        <View style={styles.sortButtons}>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'rating' && styles.sortButtonActive]}
            onPress={() => setSortBy('rating')}
          >
            <Text
              style={[styles.sortButtonText, sortBy === 'rating' && styles.sortButtonTextActive]}
            >
              Top Rated
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'price' && styles.sortButtonActive]}
            onPress={() => setSortBy('price')}
          >
            <Text
              style={[styles.sortButtonText, sortBy === 'price' && styles.sortButtonTextActive]}
            >
              Price
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'experience' && styles.sortButtonActive]}
            onPress={() => setSortBy('experience')}
          >
            <Text
              style={[
                styles.sortButtonText,
                sortBy === 'experience' && styles.sortButtonTextActive,
              ]}
            >
              Experience
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Astrologer List */}
      <FlatList
        data={astrologers}
        renderItem={renderAstrologerCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: SPACING.mega + SPACING.lg,
    paddingBottom: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    borderBottomLeftRadius: SIZES.radiusXl * 2,
    borderBottomRightRadius: SIZES.radiusXl * 2,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.base,
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
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary + '40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: FONT_SIZES.lg,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radiusMd,
    paddingHorizontal: SPACING.base,
    height: 48,
  },
  searchIcon: {
    fontSize: FONT_SIZES.lg,
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: FONT_SIZES.base,
    color: COLORS.textPrimary,
  },
  categoriesContainer: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.base,
    gap: SPACING.sm,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.sm,
    borderRadius: SIZES.radiusFull,
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.sm,
  },
  categoryButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryIcon: {
    fontSize: FONT_SIZES.base,
    marginRight: SPACING.xs,
  },
  categoryText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
  },
  categoryTextActive: {
    color: COLORS.textWhite,
    fontWeight: FONT_WEIGHTS.bold,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.base,
  },
  resultCount: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
  },
  sortButtons: {
    flexDirection: 'row',
    gap: SPACING.xs,
  },
  sortButton: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: SIZES.radiusSm,
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sortButtonActive: {
    backgroundColor: COLORS.primaryLight + '30',
    borderColor: COLORS.primary,
  },
  sortButtonText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.medium,
  },
  sortButtonTextActive: {
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.bold,
  },
  listContent: {
    padding: SPACING.xl,
  },
  astrologerCard: {
    marginBottom: SPACING.base,
    padding: SPACING.base,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardLeft: {
    marginRight: SPACING.base,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  cardRight: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  name: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textPrimary,
    marginRight: SPACING.sm,
  },
  badge: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.warning,
    backgroundColor: COLORS.warning + '20',
    paddingHorizontal: SPACING.xs,
    paddingVertical: 2,
    borderRadius: SIZES.radiusXs,
  },
  expertise: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  statsRow: {
    flexDirection: 'row',
    gap: SPACING.base,
    marginBottom: SPACING.sm,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  statIcon: {
    fontSize: 12,
  },
  statText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  languagesContainer: {
    flexDirection: 'row',
    gap: SPACING.xs,
    marginBottom: SPACING.sm,
  },
  languageTag: {
    backgroundColor: COLORS.border,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: SIZES.radiusXs,
  },
  languageText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary,
  },
  priceUnit: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    marginLeft: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: SPACING.xs,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: SIZES.radiusSm,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: FONT_SIZES.base,
  },
  chatButton: {
    paddingHorizontal: SPACING.base,
    height: 36,
    borderRadius: SIZES.radiusSm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.textWhite,
  },
});

export default AstrologerListScreen;
