/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={styles.contentContainer}>
          <Section title="Nama">
            Dhimar Fadhilansyah
          </Section>
          <Section title="NIM">
            22/493570/SV/20710
          </Section>
          <Section title="Kelas">
            A
          </Section>
          <Text style={styles.socialMediaTitle}>Tautan Sosial Media</Text>
          <Text style={styles.socialMediaDescription}>
            Berikut adalah beberapa tautan sosial media saya:
          </Text>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Menambahkan padding di sisi kanan dan kiri layar
    backgroundColor: '#1A1A1A', // Warna latar yang lebih gelap untuk keseluruhan app
  },
  contentContainer: {
    backgroundColor: '#2E2E2E', // Card background warna abu-abu gelap
    borderRadius: 12,
    padding: 16,
    marginVertical: 10, // Jarak antar card
  },
  sectionContainer: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF', // Warna teks judul yang lebih kontras
  },
  sectionDescription: {
    fontSize: 16,
    color: '#C7C7CC', // Warna teks deskripsi abu-abu terang
    marginTop: 4,
  },
  socialMediaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
  },
  socialMediaDescription: {
    fontSize: 14,
    color: '#C7C7CC',
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default App;
