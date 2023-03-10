import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput ,Picker, Text, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import React, { useState,useEffect } from 'react';
     

export default function Cable() {

  const[cable_plan_id, set_plan_id]=useState('');
    const [decoder_type,set_decoder_type]=useState('');
  const[ iuc_number, set_iuc]= useState('');
  const[phonenumber , set_phonenumber]= useState('');
  const buy=()=>{

  if(cable_plan_id.length==0||decoder_type.length==0||iuc_number.length==0){
    alert('Missing Field');
  }
  fetch('https/haykaytelecoms.com.ng/api/buy_cable', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({

      cable_plan_id:cable_plan_id,
      decoder_type:decoder_type,
      iuc_number:iuc_number,
      Metertype:Metertype,
    })
  }) .then((response) => response.json())
      .then((response) => {
      
   if (response.status=="Success"){
    alert('Transaction Successful');
    navigation.navigate('dashboard')}
   else{alert('Failed Transaction');}
  
  });
  
  }
  return (
<SafeAreaView style={styles.Safeareaview}>
    

  <ScrollView>
  <View style={{ marginTop: 100 }} />

 <View style={styles.welcome}>

<Text>SELECT CABLE NETWORK</Text>
 <Picker   style={{ height: 50, width: 100 }}
  onValueChange={(Value) =>
   set_decoder_type(Value )}>

<Picker.Item label = "Dstv" value = "1" />
 <Picker.Item label = "Gotv" value = "3" />
 <Picker.Item label = "Startimes" value = "2" />

 
 </Picker>
<Text style={styles.welcome}>SELECT PLAN</Text>
 
 <Picker   style={{ height: 50, width: 100 }}
  onValueChange={(Value) =>
    set_plan_id(Value )}>

<Picker.Item label = "Startimes #90 one day" value = "42" />
 <Picker.Item label = " STARTIMES Basic - #160  - 1 Day " value = "43" />
 <Picker.Item label = "STARTIMES Smart - #200  - 1 Day" value = "44" />
<Picker.Item label = "STARTIMES Nova  #300  - 1 Week " value = "37" />
 <Picker.Item label = "STARTIMES Classic - #320  - 1 Day" value = "45" />
 <Picker.Item label = "STARTIMES Super - #400  - 1 Day" value = "46" />

 
<Picker.Item label = "STARTIMESBasic - #600  - 1 Week" value = "38" />
 <Picker.Item label = "STARTIMES Smart - #700  - 1 Week" value = "39" />
 <Picker.Item label = "STARTIMES Nova - #900  - 1 Month" value = "14" />
<Picker.Item label = "STARTIMES Classic - #1200 - 1 Week" value = "40" />
 <Picker.Item label = "STARTIMES Super - #1,500  - 1 Week" value = "41" />
 <Picker.Item label = "STAR TIMES Basic - #1,700  - 1 Month" value = "12" />

<Picker.Item label = "STARTIMES Smart - #2,200  - 1 Month -" value = "13" />
 <Picker.Item label = "STARTIME Classic - #2,500  - 1 Month" value = "11" />
 <Picker.Item label = "STARTIME Super - #4,200  - 1 Month" value = "15" />
<Picker.Item label = "GOTV smallie monthly=#920" value = "34" />
 <Picker.Item label = "GOTV jinja=#1930 " value = "16" />
 <Picker.Item label = "GOTV jolli #2800" value = "17" />



 <Picker.Item label = "Gotv Max=#4200" value = "2" />
 <Picker.Item label = "Gotv supa=#5500 " value = "47" />
 <Picker.Item label = "Gotv smallie=#7100 YEARLY" value = "38" />



 <Picker.Item label = "Dstv Padi =#2160" value = "20" />
 <Picker.Item label = "DStv Yanga + ExtraView - #5850 " value = "27" />
 <Picker.Item label = "DStv Asia - ???7100" value = "23" />

 <Picker.Item label = "DStv Confam + ExtraView " value = "26" />
 <Picker.Item label = "DStv Compact - #9000 " value = "7" />
 <Picker.Item label = "DStv Compact + Extra View - ???11950" value = "29" />





 
<Picker.Item label = "DStv Compact Plus - ???12152" value = "8" />
 <Picker.Item label = "DStv Premium Asia - ???209000" value = "31" />
 <Picker.Item label = " DStv Premium - ???21050" value = "9" />
<Picker.Item label = "DStv Premium Asia - ???209000   " value = "25" />
 <Picker.Item label = "DStv Premium + Extra View - ???23982" value = "30" />
 <Picker.Item label = "DStv Premium French - ???29400" value = "24" />

 </Picker>




    <TextInput 
     style={{ color: 'puple',borderWidth:2,borderradius:2,borderColor:'purple' }}
     onChangeText={(val)=>set_iuc(val)} placeholderTextColor="purple"
      underlineColorAndroid="transparent"
        placeholder="IUC NUMBER"

       />

<Button title='Buy' onPress={buy}/>
    </View>








<View style={styles.footer}>
 
<Text>Haykaytelecoms(C)</Text>

</View>
</ScrollView>
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
container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
   
  },
  welcome:{
    alignItems:'center',
  },

Buttons:{
   PaddingTop:38,Top:20,
    backgroundColor: 'purple',
    alignItems: 'center',
Color: 'purple',
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
    width: 66,
    height: 58,
  },
usernameinput:{fontSize:20,
fontWeight:'bold',
color: 'white',},
 

});
