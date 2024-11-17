import React from 'react'
import Datamahasiswa from './data/Mahasiswa.json'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserGraduate, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

const Mahasiswa = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Datamahasiswa}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)} >
            <View style={styles.card}> 
              <View style={styles.avatar}>
              <FontAwesomeIcon 
  icon={faUserGraduate} 
  size={50} 
  color={item.gender === 'male' ? '#A6C8FF' : '#F8BBD0'} // Abu-abu terang untuk pria dan abu-abu gelap untuk wanita
/>


              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.first_name} {item.last_name}</Text>
                <Text style={styles.detailText}>Jenis Kelamin: {item.gender === 'male' ? 'Pria' : 'Wanita'}</Text>
                <Text style={styles.detailText}>Kelas: {item.class}</Text>
                <Text style={styles.detailText}>Lokasi: {item.latitude}, {item.longitude}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Mahasiswa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Background utama dengan warna #1A1A1A
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(46, 46, 46, 0.9)', // Latar belakang card dengan opacity agar lebih transparan
    marginHorizontal: 20,
    marginVertical: 10,
  },
  avatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    marginBottom: 5,
    marginRight: 15, // Menambahkan jarak lebih agar tidak terlalu rapat dengan teks
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF', // Warna teks nama putih
    marginBottom: 8, // Memberikan jarak antar teks
  },
  detailText: {
    fontSize: 14,
    color: '#C7C7CC', // Warna teks lainnya abu-abu terang
    marginBottom: 4, // Memberikan jarak antar detail
  },
});
