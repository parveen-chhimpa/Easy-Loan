import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar, StyleSheet, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react'
import {  SignUpBrowserLogo1, SignUpBrowserLogo2, SignUpBrowserLogo3 } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Swiper from 'react-native-swiper'
import { BottomSheet } from 'react-native-btr';
import { Formik } from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function SignUpBrowser(props) {
  const [visible, setVisible] = useState(false);
  const [Open,setOpen] = useState(false)
  const [email,setEmail] = useState('');
  const [VerifyCode,setVerifyCode] = useState('')
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  
  const OTP = ()=>{
    setOpen(!Open);
  }

  const Continue = ()=>{
   if(!email.trim()){
    ToastAndroid.show('Enter Email Id',ToastAndroid.SHORT);
   }
   else{
    setOpen(!Open);
   }
  }
  const Verify = ()=>{
   if(!VerifyCode.trim()){
    ToastAndroid.show('Enter OTP',ToastAndroid.SHORT);
   }
   else{
    props.navigation.replace('Details');
   }
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#000' }}>
        <Swiper horizontal={true} style={{ marginTop: heightToDp('30') }}>
          <View style={{ height: heightToDp('10'), alignItems: 'center' }}>
            <Image source={SignUpBrowserLogo1} style={{ height: heightToDp('23'), width: widthToDp('50') }} />
          </View>
          <View style={{ height: heightToDp('10'), alignItems: 'center' }}>
            <Image source={SignUpBrowserLogo2} style={{ height: heightToDp('23'), width: widthToDp('50') }} />
          </View>
          <View style={{ height: heightToDp('10'), alignItems: 'center' }}>
            <Image source={SignUpBrowserLogo3} style={{ height: heightToDp('23'), width: widthToDp('50') }} />
          </View>
        </Swiper>
        <View style={{ marginBottom: heightToDp('15') }}>
          <Text style={{ color: '#fff', fontSize: widthToDp('5'), textAlign: 'center' }}>We Have all loan solutions for you.</Text>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Easy loan Professional loan brokerWe have all{'\n'}loan services according to you need.</Text>
        </View>

        <View style={{ flexDirection: 'row',marginBottom:heightToDp('4') }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Browser')}>
            <View style={{ height: heightToDp('6'), width: widthToDp('40'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('3') }}>
              <Text style={{ color: '#000', fontSize: widthToDp('5'), fontWeight: 'bold' }}>Skip</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleBottomNavigationView()} >
            <View style={{ height: heightToDp('6'), width: widthToDp('40'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('8'), borderRadius: widthToDp('3') }}>
              <Text style={{ color: '#000', fontSize: widthToDp('5'), fontWeight: 'bold' }}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <BottomSheet
            visible={visible}
            onBackButtonPress={toggleBottomNavigationView}
          >
            <View style={{ backgroundColor: '#fff', height: heightToDp('25'), borderTopEndRadius: widthToDp('6'), borderTopStartRadius: widthToDp('6'), alignItems: 'center' }}>
              <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
                <Text style={{ color: '#000' }}>Verify your Email Id</Text>
              </View>
              <View style={{ borderWidth: 1, width: widthToDp('88'), height: heightToDp('6'), borderRadius: widthToDp('1'), borderColor: 'rgb(89,115,192)', marginTop: heightToDp('2'), flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginStart: widthToDp('3') }}>
                <Fontisto name="email" size={20} color={'#000'} />
                </View>
                <View style={{ marginStart: widthToDp('5'),width:widthToDp('65') }}>
                  <TextInput placeholder='Enter Email Id'
                    placeholderTextColor={'#a9a9a9'}
                    value={email}
                    onChangeText={(email)=>setEmail(email)}
                    style={{ fontSize: widthToDp('4'), color: '#000' }} />
                </View>
                <View>
                <BottomSheet  
          visible={Open}
          onBackButtonPress={OTP}>
<View style={{backgroundColor:'#fff',height:heightToDp('30'),borderTopEndRadius:widthToDp('6'),borderTopStartRadius:widthToDp('6')}}>
 <View style={{alignItems:'center',marginTop:heightToDp('2')}}>
  <Text style={{color:'#000',fontSize:widthToDp('4.5')}}>Detecting OTP</Text>
 </View>
 <View style={{alignItems:'center',marginTop:heightToDp('3')}}>
  <Text style={{color:'#a9a9a9'}}>We have Sent a OTP on your email</Text>
 </View>
 <View style={{alignItems:'center'}}>
   <View style={{borderWidth:1,width:widthToDp('40'),height:heightToDp('6'),marginTop:heightToDp('2')}}>
  <TextInput style={{color:'#000'}}
  value={VerifyCode}
  onChangeText={(e)=>setVerifyCode(e)}
  keyboardType={'number-pad'}
  />
 </View>
 <View style={{marginTop:heightToDp('1')}}>
  <Text style={{color:'#000'}}>Resend OTP</Text>
 </View>
 <TouchableOpacity onPress={()=>Verify()}>
   <View style={{marginTop:heightToDp('2'),width:widthToDp('60'),height:heightToDp('4'),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(53,138,247)',borderRadius:widthToDp('2')}}>
  <Text style={{color:'#fff'}}>Verify Code</Text>
 </View>
 </TouchableOpacity>

 </View>

</View>
          </BottomSheet >
                </View>

              </View>
              <TouchableOpacity onPress={()=>Continue()}>
              <View style={{marginTop:heightToDp('4'),width:widthToDp('60'),height:heightToDp('4'),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(53,138,247)',borderRadius:widthToDp('2')}}>
                <Text style={{color:'#fff'}}>Continue</Text>
              </View>
              </TouchableOpacity>

            </View>
          </BottomSheet>


        </View>
      </SafeAreaView>
    </>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});