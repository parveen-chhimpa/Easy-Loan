import { View, Text, SafeAreaView, Image, ScrollView,Linking } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { DrowerLogo, DrowerLogo1, DrowerLogo2, DrowerLogo5, DrowerLogo6, DrowerLogo7, DrowerLogo8, UserLogo } from '../../Utils/Image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function SkipContent(props) {

  const Whatsapp = ()=>{
    let msg = "Hi";
  let phoneWithCountryCode = "+919463041347";

  let mobile =
    Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
      Linking.openURL(url)
        .then(data => {
          console.log("WhatsApp Opened");
        })
        .catch(() => {
          alert("Make sure WhatsApp installed on your device");
        });
    } else {
      alert("Please insert message to send");
    }
  } else {
    alert("Please insert mobile no");
  }
};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={{ height: heightToDp('25'), backgroundColor: 'rgb(83,119,215)', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ marginBottom: heightToDp('1') }}>
          <Image source={UserLogo} style={{ height: heightToDp('8'), width: widthToDp('16') }} />
        </View>
        <View style={{ marginBottom: heightToDp('3') }}>
          <TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('2.6') }}>
        <TouchableOpacity onPress={()=>Whatsapp()}>
          <View style={{ borderColor: '#000', height: heightToDp('5'), width: widthToDp('68'), backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: widthToDp('1') }}>
            <View>
              <FontAwesome name='whatsapp' color={'#fff'} size={22} />
            </View>
            <View style={{ marginStart: widthToDp('2') }}>
              <Text style={{ color: '#fff', fontSize: widthToDp('4.5') }}>Join us at Whatsapp</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('4')}}
        onPress={()=>props.navigation.navigate('Become')}
        >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Become Our Partner </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
        onPress={()=>props.navigation.navigate('Details')}
        >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo1} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Apply for Loan</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
         onPress={()=>props.navigation.navigate('CheckList')}
        >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo2} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Checklist</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      onPress={()=>props.navigation.navigate('Refer')}
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo5} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Refer and Earn</Text>
          </View>
        </View>
        </TouchableOpacity>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      onPress={()=>props.navigation.navigate('Skip_Support')}
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo6} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Support</Text>
          </View>
        </View>
        </TouchableOpacity>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      onPress={()=>props.navigation.navigate('Terms')}
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo7} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Terms & Conditions</Text>
          </View>
        </View>
        </TouchableOpacity>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      onPress={()=>props.navigation.navigate('Privacy_Policy')}
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo8} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Privacy Policy</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>props.navigation.navigate('AB')}>
              <View style={{borderWidth:1,height:heightToDp('8'),marginTop:heightToDp('10'),justifyContent:'center'}}>
        <View style={{marginStart:widthToDp('7')}}>
          <Text style={{color:'#000'}}>Developed by Abstract Brains</Text>
        </View>
      </View>
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}