import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';

const db = SQLite.openDatabase('komida.db');

export const tambah = ({navigation}) => {
    const [text, setText] = useState('')

 return(
     <ScrollView>
     <View style={styles.container}>
       
    <Input
    placeholder='NIK'
    leftIcon={
        <Icon
        name='id-badge'
        size={24}
        color='black'
        />
    }
    />
    <Input
    placeholder='NAMA KARYAWAN'
    leftIcon={
        <Icon
        name='user-o'
        size={24}
        color='black'
        />
    }
    />
    <Input
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
    placeholder='NO TELEPON'
    leftIcon={
        <Icon
        name='mobile-phone'
        size={24}
        color='black'
        />
    }
    /> 
    <View style={styles.buttonrange}>
               
        <View style={styles.buttonrange2}>
         <TouchableOpacity style={styles.button}
         onPress={() => navigation.goBack()}>
            <Text style={{fontSize:20}}>KEMBALI</Text>
            </TouchableOpacity>
        </View>

     <View style={styles.buttonrange2}>
         <TouchableOpacity style={styles.button}
         onPress={() => alert('nyantai hela')}>
            <Text style={{fontSize:20}}>SIMPAN</Text>
        </TouchableOpacity>
     </View>
        
    </View>   
    

    </View>
    </ScrollView>
 );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: '#7a42f4',
      borderWidth: 1
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#1c9963',
    elevation: 2, // Android
    height: 50,
    width: 100,
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