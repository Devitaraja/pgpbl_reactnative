import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';
import { faUserGraduate, faPlusCircle, faUserPen, faMap, faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Mahasiswa from './List_data';
import CreateData from './CreateData';
import EditData from './EditData';


const webmap = require('./map.html');


function HomeScreen() {
  return (
    <CreateData />
  );
}

function MapsScreen() {
  return (
    <WebView
      source={webmap}
    />
  );
}



function SettingsScreen() {
  return (
    <Mahasiswa />
  );
}

function EditScreen() {
  return (
    <EditData />
  );
  //   <WebView
  //     source={{ uri: 'https://github.com/Devitaraja' }}
  //     style={{ flex: 1 }} // Optional: Makes WebView take up the full screen
  //   />
  // );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF', // Warna ikon dan teks tab aktif (putih)
          tabBarInactiveTintColor: '#C7C7CC', // Warna ikon dan teks tab tidak aktif (abu-abu terang)
          tabBarStyle: {
            backgroundColor: '#2E2E2E', // Latar belakang Bottom Tab menjadi #2E2E2E
            borderTopWidth: 0, // Menghilangkan garis batas atas tab
            paddingBottom: 5, // Menambahkan padding bawah agar tab tidak terlalu rapat
            // Menambahkan bayangan manual dengan opacity yang memudar ke atas
            shadowColor: '#000', // Warna bayangan hitam
            shadowOffset: { width: 0, height: -3 }, // Bayangan lebih kecil ke atas
            shadowOpacity: 0.2, // Opasitas bayangan rendah untuk efek halus
            shadowRadius: 6, // Radius bayangan agar menyebar dengan halus
            elevation: 10, // Bayangan lebih jelas di Android
          },
        }}
      >
        <Tab.Screen
          name="Tambah Data Es Teh"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#2E2E2E', // Latar belakang header atas yang sama dengan Bottom Tab
            },
            headerTintColor: '#FFFFFF', // Warna teks header
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faPlusCircle} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Maps',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faMap} color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Data Es Teh Jumbo"
          component={SettingsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E2E2E', // Latar belakang header atas yang sama dengan Bottom Tab
            },
            headerTintColor: '#FFFFFF', // Warna teks header
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faWhiskeyGlass} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit Data"
          component={EditScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E2E2E', // Latar belakang header atas yang sama dengan Bottom Tab
            },
            headerTintColor: '#FFFFFF', // Warna teks header
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUserPen} color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}