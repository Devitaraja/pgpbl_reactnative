import React, {useState} from 'react'
import { SafeAreaView, View, ScrollView, TextInput, Button, StyleSheet, Text } from 'react-native';

const Createdata = () => {
const jsonUrl = 'http://192.168.136.44:3000/mahasiswa';
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

const submit = () => {
   const data = {
     name: name,
     address: address,
   };
   fetch('http://192.168.224.44:3000/mahasiswa', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   })
   .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert('berhasil');
        setName('');
        setAddress('');
      })
    }

 return (
  <SafeAreaView>
   <View>
     <ScrollView style={ styles.form }>
      <TextInput style={ styles.input } placeholder="Nama Kedai" value={name} onChangeText={(value) => setName(value)} />
      <TextInput style={ styles.input } placeholder="Alamat" value={address} onChangeText={(value) => setAddress(value)} />

      <Button title="Simpan" style={styles.button} onPress={submit} />
     </ScrollView>
   </View>
  </SafeAreaView>
 )

}

export default Createdata

const styles = StyleSheet.create({
 title: {
   paddingVertical: 12,
   backgroundColor: '#333',
   color: 'black',
   fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'center',
 },
 form: {
   padding: 10,
   marginBottom: 100,
 },
 input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginVertical: 5,
    color: 'black'
  },
  button: {
    marginVertical: 10,
  }
 })