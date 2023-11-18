import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {SplashLogo, SplashLogo2} from '../../Utils/Image'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
export default function SplashScreen(props) {

    useEffect(()=>{
     setTimeout(() => {
        props.navigation.replace('SignUp')
     },2000);
    },[])
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
        <StatusBar backgroundColor={'rgb(83,119,215)'} />
    <View style={{alignItems:'center'}}>
      <Image source={SplashLogo} style={{height:heightToDp('10'),width:widthToDp('70')}} />
    </View>
    </SafeAreaView>
   
  )
}