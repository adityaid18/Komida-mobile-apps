import * as React from 'react'
import { Text, View , StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import * as SQLite from 'expo-sqlite';

export const Splash = () =>{
return(
     <View style={[styles.container, styles.horizontal]}>
     <ActivityIndicator size="large" color="#00ff00" />
     </View>
 );
}

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
         <View style={styles.subcontainer}>
         <TouchableOpacity style={styles.button}
         onPress={() => navigation.push('tambah')}>
            <Text style={{fontSize:30}}>TAMBAH BARU</Text>
        </TouchableOpacity>
         </View>

         <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('update')}>
            <Text style={{fontSize:30}}>UPDATE</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('hapus')}>
            <Text style={{fontSize:30}}>HAPUS</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('view')}>
            <Text style={{fontSize:30}}>LIHAT</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('viewAll')}>
            <Text style={{fontSize:30}}>LIHAT SEMUA</Text>
        </TouchableOpacity>
        </View>
     </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#fff',
    paddingTop: 20
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
horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  subcontainer:{
      paddingTop:20,
  }
});

