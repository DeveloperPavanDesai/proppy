import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorPalette, Colors, Spacing, Typography } from '../themes';
import { Input } from './ui';

const avatarMain = require('../../assets/images/Avatarmain.png');

interface ChatBoxProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearch: () => void;
  colors: ColorPalette;
}

const SUGGESTIONS = [
  "Show 2 BHK properties in Whitefield under ₹1.2 Cr with swimming pool and gym amenities and close to tech parks and schools.",
  "Can you show me 3BHK properties that are more than 1300 sqft in size and east-facing in yelahanka?",
  "Show me 2BHK properties in Sarjapur with amenities like a kids play area, swimming pool, and gym",
];

const FILTERS = ['Locality', 'Type', 'Budget', 'Stage'];

export const ChatBox: React.FC<ChatBoxProps> = ({
  searchQuery,
  onSearchQueryChange,
  onSearch,
  colors,
}) => {
  return (
    <View style={[styles.chatBox, { backgroundColor: colors.background }]}>
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

      <View style={styles.filterContainer}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, { backgroundColor: colors.backgroundSecondary }]}
          >
            <Text style={[styles.filterButtonText, { color: colors.text }]}>{filter}</Text>
            <Text style={styles.filterIcon}>▼</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sendButtonContainer}>
        <TouchableOpacity
          style={[styles.sendButton, { backgroundColor: colors.primary }]}
          onPress={onSearch}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.suggestionsContainer}>
        {SUGGESTIONS.map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.suggestionButton, { backgroundColor: colors.backgroundSecondary }]}
            onPress={() => onSearchQueryChange(suggestion)}
          >
            <Text style={[styles.suggestionText, { color: colors.text }]}>
              {suggestion}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.searchInputContainer}>
        <Input
          placeholder="Try '2 BHK in Whitefield'"
          value={searchQuery}
          onChangeText={onSearchQueryChange}
          containerStyle={styles.searchInput}
          inputStyle={styles.searchInputText}
          onSubmitEditing={onSearch}
        />
        <TouchableOpacity
          style={[styles.sendButtonSmall, { backgroundColor: colors.primary }]}
          onPress={onSearch}
        >
          <Text style={styles.sendButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

