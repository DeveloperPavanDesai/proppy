import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ColorPalette, Spacing, Typography } from '../themes';
import { Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertiesSectionProps {
  properties: Property[];
  title?: string;
  colors: ColorPalette;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  properties,
  title = 'Trending Projects',
  colors,
}) => {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.propertiesContainer}
      >
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} colors={colors} />
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
  propertiesContainer: {
    gap: Spacing.md,
    paddingRight: Spacing.lg,
  },
});

