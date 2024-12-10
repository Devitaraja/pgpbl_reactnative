import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Mahasiswa from './List_data';
import CreateData from './CreateData';
import EditData from './EditData'

function HomeScreen() {
  return (
    <CreateData />
  );
}

function SettingsScreen() {
  return (
    <Mahasiswa />
  );
}

function WebScreen() {
  return (
    <EditData />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#5A5A33', // Warna ikon dan teks tab aktif (kuning pastel gelap)
          tabBarInactiveTintColor: '#A8A877', // Warna ikon dan teks tab tidak aktif (kuning pastel terang)
          tabBarStyle: {
            backgroundColor: '#F7F6CF', // Latar belakang Bottom Tab menjadi kuning pastel
            borderTopWidth: 0, // Menghilangkan garis batas atas tab
            paddingBottom: 5, // Menambahkan padding bawah agar tab tidak terlalu rapat
            shadowColor: '#000', // Warna bayangan hitam
            shadowOffset: { width: 0, height: -3 }, // Bayangan lebih kecil ke atas
            shadowOpacity: 0.2, // Opasitas bayangan rendah untuk efek halus
            shadowRadius: 6, // Radius bayangan agar menyebar dengan halus
            elevation: 10, // Bayangan lebih jelas di Android
          },
        }}
      >
        <Tab.Screen
          name="Profil"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#F7F6CF', // Latar belakang header atas kuning pastel
            },
            headerTintColor: '#5A5A33', // Warna teks header (kuning pastel gelap)
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Data Mahasiswa"
          component={SettingsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F7F6CF', // Latar belakang header atas kuning pastel
            },
            headerTintColor: '#5A5A33', // Warna teks header (kuning pastel gelap)
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUserGraduate} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit Data"
          component={WebScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F7F6CF', // Latar belakang header atas kuning pastel
            },
            headerTintColor: '#5A5A33', // Warna teks header (kuning pastel gelap)
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faPen} color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
