import * as React from 'react'
import { Text, View , StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';

export const view = () =>{
return(
     <View style={styles.container}>
         <Text> view Screen</Text>
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
  }
});
