import React, { useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../wallet/dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function U_Register({navigation}){
const [email,setemail]=useState('');
const [password, setpass]=useState(''); 
const [username, setusername]=useState('');
const [confirm_password,  setcpass]=useState('');
const [phonenumber, setphone]=useState('');
const [referer_code,setreferercode]=useState('');

const reg = async() => {
  
//if (email.length==0 || password.length==0 || confirm_password.length==0  || username.length==0  || Phonenumber.length ==0  ) {alert('Missing Field');}

if(password!==confirm_password) { alert('Passwords Donot Match');
}


    
fetch('https://www.haykaytelecoms.com.ng/api/Api_h', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  email : email,
    password: password,
    name:username,
   phonenumber:phonenumber,
   referer_code:referer_code,

  })
}) .then((response) => response.json())
    .then((response) => {
   
 if (response.status=="Success"){navigation.navigate('dashboard')}
 else{
  alert('Problems Encountered Registering You,Maybe email taken');}

});

}
  
 

  


return (

<SafeAreaView style={styles.Touchable}>
    <ScrollView>
    <View style={{marginTop:40,marginLeft:40, flex:1}}/>

    <View>
    

 <TextInput title= "username"
  placeholder="Username"   
  style={{ color: 'purple', borderWidth:2,borderradius:4,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40,}}
onChangeText={(val)=>setusername(val)} placeholderTextColor="purple"
underlineColorAndroid="transparent"/>



<TextInput title= "Email"
  placeholder="Enter Email"
style={{ color: 'purple',borderWidth:2,borderradius:4,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40,marginVertical: 9,fontSize: 15, }}
onChangeText={(val)=>setemail(val)} placeholderTextColor="purple"
 underlineColorAndroid="transparent"
/>






<TextInput  
  placeholder="Password"

onChangeText={(val)=>setpass(val)}
placeholderTextColor="purple"
 onSubmitEditing={Keyboard.dismiss}  

 style={{ color: 'purple',borderWidth:2,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40,marginVertical: 9,fontSize: 15, }}  />

<TextInput  

onChangeText={(val)=>setcpass(val)}
placeholder="Confirm Password"

placeholderTextColor="purple" onSubmitEditing={Keyboard.dismiss}   
 style={{ color: 'purple',borderWidth:2,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40, marginVertical: 9,fontSize: 15,}}  />


<TextInput  
onChangeText={(val)=> setphone(val)}
placeholderTextColor="purple"
placeholder="Phonenumber(optional)"
 style={{ color: 'purple',borderWidth:2,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40,marginVertical: 9,fontSize: 15 }}   />



<TextInput  
onChangeText={(val)=> setreferercode(val)}
placeholderTextColor="purple"
placeholder="Reference Code(optional)"

 style={{ color: 'purple',borderWidth:2,borderColor:'purple',width:'70%',marginLeft:40,marginRight:40,marginVertical: 9,fontSize: 15 }}   />


<Button title="REGISTER" onPress={reg} />
<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white' }}>
   Already Registered
  </Text>

</View>
</ScrollView>
</SafeAreaView> );



}



const styles = StyleSheet.create({
  Touchable:{ backgroundColor: 'white',
  flex: 1,
  justifyContent: 'center',
  
  },
  
  header: {
  height: '100',
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
   welcome: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
        borderColor: 'purple',
        color:'purple',
      
    },  
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
        borderColor: 'purple',
        color:'purple',
      
    },
  
  button:{
      flex: 10.02,
      backgroundColor: '#fff',
      alignItems: 'center',
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
      width: 66,
      height: 58,
    },
  Buttons:{ backgroundColor: 'pink',
  justifyContent: 'center',
  marginTop:50 ,
    
  
  },});





  export default function Register(){
    const Stack = createNativeStackNavigator();
          return ( 
      <NavigationContainer independent='true'>
        <Stack.Navigator>
  
  
  
  
          
          <Stack.Screen name="haykaytelecoms" component={U_Register} 
          options={{
          headerMode:'none',
          navigationOptions:{headerVisible:false,}
          }}/>
          
          <Stack.Screen name="dashboard" component={Dashboard}
           options={{
          headerMode:'none',
          navigationOptions:{headerVisible:false,}
          }} />
        </Stack.Navigator>
    </NavigationContainer>
      );
  
  
  
  } 
  
  