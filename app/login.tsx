import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '../src/components';
import { Colors, Spacing, Typography } from '../src/themes';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Import assets
const avatarMain = require('../assets/images/Avatarmain.png');

interface Category {
    id: string;
    name: string;
    icon: string;
}

interface Property {
    id: string;
    name: string;
    location: string;
    price: string;
    image: string;
    bhk?: string;
    sqft?: string;
}

const CATEGORIES: Category[] = [
    { id: 'trending', name: 'Trending Projects', icon: '🔥' },
    { id: 'new_launches', name: 'New Launches', icon: '✨' },
    { id: 'apartments', name: 'Apartments', icon: '🏢' },
    { id: 'villas', name: 'Villas', icon: '🏡' },
    { id: 'plots', name: 'Plots', icon: '📐' },
    { id: 'ready_to_move', name: 'Ready To Move', icon: '✅' },
];

// Mock data - replace with actual API calls
const MOCK_PROPERTIES: Property[] = [
    {
        id: '1',
        name: 'Purva Zenium',
        location: 'Devanahalli',
        price: '1.10 Cr',
        image: 'https://via.placeholder.com/400x300',
        bhk: '2 BHK',
        sqft: '1206-1275 sqft',
    },
    {
        id: '2',
        name: 'Century Regalia',
        location: 'Whitefield',
        price: '1.25 Cr',
        image: 'https://via.placeholder.com/400x300',
        bhk: '3 BHK',
        sqft: '1450-1650 sqft',
    },
];

