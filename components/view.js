import React, { useState } from 'react';
import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Card } from 'react-native-elements';
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
            alert ( 'Karyawan Tidak Ditemukan');
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
                    name='id-card-o'
                    size={24}
                    color='black'
                    />
                }
            />
          </View>

          <View style={styles.jarak}>
             <Mybutton title="Cari" customClick={cariUser} />
          </View>

          <Card>
          <View style={{marginLeft:35, marginRight: 35, marginTop: 10}}>
            <Text style={styles.textheader}>User ID</Text>
            <Text style={styles.textbottom}>{userData.user_id}</Text>

            <Text style={styles.textheader}>Nama Karyawan</Text>
            <Text style={styles.textbottom}>{userData.user_name}</Text>

            <Text style={styles.textheader}>Alamat</Text>
            <Text style={styles.textbottom}>{userData.user_address}</Text>

            <Text style={styles.textheader}>No Handphone</Text>
            <Text style={styles.textbottom}>{userData.user_contact}</Text>
          </View>
          </Card>


        </View>
    </SafeAreaView>
     
 );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor:'#fff'
  },
  jarak: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    paddingTop:10
},
textheader: {
    color: '#111',
    fontSize: 12,
    fontWeight: '700'
  },
  textbottom: {
    color: '#111',
    fontSize:18
  },
});


