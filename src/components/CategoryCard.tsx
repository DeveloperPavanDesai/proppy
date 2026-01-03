import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ColorPalette, Spacing, Typography } from '../themes';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onPress: (category: Category) => void;
  colors: ColorPalette;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onPress,
  colors,
}) => {
  return (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: colors.backgroundSecondary }]}
      onPress={() => onPress(category)}
    >
      <Text style={styles.categoryIcon}>{category.icon}</Text>
      <Text style={[styles.categoryName, { color: colors.text }]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

