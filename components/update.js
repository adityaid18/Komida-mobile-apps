import React, { useState } from 'react';
import { Text, View , StyleSheet, KeyboardAvoidingView, SafeAreaView, ScrollView, Alert,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';
import * as SQLite from 'expo-sqlite'
import Mybutton from './Mybutton'

const db = SQLite.openDatabase('komida.db');

export const update = ({navigation}) =>{
        let [inputUserID, setInputUserId] = useState('');
        let [userName, setUserName] = useState('');
        let [userAddress, setUserAddress] = useState('');
        let [userContact, setUserContact] = useState('');

        let updateAllStates = (nama, address, contact) => {
          setUserName(nama);
          setUserAddress(address);
          setUserContact(contact);
        }

        let searchUser = () => {
          console.log(inputUserID);
          db.readTransaction((tx) => {
            tx.executeSql(
              'SELECT * FROM table_user WHERE user_id = ?',
              [inputUserID],
              (tx, results) => {
                var len = results.rows.length;
                if (len > 0) {
                  let res = results.rows.item(0);
                  updateAllStates(
                    res.user_name,
                    res.user_address,
                    res.user_contact
                  );
                }else {
                  alert ('User Tidak Ditemukan!');
                  updateAllStates('','','');
                }
              }
            );
          });
        };

        let updateUser = () => {
          console.log(inputUserID, userName, userAddress, userContact );

          if(!inputUserID){
            alert('Mohon Isi User Id');
            return;
          }
          if(!userName){
            alert('Mohon Isi Nama');
            return;
          }
          if(!userAddress){
            alert('Mohon Isi Alamat');
            return;
          }
          if(!userContact){
            alert('Mohon Isi No Handphone');
            return;
          }

        db.transaction((tx) => {
          tx.executeSql(
            'UPDATE table_user set user_name=?, user_address=?, user_contact=? WHERE user_id=?',
            [userName, userAddress, userContact, inputUserID],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if(results.rowsAffected > 0) {
                Alert.alert(
                  'Success',
                  'Update User Diperbaharui',
                  [
                    {
                      text: 'Oke',
                      onPress: () => navigation.navigate('viewAll'),
                    },
                  ],
                  {cancelable: false}
                );
              } else alert('update GagaL')
            }
          );
        });
     };



return(
    <SafeAreaView style={{flex: 1 }}>
     <View style={styles.container}>
         <View style={{flex: 1}}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <KeyboardAvoidingView 
                  behavior='padding'
                  style={{ flex: 1, justifyContent:'space-between'}}
              >
                <Input
                    onChangeText={(inputUserID) => setInputUserId(inputUserID) }
                    placeholder='Masukan User Id'
                    leftIcon={
                        <Icon
                        name='id-card-o'
                        size={24}
                        color='black' /> } 
                    />
                    <Mybutton title="Cari User Id" customClick={searchUser} />
                <Input
                    onChangeText={(userName) => setUserName(userName) }
                    value={userName}
                    placeholder='NAMA KARYAWAN'
                    leftIcon={
                        <Icon
                        name='user-o'
                        size={24}
                        color='black' /> } 
                    />
                <Input
                  onChangeText={(userAddress) => setUserAddress(userAddress) }
                  value={userAddress}
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
              value={''+userContact}
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
                <Mybutton title="Update User" customClick={updateUser} />
              </KeyboardAvoidingView>
            </ScrollView>
         </View>
     </View>
     </SafeAreaView>
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 20,
    backgroundColor: '#fff'
  },
});
