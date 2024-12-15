import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserEdit, faGraduationCap, faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons';

const Createdata = () => {
  const jsonUrl = 'http://192.168.136.44:3000/mahasiswa';
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setDataUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshPage = () => {
    setRefresh(true);
    fetchData();
    setRefresh(false);
  };

  const submit = () => {
    if (!selectedUser || !selectedUser.id) {
      alert('Pilih data untuk diedit.');
      return;
    }

    const data = {
      name,
      address,
    };

    fetch(`${jsonUrl}/${selectedUser.id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Data berhasil diperbarui');
        setName('');
        setAddress('');
        setSelectedUser(null);
        refreshPage();
      })
      .catch((error) => {
        console.error(error);
        alert('Gagal memperbarui data');
      });
  };

  const selectItem = (item) => {
    setSelectedUser(item);
    setName(item.name);
    setAddress(item.address);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <View style={styles.loading}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <>
            <Text style={styles.title}>Edit Data</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Nama"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Alamat"
                value={address}
                onChangeText={setAddress}
              />

              <Button title="Edit" onPress={submit} />
            </View>
            <FlatList
              data={dataUser}
              keyExtractor={(item) => item.id.toString()}
              refreshing={refresh}
              onRefresh={refreshPage}
              contentContainerStyle={{ paddingBottom: 50 }}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectItem(item)}>
                  <View style={styles.card}>
                    <View style={styles.avatar}>
                      <FontAwesomeIcon icon={faWhiskeyGlass} size={30} />
                    </View>
                    <View>
                      <Text style={styles.cardtitle}>{item.name}</Text>
                      <Text style={styles.cardtitle}>{item.address}</Text>
                    </View>
                    <View style={styles.editIcon}>
                      <FontAwesomeIcon icon={faUserEdit} size={20} />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Createdata;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      paddingVertical: 8,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    form: {
      padding: 8,
      marginBottom: 5,
    },
    input: {
      color: 'black',
      borderWidth: 1,
      borderColor: '#777',
      borderRadius: 6,
      padding: 6,
      fontSize: 14,
      width: '100%',
      marginVertical: 4,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 4,
      backgroundColor: '#f9f9f9',
      borderRadius: 6,
      elevation: 1,
    },
    avatar: {
      marginRight: 10,
    },
    cardtitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black'
    },
    editIcon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
});
