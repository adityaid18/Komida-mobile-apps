import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import  Icons from 'react-native-vector-icons/MaterialCommunityIcons';

//import components
import {homeScreen} from './components/homeScreen'
import {tambah }from './components/tambah'
import {hapus } from './components/hapus'
import {update } from './components/update'
import {view } from './components/view'
import {viewAll } from './components/viewAll'
import {Profiles, Welcomes, CreateAccount, Splash , Search} from './components/profile'
import {AuthContext} from './components/context';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RootStack = createStackNavigator();
const SearchStack = createStackNavigator();

const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name="Home" component={TabScreen}/> 
      <Drawer.Screen name="Profile" component={ProfileStackScreen}/>    
    </Drawer.Navigator>
  );

const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode='none'>
    {userToken ? (  
        <RootStack.Screen name="App" component={DrawerScreen} options={{animationEnabled: false}}/>
      ): (
        <RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}}/>
      )}
    </RootStack.Navigator>
  );


const AuthStackScreen = () => (
      <AuthStack.Navigator headerMode='none'>
          <AuthStack.Screen name="welcome" component={Welcomes}/>  
          <AuthStack.Screen name="create" component={CreateAccount}/>  
      </AuthStack.Navigator>
  );
      
  
const ProfileStackScreen = () => (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="profile" component={Profiles}/>
      </ProfileStack.Navigator>  
    );


const SearchStackScreen = () => (
    <SearchStack.Navigator>
      <SearchStack.Screen name="INFO" component={Search}/>
    </SearchStack.Navigator>
 );
  

const HomeStackScreen = () => (
    <HomeStack.Navigator > 
    <HomeStack.Screen name="submit" component={homeScreen} options={{title:'KOMIDA MOBILE APPS'}} />  
    <HomeStack.Screen name="tambah" component={tambah} options={{title:'KOMIDA MOBILE APPS'}} />
    <HomeStack.Screen name="update" component={update} options={{title:'KOMIDA MOBILE APPS'}}/>
    <HomeStack.Screen name="hapus" component={hapus} options={{title:'KOMIDA MOBILE APPS'}} />
    <HomeStack.Screen name="view" component={view} options={{title:'KOMIDA MOBILE APPS'}} /> 
    <HomeStack.Screen name="viewAll" component={viewAll} options={{title:'KOMIDA MOBILE APPS'}} /> 
    </HomeStack.Navigator>
  );
  


const TabScreen = () => (
<Tab.Navigator >
   <Tab.Screen 
          name="Home" 
          component={HomeStackScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
          <Icons name="home" color={color} size={26}/> ), }}/>
   <Tab.Screen name="list" 
          component={SearchStackScreen} options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color }) => (
          <Icons name="information" color={color} size={26}/> ), }}/>
</Tab.Navigator>
);


export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);


const authContext = React.useMemo(() => {
  return{
    welcome: () => {
      setIsLoading(false);
      setUserToken('asdf');
    },
    signUp: () => {
      setIsLoading(false);
      setUserToken('asdf');
    },
    signOut: () => {
      setIsLoading(false);
      setUserToken(null);
    }
  };
}, [])


  React.useEffect( ()=> {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[]);

if (isLoading){
  return <Splash />;
}

  return (
    <AuthContext.Provider value={authContext}> 
    <NavigationContainer >
      <RootStackScreen userToken={userToken}/>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}


