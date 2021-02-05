import * as React from 'react'
import { Text, View , StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';

export const Splash = () =>{
return(
     <View style={[styles.container, styles.horizontal]}>
     <ActivityIndicator size="large" color="#00ff00" />
     </View>
 );
}

export const homeScreen = ({navigation}) => {
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
     </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
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

