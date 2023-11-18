import { View, Text, SafeAreaView, TextInput, StyleSheet, CheckBox, Image, Switch, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SelectList from 'react-native-dropdown-select-list'
import { Checkbox } from 'react-native-paper';
import { WhatsappLogo } from '../../Utils/Image'
export default function BasicProfileDetails(props) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [City, setCity] = useState('');


  const Submit = ()=>{
    if(!Name.trim()){
      ToastAndroid.show('Please Enter Your Name',ToastAndroid.SHORT);
    }
    else if(!Email.trim()){
      ToastAndroid.show('Please Enter Email Id',ToastAndroid.SHORT);
    }
    else if(!Mobile.trim()){
      ToastAndroid.show('Please Enter Mobile No',ToastAndroid.SHORT);
    }
    else if(!City.trim()){
      ToastAndroid.show('Please Enter City',ToastAndroid.SHORT);
    }
    else{
      props.navigation.navigate('Home_Screen')
    }
  }
  const occupation = [
    { label: 'Bank/Insurance Employee', value: 'Bank/Insurance Employee' },
    { label: 'Business Owner', value: 'Business Owner' },
    { label: 'Customer Suppoprt', value: 'Customer Suppoprt' },
    { label: 'Financial Advison/CA', value: 'Financial Advison/CA' },
    { label: 'Homemaker/Housewife', value: 'Homemaker/Housewife' },
    { label: 'Influrencer', value: 'Influrencer' },
    { label: 'Insurance Agent', value: 'Insurance Agent' },
    { label: 'Property Dealer/Travel Agent', value: 'Property Dealer/Travel Agent' },
    { label: 'Sales & Marketing', value: 'Sales & Marketing' },
    { label: 'Shop Owner/Merchant', value: 'Shop Owner/Merchant' },
    { label: 'Student', value: 'Student' },
    { label: 'Working Professional', value: 'Working Professional' },
    { label: 'Other', value: 'Other' },
  ];
  const Qualification = [
    { label: '10th pass', value: '10th pass' },
    { label: '12th pass', value: '12th pass' },
    { label: 'Diploma', value: 'Diploma' },
    { label: 'Graduate', value: 'Graduate' },
    { label: 'Post Graduate', value: 'Post Graduate' },
  ]

  const ListOfLoan = [
    { lable: 'Personal Loan', value: 'Personal Loan' },
    { lable: 'Car Loan', value: 'Car Loan' },
    { lable: 'Education Loan', value: 'Education Loan' },
    { lable: 'Home Loan', value: 'Home Loan' },
    { lable: 'Business Loan', value: 'Business Loan' },
    { lable: 'Lap Loan', value: 'Lap Loan' },
    { lable: 'Vehicle Loan', value: 'Vehicle Loan' },
    { lable: 'MSME Loan', value: 'MSME Loan' },
    { lable: 'Startup Loan', value: 'Startup Loan' },
    { lable: 'Auto Loan', value: 'Auto Loan' },
    { lable: 'Two Wheelar Loan', value: 'Two Wheelar Loan' },
    { lable: 'Used Car Loan', value: 'Used Car Loan' },
    { lable: 'Agriculture Limit', value: 'Agriculture Limit' },
    { lable: 'Unsecured Doctor Loan', value: 'Unsecured Doctor Loan' },
    { lable: 'Machinery Loan', value: 'Machinery Loan' },

  ]
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
 <SafeAreaView style={{flex:1}}>
<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ justifyContent: 'center', marginEnd: widthToDp('15'), marginTop: heightToDp('2') }}>
          <AntDesign name='arrowleft' color={'rgb(86,109,179)'} size={28} onPress={() =>props.navigation.replace('SignUp')} />
        </View>
        <View style={{ marginTop: heightToDp('2.5'), marginEnd: widthToDp('17') }}>
          <Text style={{ color: 'rgb(80,121,201)', fontSize: widthToDp('4.7') }}>Basic Profile Information</Text>
        </View>
      </View>
      <ScrollView>
      <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
      <View>
          <View style={{ height: heightToDp('5'), width: widthToDp('88'), borderRadius: widthToDp('1'), backgroundColor: '#fff', justifyContent: 'center' }}>
            <TextInput
            value={Name}
            onChangeText={(e)=>setName(e)}
             placeholder='Full Name'
              placeholderTextColor={'#a9a9a9'} 
              style={{ paddingStart: widthToDp('4'), color: '#000' }}
               />
          </View>
          <Text style={{ color: '#a9a9a9' }}>As mentioned on PAN Card</Text>
        </View>
        <View style={{ height: heightToDp('5'), width: widthToDp('88'), borderRadius: widthToDp('1'), backgroundColor: '#fff', justifyContent: 'center', marginTop: heightToDp('3') }}>
          <TextInput 
          value={Email}
          onChangeText={(e)=>setEmail(e)}
          placeholder='Email Id' 
          placeholderTextColor={'#a9a9a9'} 
          style={{ paddingStart: widthToDp('4'), color: '#000' }} 
          />
        </View>
        <View style={{ height: heightToDp('5'), width: widthToDp('88'), borderRadius: widthToDp('1'), backgroundColor: '#fff', justifyContent: 'center', marginTop: heightToDp('3') }}>
          <TextInput 
          value={Mobile}
          onChangeText={(e)=>setMobile(e)}
          placeholder='Mobile No' 
          maxLength={10}
          keyboardType={'numeric'}
          placeholderTextColor={'#a9a9a9'} 
          style={{ paddingStart: widthToDp('4'), color: '#000' }}
           />
        </View>
        <View style={{ width: widthToDp('88'), borderRadius: widthToDp('2'), justifyContent: 'center', marginTop: heightToDp('3') }}>
        </View>
        <View style={{ width: widthToDp('88'), borderRadius: widthToDp('2'), justifyContent: 'center', marginTop: heightToDp('3') }}>
        </View>
        <View style={{ width: widthToDp('88'), borderRadius: widthToDp('1'), justifyContent: 'center', backgroundColor: '#fff', height: heightToDp('5'), marginTop: heightToDp('3') }}>
          <TextInput 
          value={City}
          onChangeText={(e)=>setCity(e)}
          placeholder='City' 
          placeholderTextColor={'#a9a9a9'} 
          style={{ marginStart: widthToDp('3'), color: '#000' }}
           />
        </View>
        <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), marginEnd: widthToDp('40') }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: '#000', fontSize: widthToDp('5') }}>Referral Code?</Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, width: widthToDp('85'), backgroundColor: '#fff', marginTop: heightToDp('1'), height: heightToDp('5.3'), justifyContent: 'center' }}>
          <TextInput placeholder='Referral Code'
            placeholderTextColor={"#000"}
            style={{ color: '#a9a9a9' }}
          />
        </View>
        <View style={{ marginTop: heightToDp('5') }}>
          <Text style={{ color: '#a9a9a9' }}>By submitting,I agree to the EasyLoan</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Terms')}>
              <Text style={{ color: 'rgb(115,134,203)' }}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() =>Submit()}>
          <View style={{ width: widthToDp('80'), height: heightToDp('5'), marginTop: heightToDp('2'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(66,101,205)', borderRadius: widthToDp('4') }}>
            <Text style={{ fontSize: widthToDp('5'), color: '#fff' }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
 </SafeAreaView>
  )
}