import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('komida.db');

export const viewAll = () => {
    return(
        <View style={styles.container}>
           <Text>viewall</Text> 
        </View>
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