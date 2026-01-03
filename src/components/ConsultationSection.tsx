import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorPalette, Spacing, Typography } from '../themes';

interface ConsultationSectionProps {
  colors: ColorPalette;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ colors }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

