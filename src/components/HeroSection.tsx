import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorPalette, Colors, Spacing, Typography } from '../themes';
import { ChatBox } from './ChatBox';

interface HeroSectionProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearch: () => void;
  colors: ColorPalette;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchQueryChange,
  onSearch,
  colors,
}) => {
  return (
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
        <View style={styles.chatContainer}>
          <ChatBox
            searchQuery={searchQuery}
            onSearchQueryChange={onSearchQueryChange}
            onSearch={onSearch}
            colors={colors}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

