import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ColorPalette, Spacing, Typography } from '../themes';
import { Property } from '../types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface PropertyCardProps {
  property: Property;
  colors: ColorPalette;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  colors,
}) => {
  return (
    <View style={[styles.propertyListItem, { backgroundColor: colors.background }]}>
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
  );
};

const styles = StyleSheet.create({
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
  imagePlaceholder: {
    fontSize: Typography.fontSize['2xl'],
  },
});

