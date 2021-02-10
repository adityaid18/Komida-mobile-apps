import React from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image} from 'react-native';
import { colors } from 'react-native-elements';
import  {AuthContext}  from './context';
import logo from '../assets/welcome.jpg'

export const Splash = () => (
     <View style={styles.container}>
     <ActivityIndicator size="large" color="#00ff00" />
     </View>
 );


export const Search = () => (
     <View style={[styles.container, styles.horizontal]}>
         <Text>Info Screen</Text>
     </View>
 );

export const Profiles = ({navigation}) => {
    const { signOut } = React.useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
             <TouchableOpacity
                onPress={()=> navigation.toggleDrawer()}><Text style={{color:'#1e90ff'}}>Drawer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> signOut()}><Text style={{color:'#1e90ff'}}>Sign Out</Text>
                </TouchableOpacity>
        </View>
    );
};


export const Welcomes = ({navigation}) => {
    const { welcome } = React.useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Image source={logo} style={{ width: 305, height: 159 }} /> 
            <TouchableOpacity onPress={ ()=> welcome()}>
                <Text style={{color:'#1e90ff', paddingTop:10, fontSize:30}}> Click Here !</Text>
            </TouchableOpacity>
        </View>
    );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

    return(
    <View style={styles.container}>
      <Text>Create Account Screens</Text>
      <TouchableOpacity
        onPress={()=> signUp()}>
          <Text style={{color:'#1e90ff'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    }
})