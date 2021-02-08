import React, { useEffect, useState } from 'react';
import { FlatList, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input, Card } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('komida.db');

export const viewAll = () => {
    let [flatListItems, setFlatlistItems] = useState([]);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user',
                [],
                (tx, results) => {
                var temp = [];
                for( let i = 0; i < results.rows.length; ++i)
                temp.push(results.rows.item(i));
                setFlatlistItems(temp);
                }
            );
        });
    }, []);

    let listItemView = (item) => {
        return(
        <View 
            key={item.user_id}
            > 
          <Card>
                <Text style={styles.textheader}>User ID</Text>
                <Text style={styles.textbottom}>{item.user_id}</Text>

                <Text style={styles.textheader}>Nama Karyawan</Text>
                <Text style={styles.textbottom}>{item.user_name}</Text>

                <Text style={styles.textheader}>Alamat</Text>
                <Text style={styles.textbottom}>{item.user_address}</Text>

                <Text style={styles.textheader}>No Handphone</Text>
                <Text style={styles.textbottom}>{item.user_contact}</Text>
        </Card>        
        </View>
    );
        
    };

    return(
       
           <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
               <View style={{ flex:1}}>
                   <View style={{flex:1}}>
                        <FlatList 
                            style={{marginTop: 5}}
                            data={flatListItems}
                            contentContainerStyle={{ paddingHorizontal: 20 }}
                            keyExtractor={(item, index) => index.toString() }
                            renderItem={({ item }) => listItemView(item)}
                        />
                   </View>
               </View>         
           </SafeAreaView>    
    
    );
}

const styles = StyleSheet.create({
  container: {
    marginVertical:40
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

});