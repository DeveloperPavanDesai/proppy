import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ColorPalette, Spacing, Typography } from '../themes';

interface FloatingActionButtonProps {
  onPress?: () => void;
  colors: ColorPalette;
  icon?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
  colors,
  icon = '📞',
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      Alert.alert('Call', 'Calling property expert...');
    }
  };

  return (
    <TouchableOpacity
      style={[styles.fab, { backgroundColor: colors.primary }]}
      onPress={handlePress}
    >
      <Text style={styles.fabIcon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

