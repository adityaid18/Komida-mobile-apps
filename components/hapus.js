import * as React from 'react'
import { Text, View , StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Input, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mybutton from './Mybutton'

const db = SQLite.openDatabase('komida.db');

export const hapus = ({navigation}) => {
  let [inputUserId, setInputUserId] = React.useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM table_user WHERE user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0 ){
              Alert.alert(
                'Succes',
                'Hapus User Berhasil',
                [
                  {
                    text: 'Oke',
                    onPress: () => navigation.navigate('viewAll'),
                  },
                ],
                { cancelable: false }
              );
          } else {
            alert('Mohon Masukan User Id yang Benar');
          }
        }
      );
    });
  };
  
return(
     <SafeAreaView style={{flex: 1 }}>
       <View style={{ flex: 1, backgroundColor: '#fff'}}>
         <View style={{flex:1, alignItems:'center'}}>
           <Input
              onChangeText={(inputUserId) => setInputUserId(inputUserId) }
              placeholder='User Id'
              leftIcon={
                      <Icon
                        name='id-card-o'
                        size={24}
                        color='black' /> } 
                    />
            <Mybutton title="Delete User" customClick={deleteUser} />     
         </View>
       </View>
     </SafeAreaView>
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

});
