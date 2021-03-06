import React from 'react'
import { Text, View , StyleSheet, TouchableOpacity, } from 'react-native';
import * as SQLite from 'expo-sqlite';
import {AntDesign, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons'




const db = SQLite.openDatabase('komida.db');

export const homeScreen = ({navigation}) => {
    React.useEffect(()=>{
        db.transaction(function(txn){
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res){
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0){
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20),user_address VARCHAR(225), user_contact INT(13))',
                            []
                        );
                    }
                }
            );
        });
    });



return(
     <View style={styles.container}>

         <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

         <View  style={{flex: 1, alignItems:'center'}}>
         <TouchableOpacity 
                style={{
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android
                    height: 130,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',               
                    borderRadius: 10,
                    backgroundColor: '#1e90ff'
                }}
                onPress={() => navigation.push('tambah')}>
                <AntDesign name="addfile" size={50} color="black" />
                <Text style={{fontSize:12, fontWeight:'bold'}}>TAMBAH BARU</Text>
        </TouchableOpacity>
         </View>

         <View style={{flex: 1, alignItems:'center'}}>
        <TouchableOpacity 
                style={{
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android
                    height: 130,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#e9967a'
                }}
                onPress={() => navigation.navigate('update')}>
                    <MaterialIcons name="update" size={50} color="black" />
                    <Text style={{fontSize:12, fontWeight:'bold'}}>EDIT</Text>
        </TouchableOpacity>
        </View>

        </View>

         <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop:20}}>

         <View  style={{flex: 1, alignItems:'center'}}>
         <TouchableOpacity 
                style={{
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android
                    height: 130,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#1c9963'
                }}
                onPress={() => navigation.push('view')}>
                <MaterialIcons name="pageview" size={50} color="black" />
                <Text style={{fontSize:12, fontWeight:'bold'}}>CARI</Text>
        </TouchableOpacity>
         </View>

         <View style={{flex: 1, alignItems:'center'}}>
        <TouchableOpacity 
                style={{
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android
                    height: 130,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#7fffd4'
                }}
                onPress={() => navigation.navigate('viewAll')}>
                    <MaterialIcons name="preview" size={50} color="black" />
                    <Text style={{fontSize:12, fontWeight:'bold'}}>LIHAT SEMUA</Text>
        </TouchableOpacity>
        </View>
    

        </View>


         <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop:20}}>

         <View  style={{flex: 1, alignItems:'center'}}>
         <TouchableOpacity 
                style={{
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android
                    height: 130,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#ff0000'
                }}
                onPress={() => navigation.push('hapus')}>
                <MaterialIcons name="auto-delete" size={50} color="black" />
                <Text style={{fontSize:12, fontWeight:'bold'}}>HAPUS</Text>
        </TouchableOpacity>
         </View>

         <View style={{flex: 1, alignItems:'center'}}>
        <TouchableOpacity 
                style={{
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android
                    height: 130,
                    width: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#b0c4de'
                }}
                onPress={() => navigation.toggleDrawer()}>
                <MaterialCommunityIcons name="human-greeting" size={50} color="black" />
                <Text style={{fontSize:12, fontWeight:'bold'}}>PROFILE</Text>
        </TouchableOpacity>
        </View>
    

        </View>

     </View>
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#fff',
  },
horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15
  },
  
});

