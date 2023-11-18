import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
export default function CreditScore(props) {
const [Name,setName] = useState('');
const [Adhar,setAdhar] = useState('');
const [pan,setPan] = useState('');
const [Mobile,setMobile] = useState('');
const [Email,setEmail] = useState('');
const [City,setCity] = useState('');

const Submit = ()=>{
if(!Name.trim()){
  ToastAndroid.show('Please Enter Your Name',ToastAndroid.SHORT)
}
else if(!Adhar.trim()){
  ToastAndroid.show('Please Enter Adhar No',ToastAndroid.SHORT)
}
else if(!pan.trim()){
  ToastAndroid.show('Please Enter PAN No',ToastAndroid.SHORT)
}
else if(!Mobile.trim()){
  ToastAndroid.show('Please Enter Mobile No',ToastAndroid.SHORT)
}
else if(!Email.trim()){
  ToastAndroid.show('Please Enter Email Id',ToastAndroid.SHORT)
}
else if(!City.trim()){
  ToastAndroid.show('Please Enter City',ToastAndroid.SHORT)
}
else{
  alert('3463456546')
}
}


  return (
<SafeAreaView style={{flex:1}}>
  <View style={{flexDirection:'row',marginTop:heightToDp('3')}}>
    <View style={{marginStart:widthToDp('4')}}>
      <AntDesign name='arrowleft' size={30} color={'rgb(93,117,189)'}  onPress={()=>props.navigation.goBack()}/>
    </View>
    <View style={{justifyContent:'center',marginStart:widthToDp('25')}}>
      <Text style={{color:'rgb(93,117,189)',fontSize:widthToDp('5')}}>Credit Score</Text>
    </View>
  </View>
  <ScrollView>


  <View style={{marginStart:widthToDp('5')}}>
    <View style={{marginTop:heightToDp('4')}}>
      <Text style={{color:'#000'}}>Name</Text>
    </View>
    <View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
      <TextInput 
      placeholder='Enter Name'
      placeholderTextColor={'#000'}
      style={{paddingStart:widthToDp('3'),color:'#000'}}
      value={Name}
      onChangeText={(e)=>setName(e)}
      />
    </View>
    <View style={{marginTop:heightToDp('3')}}>
      <Text style={{color:'#000'}}>Aadhar Card</Text>
    </View>
    <View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
      <TextInput 
      keyboardType='number-pad'
      value={Adhar}
      onChangeText={(e)=>setAdhar(e)}
      placeholder='Enter Aadhar Card No'
      placeholderTextColor={'#000'}
      style={{paddingStart:widthToDp('3'),color:'#000'}}
      />
    </View>
    <View style={{marginTop:heightToDp('3')}}>
      <Text style={{color:'#000'}}>PAN Card</Text>
    </View>
    <View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
      <TextInput 
      value={pan}
      onChangeText={(e)=>setPan(e)}
      placeholder='Enter PAN Card No'
      placeholderTextColor={'#000'}
      style={{paddingStart:widthToDp('3'),color:'#000'}}
      />
    </View>
    <View style={{marginTop:heightToDp('3')}}>
      <Text style={{color:'#000'}}>Mobile No</Text>
    </View>
    <View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
      <TextInput 
      keyboardType='number-pad'
      value={Mobile}
      onChangeText={(e)=>setMobile(e)}
      placeholder='Enter Mobile No'
      placeholderTextColor={'#000'}
      style={{paddingStart:widthToDp('3'),color:'#000'}}
      />
    </View>
    <View style={{marginTop:heightToDp('3')}}>
      <Text style={{color:'#000'}}>Email Id</Text>
    </View>
    <View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
      <TextInput 
      value={Email}
      onChangeText={(e)=>setEmail(e)}
      placeholder='Enter Email Id'
      placeholderTextColor={'#000'}
      style={{paddingStart:widthToDp('3'),color:'#000'}}
      />
    </View>
    <View style={{marginTop:heightToDp('3')}}>
      <Text style={{color:'#000'}}>City</Text>
    </View>
    <View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
      <TextInput 
      value={City}
      onChangeText={(e)=>setCity(e)}
      placeholder='Enter City'
      placeholderTextColor={'#000'}
      style={{paddingStart:widthToDp('3'),color:'#000'}}
      />
    </View>
    <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=>Submit()}>
      <View style={{width:widthToDp('50'),height:heightToDp('5'),justifyContent:'center',alignItems:'center',borderRadius:widthToDp('1'),backgroundColor:'rgb(53,138,247)',marginTop:heightToDp('5')}}>
       <Text style={{color:'#fff',fontSize:widthToDp('5')}}>Submit</Text>
      </View>
    </TouchableOpacity>
    </View>
  </View>
  </ScrollView>
</SafeAreaView>
  )
}