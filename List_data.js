import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGraduationCap, faTrash, faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons';

const Listdata = () => {
  const jsonUrl = 'http://192.168.136.44:3000/mahasiswa';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        setDataUser(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const deleteData = (id) => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin menghapus data ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => {
            fetch(`${jsonUrl}/${id}`, {
              method: 'DELETE',
            })
              .then(() => {
                Alert.alert('Berhasil', 'Data berhasil dihapus');
                fetchData(); // Refresh data setelah menghapus
              })
              .catch((error) => {
                console.error(error);
                Alert.alert('Gagal', 'Terjadi kesalahan saat menghapus data');
              });
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.cardtitle}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={dataUser}
          onRefresh={fetchData}
          refreshing={refresh}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity>
                <View style={styles.card}>
                  <View style={styles.avatar}>
                    <FontAwesomeIcon icon={faWhiskeyGlass} size={25} color={item.color || 'black'} />
                  </View>
                  <View >
                    <Text style={styles.cardtitle}>{item.name}</Text>
                    <Text style={styles.cardtitle}>{item.address}</Text>
                  </View>
                  <TouchableOpacity onPress={() => deleteData(item.id)} style={styles.trashIcon}>
                    <FontAwesomeIcon icon={faTrash} size={20} color="red" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Listdata;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 7,
    marginHorizontal: 20,
  },
  avatar: {
    borderRadius: 100,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardtitle: {
    maxWidth: 200,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: 'center',
  },
  trashIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
