import { View, Text, SafeAreaView, TextInput, TouchableOpacity,ToastAndroid, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import DateTimePicker from '@react-native-community/datetimepicker';
import {BOPAction} from '../../Action/bopAction'
import { useDispatch } from 'react-redux'
export default function BecomePartner(props) {
const [Name,setName] = useState('')
const [Mobile,setMobile] = useState('')
const [Email,setEmail] = useState('')
const [City,setCity] = useState('')
const [Occupation,setOccupation] = useState('')
const [date,setDate] = useState(new Date());
const [show,setShow] = useState(false);
const [mode,setMode] = useState('date');
const [text,setText] = useState('DD/MM/YYYY');

const dispatch = useDispatch();


const Submit = ()=>{
  if(!Name.trim()){
    ToastAndroid.show('Please Enter Your Name',ToastAndroid.SHORT);
  }
  else if(!Mobile.trim()){
    ToastAndroid.show('Enter Mobile No',ToastAndroid.SHORT);
  }
  else if(!Email.trim()){
    ToastAndroid.show('Enter Email Id',ToastAndroid.SHORT);
  }
  else if(!City.trim()){
    ToastAndroid.show('Enter City',ToastAndroid.SHORT);
  }
  else if(!Occupation.trim()){
    ToastAndroid.show('Please Enter Occupation',ToastAndroid.SHORT);
  }
  else{
    var data = new FormData();
    data.append('name',Name);
    data.append('mobile',Mobile);
    data.append('email',Email);
    data.append('city',City);
    data.append('occupation',Occupation);
    data.append('dob',date);
    dispatch(BOPAction.BecomeAction(data)).then(async data =>{
      if(data.message){
        ToastAndroid.show(data.massege,ToastAndroid.SHORT);
      }
      else{
        ToastAndroid.show('Error',ToastAndroid.SHORT)
      }
    })
  }
}

const onChange = (event, selectedDate) => {

  const currentDate = selectedDate || date;
  setShow(false);
  setDate(currentDate);

  let tempdate = new Date(currentDate);
  let fDate = tempdate.getDate()+'/'+ (tempdate.getMonth()+1)+'/'+tempdate.getFullYear();
  setText(fDate);
};

const showMode = () => {
  setShow(true);
};
  return (
<SafeAreaView style={{flex:1}}>
    <View style={{flexDirection:'row',marginTop:heightToDp('5')}}>
       <View style={{marginStart:widthToDp('5')}}>
        <AntDesign name='arrowleft' size={30}  color={'rgb(93,117,189)'}  onPress={()=>props.navigation.goBack()} />
       </View>
       <View style={{justifyContent:'center',marginStart:widthToDp('16')}}>
        <Text style={{color:'rgb(93,117,189)',fontSize:widthToDp('5')}}>Become Our Partner</Text>
       </View>
    </View>
  <ScrollView>


    <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('5')}}>
<View>
  <Text style={{color:'#000'}}>Name</Text>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
<View>
    <TextInput 
    value={Name}
    onChangeText={(e)=>setName(e)}
    placeholder='Enter Name'
    placeholderTextColor={'#000'}
    style={{color:'#000'}}
    />
</View>
</View>
<View style={{marginTop:heightToDp('3')}}>
  <Text style={{color:'#000'}}>Mobile No</Text>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
<View>
    <TextInput 
    keyboardType='number-pad'
        value={Mobile}
        maxLength={10}
        onChangeText={(e)=>setMobile(e)}
    placeholder='Enter Mobile No'
    placeholderTextColor={'#000'}
    style={{color:'#000'}}
    />
</View>
</View>
<View style={{marginTop:heightToDp('3')}}>
  <Text style={{color:'#000'}}>Email Id</Text>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
<View>
    <TextInput 
        value={Email}
        onChangeText={(e)=>setEmail(e)}
    placeholder='Enter Email Id'
    placeholderTextColor={'#000'}
    style={{color:'#000'}}
    />
</View>
</View>
<View style={{marginTop:heightToDp('3')}}>
  <Text style={{color:'#000'}}>City</Text>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
<View>
    <TextInput 
        value={City}
        onChangeText={(e)=>setCity(e)}
    placeholder='Enter City'
    placeholderTextColor={'#000'}
    style={{color:'#000'}}
    />
</View>
</View>
<View style={{marginTop:heightToDp('3')}}>
  <Text style={{color:'#000'}}>Current Occupation</Text>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1')}}>
<View>
    <TextInput 
        value={Occupation}
        onChangeText={(e)=>setOccupation(e)}
    placeholder='Enter Current Occupation'
    placeholderTextColor={'#000'}
    style={{color:'#000'}}
    />
</View>
</View>
<View style={{marginTop:heightToDp('3')}}>
  <Text style={{color:'#000'}}>DOB</Text>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('5.5'),marginTop:heightToDp('1'),backgroundColor:'rgb(227,231,242)',borderRadius:widthToDp('1'),flexDirection:'row',justifyContent:'space-between'}}>
<View style={{justifyContent:'center'}}>
  <Text style={{color:'#000',paddingStart:widthToDp('3')}}>{text}</Text>
</View>
<View style={{justifyContent:'center',marginEnd:widthToDp('3')}}>
  <TouchableOpacity onPress={()=>showMode()}>
    <AntDesign name='calendar' color={'#000'} size={20} />
  </TouchableOpacity>
  
</View>

{show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="calendar"
              onChange={onChange}
            />
          )}
</View>
<View style={{alignItems:'center'}}>
  <TouchableOpacity onPress={()=>Submit()}>
    <View style={{width:widthToDp('70'),height:heightToDp('5'),marginTop:heightToDp('5'),backgroundColor:'rgb(66,101,205)',justifyContent:'center',alignItems:'center',borderRadius:widthToDp('2')}}>
     <Text style={{color:'#fff',fontSize:widthToDp('5')}}>Submit</Text>
</View>
</TouchableOpacity>
</View>
    </View>
    </ScrollView>
</SafeAreaView>
  )
}