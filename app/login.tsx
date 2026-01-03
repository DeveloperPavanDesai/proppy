import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CategoriesSection,
  ConsultationSection,
  FloatingActionButton,
  HeroSection,
  PropertiesSection,
} from '../src/components';
import { CATEGORIES, MOCK_PROPERTIES } from '../src/constants';
import { Colors, Spacing } from '../src/themes';

export default function LoginScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const isDark = false;
  const colors = Colors[isDark ? 'dark' : 'light'];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      Alert.alert('Search', `Searching for: ${searchQuery}`);
    }
  };

  const handleCategoryPress = (category: typeof CATEGORIES[0]) => {
    Alert.alert('Category', `Opening ${category.name}`);
  };

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
            <HeroSection
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
              onSearch={handleSearch}
              colors={colors}
            />
            <CategoriesSection
              categories={CATEGORIES}
              onCategoryPress={handleCategoryPress}
              colors={colors}
            />
            <PropertiesSection
              properties={MOCK_PROPERTIES}
              title="Trending Projects"
              colors={colors}
            />
            <ConsultationSection colors={colors} />
          </ScrollView>

          <FloatingActionButton colors={colors} />
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
    paddingBottom: Spacing['3xl'] + 100,
  },
});
