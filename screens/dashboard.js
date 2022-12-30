
import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import vtu from '../wallet/vtu';
import cable from '../wallet/cable';
import data from '../wallet/data';
import  electricity from '../wallet/electricity';
import Fundwallet from '../wallet/Fundwallet';


async function retrieveUserSession() {

  const [email, setemail]=useState('');
  const [signed_in, setsigned_in]=useState('false'); 
  const [balance,setbalance]=useState('');
 const[username, setusername]=useState('');


  try {   
      const session = await AsyncStorage.getItem("user_session");
      if (session !== undefined) {
      setbalance(user_session.balance);
      setusername(user_session.username);
      settoken(user_session.email);
      }
  } catch (error) {
      // There was an error on the native side
  }
}

function dashboardd({ navigation }) {

  
  //useEffect(() => {retrieveUserSession();});

  return (
<SafeAreaView style={styles.Safeareaview}>

<View style={styles.welcome}>
      <Text>Reseller Ewallet</Text>

<Text>Your Wallet Balances is ggg </Text>
    </View>







<View style={styles.pcontainer}>
 <View style={styles.container}>

 <View ><Image  style={styles.image} source={require("../assets/vtu.jpg")}/>
 <TouchableOpacity onPress={() => navigation.navigate('Vtu')}> <Text>Buy Vtu</Text> </TouchableOpacity ></View>

 <View ><Image  style={styles.image} source={require("../assets/data.jpg")}/><TouchableOpacity onPress={() => navigation.navigate('Data')}>  <Text>Buy Data </Text></TouchableOpacity > </View>
 
</View>
<View></View>
 <View style={styles.container}>

   <View><Image  style={styles.image} source={require("../assets/cable.jpg")}/><TouchableOpacity onPress={() => navigation.navigate('Cable')}><Text> Cable TV</Text></TouchableOpacity > </View>
  
 <View><Image  style={styles.image} source={require("../assets/electricity.jpg")}/> <TouchableOpacity onPress={() => navigation.navigate('Electricity')}><Text>Buy Electricity </Text></TouchableOpacity > </View>


 </View>
   </View>


     

  </SafeAreaView>

  );
}
const styles = StyleSheet.create({
header: {
     flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
fontSize:20,
fontWeight:'bold',
    height:80, 
color: 'white',
PaddingTop:38,
  },
title:{fontSize:20,
fontWeight:'bold',
color: 'white',},
 content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
    
  },  

pcontainer: {
    flex: 1,
flexDirection:"row",
  top:170,
    justifyContent: 'center',
      borderColor: 'white',
      color:'white',
   left:70,
  },


container: {
    flex: 1,

  top:170,
    justifyContent: 'center',
      borderColor: 'white',
      color:'white',
   
  },

Buttons:{
   PaddingTop:38,Top:20,
    backgroundColor: 'purple',
    alignItems: 'center',
Color: '#fff',
 width: 96,
    height: 98,
fontWeight:'bold',
  },


footer: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
 Color: 'white',
 color: "#20232a",
 top: 270,
height: 658,
  },
 image: {
    width: 86,
    height: 58,
  },

});
export default function Dashboard() {
  const Stack = createStackNavigator();

  return (<NavigationContainer independent='true'>
    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={dashboardd} 
      options={{
          title: '',
          headerStyle: {
          backgroundColor: '#000080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}/>
      
      <Stack.Screen name="vtu" component={vtu} />
    </Stack.Navigator>
    </NavigationContainer>
  );

}