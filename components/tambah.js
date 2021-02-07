import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';
import Mybutton from './Mybutton'

const db = SQLite.openDatabase('komida.db');

export const tambah = ({navigation}) => {
   let [userName, setUserName] = useState('');
   let [userAddress, setUserAddress] = useState('');
   let [userContact, setUserContact] = useState('');

   let tambah_user = () => {
       console.log(userName, userAddress, userContact);

    if(!userName){
        alert('Mohon masukan Nama');
        return;
    }
    if(!userAddress){
        alert ('Mohon Masukan Alamat');
        return;
    }
      if(!userContact){
        alert ('Mohon Masukan Kontak');
        return;
    }

    db.transaction(function (tx){
        tx.executeSql(
            'INSERT INTO table_user(user_name, user_address, user_contact) VALUES (?,?,?)',
            [userName, userAddress, userContact],
            (tx,results) => {
                console.log('Results', results.rowsAffected);
                if(results.rowsAffected > 0){
                    Alert.alert(
                        'Success',
                        'Tambah Baru Berhasil',
                        [
                            {
                                text: 'Ok',
                                onPress: () => navigation.navigate('viewAll'),
                            },   
                        ],
                        { cancelable: false }
                    );
                } 
                else alert('GAGAL');
            }
        ); 
    });   
};
        


 return(
     <ScrollView>
     <View style={styles.container}>
       
    {/* <Input
    placeholder='NIK'
    leftIcon={
        <Icon
        name='id-badge'
        size={24}
        color='black'
        />
    }
    /> */}
    <Input
    onChangeText={(userName) => setUserName(userName) }
    placeholder='NAMA KARYAWAN'
    leftIcon={
        <Icon
        name='user-o'
        size={24}
        color='black' /> } 
    />
    <Input
    onChangeText={(userAddress) => setUserAddress(userAddress) }
    placeholder='ALAMAT'
    leftIcon={
        <Icons
        name='ios-home-outline'
        size={24}
        color='black'
        />
    }
    />
    <Input
    onChangeText={(userContact) => setUserContact(userContact) }
    placeholder='NO HANDPHONE'
    keyboardType="numeric"
    leftIcon={
        <Icon
        name='mobile-phone'
        size={24}
        color='black'
        />
    }
    /> 
               

     <View style={styles.buttonrange2}>
        <Mybutton title="Simpan" customClick={tambah_user} />   
    </View>   
    

    </View>
    </ScrollView>
 );
}


const styles = StyleSheet.create({
container: {
    paddingTop: 20,
    backgroundColor: '#fff'
},
buttonrange2: {
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20,
   
}
});