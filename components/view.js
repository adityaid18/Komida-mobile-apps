import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { Input, Card } from 'react-native-elements';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';
import Mybutton from './Mybutton'

const db = SQLite.openDatabase('komida.db');

export const view = () =>{
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState('');

  let cariUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) =>{
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert ( 'Nama Tidak Ditemukan');
          }
        }
      );
    });
  };






return(
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Input 
            placeholder="Masukan User Id"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            leftIcon={
                   <Icon
                    name='user-o'
                    size={24}
                    color='black'
                    />
                }
            />
          </View>

          <View style={styles.buttonrange2}>
             <Mybutton title="Cari" customClick={cariUser} />
          </View>

          <Card>
          <View style={{marginLeft:35, marginRight: 35, marginTop: 10}}>
            <Text>User id: {userData.user_id}</Text>
            <Text>Nama Karyawan: {userData.user_name}</Text>
            <Text>Alamat: {userData.user_address}</Text>
            <Text>Nomor Handphone: {userData.user_contact}</Text>
          </View>
          </Card>


        </View>
    </SafeAreaView>
     
 );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#1c9963',
    elevation: 2, // Android
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
button2: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#1c9963',
    elevation: 2, // Android
    height: 50,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
buttonrange: {
    justifyContent:'center',
    paddingLeft:13,
    flexDirection:'row'
},
buttonrange2: {
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20,
    paddingRight:10
}
});
