import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ColorPalette, Spacing, Typography } from '../themes';
import { Category } from '../types';
import { CategoryCard } from './CategoryCard';

interface CategoriesSectionProps {
  categories: Category[];
  onCategoryPress?: (category: Category) => void;
  colors: ColorPalette;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  onCategoryPress,
  colors,
}) => {
  const handleCategoryPress = (category: Category) => {
    if (onCategoryPress) {
      onCategoryPress(category);
    } else {
      Alert.alert('Category', `Opening ${category.name}`);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Browse Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onPress={handleCategoryPress}
            colors={colors}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