export default function LoginScreen() {
  const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const isDark = false;
  const colors = Colors[isDark ? 'dark' : 'light'];

    const handleSearch = () => {
        if (searchQuery.trim()) {
            // Navigate to search results
            Alert.alert('Search', `Searching for: ${searchQuery}`);
        }
    };

    const handleCategoryPress = (category: Category) => {
        Alert.alert('Category', `Opening ${category.name}`);
    };

    const handlePropertyNavigation = (direction: 'prev' | 'next') => {
        if (direction === 'prev' && currentPropertyIndex > 0) {
            setCurrentPropertyIndex(currentPropertyIndex - 1);
        } else if (direction === 'next' && currentPropertyIndex < MOCK_PROPERTIES.length - 1) {
            setCurrentPropertyIndex(currentPropertyIndex + 1);
        }
    };

    const currentProperty = MOCK_PROPERTIES[currentPropertyIndex];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.contentWrapper}>
                <ScrollView
                    ref={scrollViewRef}
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Hero Section */}
                    <View style={styles.heroSection}>
                        <Image
                            source={{ uri: 'https://d2rkdaqkcawyx3.cloudfront.net/image/upload/v1761132546/home_desktop_trbcoq_rm6yqv.webp' }}
                            style={styles.heroBackgroundImage}
                            contentFit="cover"
                        />
                        <View style={[styles.heroOverlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
                        <View style={styles.heroContent}>
                            <Text style={styles.heroTitle}>
                                Find your perfect home in Bangalore, faster with AI
                            </Text>
                            <Text style={styles.heroSubtitle}>
                                Smartest end-to-end homebuying partner
                            </Text>

                            {/* Chat Interface */}
                            <View style={styles.chatContainer}>
                                <View style={[styles.chatBox, { backgroundColor: colors.background }]}>
                                    {/* Proppy's Initial Message */}
                                    <View style={styles.chatMessage}>
                                        <Image
                                            source={avatarMain}
                                            style={styles.chatAvatar}
                                            contentFit="contain"
                                        />
                                        <View style={styles.messageBubble}>
                                            <Text style={styles.messageText}>
                                                Hi! I'm Proppy. To start, enter your property search criteria.
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Filter Buttons */}
                                    <View style={styles.filterContainer}>
                                        <TouchableOpacity style={[styles.filterButton, { backgroundColor: colors.backgroundSecondary }]}>
                                            <Text style={[styles.filterButtonText, { color: colors.text }]}>Locality</Text>
                                            <Text style={styles.filterIcon}>▼</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.filterButton, { backgroundColor: colors.backgroundSecondary }]}>
                                            <Text style={[styles.filterButtonText, { color: colors.text }]}>Type</Text>
                                            <Text style={styles.filterIcon}>▼</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.filterButton, { backgroundColor: colors.backgroundSecondary }]}>
                                            <Text style={[styles.filterButtonText, { color: colors.text }]}>Budget</Text>
                                            <Text style={styles.filterIcon}>▼</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.filterButton, { backgroundColor: colors.backgroundSecondary }]}>
                                            <Text style={[styles.filterButtonText, { color: colors.text }]}>Stage</Text>
                                            <Text style={styles.filterIcon}>▼</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Send Button */}
                                    <View style={styles.sendButtonContainer}>
                                        <TouchableOpacity
                                            style={[styles.sendButton, { backgroundColor: colors.primary }]}
                                            onPress={handleSearch}
                                        >
                                            <Text style={styles.sendButtonText}>Send</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* OR Separator */}
                                    <View style={styles.separatorContainer}>
                                        <View style={styles.separatorLine} />
                                        <Text style={styles.separatorText}>OR</Text>
                                        <View style={styles.separatorLine} />
                                    </View>

                                    {/* Suggestion Buttons */}
                                    <View style={styles.suggestionsContainer}>
                                        <TouchableOpacity 
                                            style={[styles.suggestionButton, { backgroundColor: colors.backgroundSecondary }]}
                                            onPress={() => setSearchQuery("Show 2 BHK properties in Whitefield under ₹1.2 Cr with swimming pool and gym amenities and close to tech parks and schools.")}
                                        >
                                            <Text style={[styles.suggestionText, { color: colors.text }]}>
                                                Show 2 BHK properties in Whitefield under ₹1.2 Cr with swimming pool and gym amenities and close to tech parks and schools.
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={[styles.suggestionButton, { backgroundColor: colors.backgroundSecondary }]}
                                            onPress={() => setSearchQuery("Can you show me 3BHK properties that are more than 1300 sqft in size and east-facing in yelahanka?")}
                                        >
                                            <Text style={[styles.suggestionText, { color: colors.text }]}>
                                                Can you show me 3BHK properties that are more than 1300 sqft in size and east-facing in yelahanka?
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={[styles.suggestionButton, { backgroundColor: colors.backgroundSecondary }]}
                                            onPress={() => setSearchQuery("Show me 2BHK properties in Sarjapur with amenities like a kids play area, swimming pool, and gym")}
                                        >
                                            <Text style={[styles.suggestionText, { color: colors.text }]}>
                                                Show me 2BHK properties in Sarjapur with amenities like a kids play area, swimming pool, and gym
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Search Input */}
                                    <View style={styles.searchInputContainer}>
                                        <Input
                                            placeholder="Try '2 BHK in Whitefield'"
                                            value={searchQuery}
                                            onChangeText={setSearchQuery}
                                            containerStyle={styles.searchInput}
                                            inputStyle={styles.searchInputText}
                                            onSubmitEditing={handleSearch}
                                        />
                                        <TouchableOpacity
                                            style={[styles.sendButtonSmall, { backgroundColor: colors.primary }]}
                                            onPress={handleSearch}
                                        >
                                            <Text style={styles.sendButtonText}>→</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Categories Section */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Browse Categories</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.categoriesContainer}
                        >
                            {CATEGORIES.map((category) => (
            <TouchableOpacity
                                    key={category.id}
                                    style={[styles.categoryCard, { backgroundColor: colors.backgroundSecondary }]}
                                    onPress={() => handleCategoryPress(category)}
            >
                                    <Text style={styles.categoryIcon}>{category.icon}</Text>
                                    <Text style={[styles.categoryName, { color: colors.text }]}>
                                        {category.name}
              </Text>
            </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Trending Projects Section */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: colors.text }]}>Trending Projects</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.propertiesContainer}
                        >
                            {MOCK_PROPERTIES.map((property) => (
                                <View
                                    key={property.id}
                                    style={[styles.propertyListItem, { backgroundColor: colors.background }]}
                                >
                                    <View style={[styles.propertyListImage, { backgroundColor: colors.backgroundSecondary }]}>
                                        <Text style={styles.imagePlaceholder}>🏢</Text>
                                    </View>
                                    <Text style={[styles.propertyListName, { color: colors.text }]}>
                                        {property.name}
                                    </Text>
                                    <Text style={[styles.propertyListPrice, { color: colors.primary }]}>
                                        From ₹ {property.price}
                                    </Text>
                                    <Text style={[styles.propertyListLocation, { color: colors.textSecondary }]}>
                                        📍 {property.location}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
          </View>

                    {/* Free Consultation Section */}
                    <View style={[styles.consultationSection, { backgroundColor: colors.backgroundSecondary }]}>
                        <Text style={[styles.consultationTitle, { color: colors.text }]}>
                            Get Free Consultation
            </Text>
                        <Text style={[styles.consultationSubtitle, { color: colors.textSecondary }]}>
                            Fill in your details, and our experts will get in touch with you soon
              </Text>
                        <TouchableOpacity
                            style={[styles.consultationButton, { backgroundColor: colors.primary }]}
                            onPress={() => Alert.alert('Consultation', 'Opening consultation form')}
                        >
                            <Text style={styles.consultationButtonText}>Schedule Call with Expert</Text>
            </TouchableOpacity>
          </View>

                </ScrollView>
                
                {/* Floating Action Button - Call */}
                <TouchableOpacity 
                    style={[styles.fab, { backgroundColor: colors.primary }]}
                    onPress={() => Alert.alert('Call', 'Calling property expert...')}
                >
                    <Text style={styles.fabIcon}>📞</Text>
                </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardView: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        position: 'relative',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: Spacing['3xl'] + 100, // Extra padding for FAB
    },
    heroSection: {
        paddingVertical: Spacing.xl,
        paddingHorizontal: Spacing.lg,
        minHeight: 500,
        position: 'relative',
        backgroundColor: Colors.light.primary,
        overflow: 'hidden',
    },
    heroBackgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    heroContent: {
        alignItems: 'center',
        zIndex: 1,
        position: 'relative',
    },
    heroTitle: {
        fontSize: Typography.fontSize['2xl'],
        fontFamily: Typography.fontFamily.bold,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: Spacing.md,
        lineHeight: Typography.lineHeight.tight * Typography.fontSize['2xl'],
        paddingHorizontal: Spacing.sm,
    },
    heroSubtitle: {
        fontSize: Typography.fontSize.lg,
        fontFamily: Typography.fontFamily.regular,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: Spacing.xl,
        opacity: 0.9,
        paddingHorizontal: Spacing.sm,
    },
    chatContainer: {
        width: '100%',
        maxWidth: 600,
        marginTop: Spacing.lg,
    },
    chatBox: {
        borderRadius: 16,
        padding: Spacing.md,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    chatMessage: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: Spacing.md,
    },
    chatAvatar: {
        width: 40,
        height: 40,
        marginRight: Spacing.sm,
        borderRadius: 20,
    },
    messageBubble: {
        flex: 1,
        backgroundColor: Colors.light.backgroundSecondary,
        padding: Spacing.md,
        borderRadius: 12,
    },
    messageText: {
        fontSize: Typography.fontSize.base,
        color: Colors.light.text,
        fontFamily: Typography.fontFamily.regular,
    },
    filterContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
        marginBottom: Spacing.md,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderRadius: 8,
        gap: Spacing.xs,
    },
    filterButtonText: {
        fontSize: Typography.fontSize.sm,
        fontFamily: Typography.fontFamily.medium,
    },
    filterIcon: {
        fontSize: Typography.fontSize.xs,
        color: Colors.light.textSecondary,
    },
    sendButtonContainer: {
        alignItems: 'flex-end',
        marginBottom: Spacing.md,
    },
    sendButton: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.sm,
        borderRadius: 8,
        minWidth: 80,
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: Typography.fontSize.base,
        fontFamily: Typography.fontFamily.semiBold,
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Spacing.md,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.light.borderLight,
    },
    separatorText: {
        paddingHorizontal: Spacing.md,
        fontSize: Typography.fontSize.sm,
        color: Colors.light.textSecondary,
        fontFamily: Typography.fontFamily.medium,
    },
    suggestionsContainer: {
        gap: Spacing.sm,
        marginBottom: Spacing.md,
    },
    suggestionButton: {
        padding: Spacing.md,
        borderRadius: 8,
    },
    suggestionText: {
        fontSize: Typography.fontSize.sm,
        fontFamily: Typography.fontFamily.regular,
        lineHeight: Typography.lineHeight.relaxed * Typography.fontSize.sm,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    },
    searchInput: {
        flex: 1,
        marginBottom: 0,
    },
    searchInputText: {
        fontSize: Typography.fontSize.base,
    },
    sendButtonSmall: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    propertySection: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.lg,
        position: 'relative',
        marginTop: Spacing.md,
    },
    propertyNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    marginBottom: Spacing.sm,
    },
    navButton: {
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderRadius: 8,
        minWidth: 80,
        alignItems: 'center',
    },
    navButtonDisabled: {
        opacity: 0.5,
    },
    navButtonText: {
        color: '#FFFFFF',
        fontFamily: Typography.fontFamily.semiBold,
        fontSize: Typography.fontSize.sm,
    },
    propertyName: {
        fontSize: Typography.fontSize.xl,
        fontFamily: Typography.fontFamily.bold,
        color: Colors.light.text,
        flex: 1,
    textAlign: 'center',
  },
    propertyCounter: {
        fontSize: Typography.fontSize.sm,
        color: Colors.light.textSecondary,
    textAlign: 'center',
        marginBottom: Spacing.md,
  },
    propertyCard: {
        borderRadius: 16,
        padding: Spacing.lg,
    marginBottom: Spacing.xl,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    propertyHeader: {
        marginBottom: Spacing.sm,
    },
    developerName: {
        fontSize: Typography.fontSize.sm,
        color: Colors.light.textSecondary,
        fontFamily: Typography.fontFamily.regular,
    },
    propertyPriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    propertyPrice: {
        fontSize: Typography.fontSize.lg,
        fontFamily: Typography.fontFamily.bold,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        marginRight: Spacing.xs,
    },
    locationText: {
        fontSize: Typography.fontSize.sm,
        color: Colors.light.textSecondary,
    },
    reraBadge: {
        backgroundColor: Colors.light.backgroundSecondary,
        padding: Spacing.sm,
        borderRadius: 8,
        marginBottom: Spacing.md,
    },
    reraText: {
        fontSize: Typography.fontSize.xs,
        color: Colors.light.textSecondary,
        fontFamily: Typography.fontFamily.regular,
    },
    imageGallery: {
        flexDirection: 'row',
        gap: Spacing.sm,
        marginBottom: Spacing.md,
    },
    mainImage: {
        flex: 2,
        height: 200,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideImages: {
        flex: 1,
        gap: Spacing.sm,
    },
    sideImage: {
        flex: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholder: {
        fontSize: Typography.fontSize['2xl'],
    },
    propertySpecs: {
        flexDirection: 'row',
        gap: Spacing.sm,
    },
    specBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Spacing.sm,
        borderRadius: 8,
        gap: Spacing.xs,
    },
    specIcon: {
        fontSize: Typography.fontSize.base,
    },
    specText: {
        fontSize: Typography.fontSize.sm,
        fontFamily: Typography.fontFamily.medium,
        color: Colors.light.text,
    },
    fab: {
        position: 'absolute',
        right: Spacing.lg,
        bottom: Spacing.xl,
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
        zIndex: 1000,
    },
    fabIcon: {
        fontSize: Typography.fontSize.xl,
        color: '#FFFFFF',
    },
    section: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.xl,
    },
    sectionTitle: {
        fontSize: Typography.fontSize['2xl'],
        fontFamily: Typography.fontFamily.bold,
    marginBottom: Spacing.lg,
  },
    categoriesContainer: {
        gap: Spacing.md,
        paddingRight: Spacing.lg,
    },
    categoryCard: {
        width: 140,
        padding: Spacing.md,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
    },
    categoryIcon: {
        fontSize: Typography.fontSize['3xl'],
        marginBottom: Spacing.sm,
    },
    categoryName: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.medium,
        textAlign: 'center',
    },
    propertiesContainer: {
        gap: Spacing.md,
        paddingRight: Spacing.lg,
    },
    propertyListItem: {
        width: SCREEN_WIDTH * 0.7,
        borderRadius: 12,
        padding: Spacing.md,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    propertyListImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: Spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    },
    propertyListName: {
        fontSize: Typography.fontSize.lg,
        fontFamily: Typography.fontFamily.bold,
        marginBottom: Spacing.xs,
    },
    propertyListPrice: {
        fontSize: Typography.fontSize.base,
        fontFamily: Typography.fontFamily.semiBold,
        marginBottom: Spacing.xs,
    },
    propertyListLocation: {
        fontSize: Typography.fontSize.sm,
    },
    consultationSection: {
        marginHorizontal: Spacing.lg,
        marginVertical: Spacing.xl,
        padding: Spacing.xl,
        borderRadius: 16,
        alignItems: 'center',
    },
    consultationTitle: {
        fontSize: Typography.fontSize['2xl'],
        fontFamily: Typography.fontFamily.bold,
        marginBottom: Spacing.sm,
        textAlign: 'center',
    },
    consultationSubtitle: {
    fontSize: Typography.fontSize.base,
        textAlign: 'center',
        marginBottom: Spacing.lg,
    },
    consultationButton: {
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing.md,
        borderRadius: 12,
    },
    consultationButtonText: {
        color: '#FFFFFF',
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.semiBold,
    },
});
