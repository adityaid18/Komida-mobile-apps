import React, { useState } from 'react';
import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Card } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';
import Mybutton from './Mybutton'
import { ScrollView } from 'react-native-gesture-handler';

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
      <SafeAreaView style={styles.container}>
        <ScrollView >
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
          {/* <View style={{marginLeft:35, marginRight: 35, marginTop: 10}}> */}
            <Text style={styles.textheader}>User ID</Text>
            <Text style={styles.textbottom}>{userData.user_id}</Text>

            <Text style={styles.textheader}>Nama Karyawan</Text>
            <Text style={styles.textbottom}>{userData.user_name}</Text>

            <Text style={styles.textheader}>Alamat</Text>
            <Text style={styles.textbottom}>{userData.user_address}</Text>

            <Text style={styles.textheader}>No Handphone</Text>
            <Text style={styles.textbottom}>{userData.user_contact}</Text>
          {/* </View> */}
          </Card>


        </ScrollView>
      </SafeAreaView>
     
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:25,
    backgroundColor: '#fff'
    
  },
  jarak: {
    alignItems:'center',
    paddingTop:10,
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



