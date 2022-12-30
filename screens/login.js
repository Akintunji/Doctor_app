import React, { useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
//import {Picker} from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from '../wallet/dashboard';
import Register from './register';


 function Logins({navigation}){

  const [signed_in, setsigned_in]=useState('false'); 
  const [balance,setbalance]=useState('');
  const [token,settoken]=useState('');
  const [email, setemail]=useState('');
  const [password,setpass]=useState('');
  const [name, setname]=useState('');
  async function userlogin (value){
  
    
     fetch('https://www.haykaytelecoms.com.ng/api/apilogin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      email : email,
        password: password,
        email:email,
    })
    }) .then((response) => response.json())
        .then((response) => {
       AsyncStorage.setItem(
            "user_session",
            JSON.stringify({
              name : response.name,
                token :response.token,
                balance :response.balance, 
                email:response.email,           
            }));
     if (response.status=="Success"){
    
      navigation.navigate('dashboard')}
   
      else{alert('Invalid credentials');}
    });
    
    }
  

return (<SafeAreaView>
     <View style={{marginTop:90 }}/>
<TextInput title= "Email"
  placeholder="Enter Email"
  style={{ color: 'purple', borderWidth:2,borderradius:4,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40,}}
onChangeText={(val)=>setemail(val)} placeholderTextColor="purple"
 underlineColorAndroid="transparent"
/>
<TextInput  
placeholder="Password"
onChangeText={(val)=>setpass(val)}
placeholderTextColor="purple"
 onSubmitEditing={Keyboard.dismiss}   
 style={{ color: 'purple',borderWidth:2,borderradius:4,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40,marginVertical: 9,fontSize: 15, }}/>
 
 <View style={{marginTop:20 ,width:'30',marginLeft:'90'}}>
<Button title="LOGIN" onPress={() => navigation.navigate('dashboard')} />

<Button title="LOGIN" onPress={userlogin} />
</View>

<TouchableOpacity onPress={()=>navigation.navigate('Register')}> <Text style={{marginLeft:100,fontSize:18,color:'purple',}}>..New User?, Register</Text></TouchableOpacity>

</SafeAreaView>
  );

}
export default function Login(){
  const Stack = createBottomTabNavigator();
  // createStackNavigator();
    return ( 
    <NavigationContainer independent='true'>
      <Stack.Navigator screenOptions={{
        title:'Haykaytelecoms',
    tabBarStyle: { position: 'absolute',  backgroundColor:'purple',color:'white', showIcon:false, },
    tabBarIconStyle: {display:"none", },
tabBarLabelStyle:{marginVertical:15}

  }}>

<Stack.Screen name="Haykaytelecoms" component={Logins} 
        options={{
         
     tabBarLabel:'Login',
        headerStyle: {
         backgroundColor: 'purple',
        },
        headerShown: false,
        }}/>
        
        <Stack.Screen name="dashboard" component={Dashboard}
         options={{headerShown: false,
          tabBarButton: () => null,
        tabBarStyle: {
          display: "none",
        }, 
        }} />


<Stack.Screen name="Register" component={Register}
        options={{headerShown: false,
          headerMode:'none',
          navigationOptions:{headerVisible:false,},
          tabBarLabel:'Register',
       }} />
      </Stack.Navigator>
  </NavigationContainer>
    );



} 

