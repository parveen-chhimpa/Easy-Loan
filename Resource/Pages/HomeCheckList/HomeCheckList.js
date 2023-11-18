import { View, Text, SafeAreaView, Image, TouchableOpacity,Linking,Platform} from 'react-native'
import React, { useState } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Share from 'react-native-share';
import { CheckList1, ShareLogo, WhatsappLogo } from '../../Utils/Image'
export default function HomeCheckList(props) {
  const myCustomShare = async () => {
    const shareOptions = {
        message: 'Information',
        
      
    }
    try {
        const ShareResponse = await Share.open(shareOptions);
        console.log(JSON.stringify(ShareResponse));
    } catch (error) {
        console.log('Error => ', error);
    }
};

const Whatsapp = ()=>{
  let msg = "Easy Loan App";

let mobile =
  Platform.OS == "ios" ? msg : "+" + msg;
if (mobile) {
  if (msg) {
    let url = "whatsapp://send?text=" + msg;
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('3') }}>
        <View style={{ marginStart: heightToDp('2') }}>
          <AntDesign name='arrowleft' color={'rgb(93,117,189)'} size={25} onPress={() => props.navigation.navigate('Home_Screen')} />
        </View>
        <View style={{ marginEnd: widthToDp('25') }}>
          <Text style={{ color: 'rgb(93,117,189)', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Document Checklist</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
       
       <TouchableOpacity onPress={()=>props.navigation.navigate('Healths')}>
         <View style={{  height: heightToDp('12'), width: widthToDp('90'), backgroundColor: '#fff', borderRadius: widthToDp('3'), flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <Image source={CheckList1} style={{ height: heightToDp('6'), width: widthToDp('12') }} />
          </View>
          <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('3') }}>
            <Text style={{ color: '#000' }}>Health Insurance</Text>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
              <View>
                <Text style={{ color: '#a9a9a9' }}>Share Checklist</Text>
              </View>
              <TouchableOpacity onPress={()=>Whatsapp()}>
                              <View style={{ marginStart: widthToDp('10') }}>
                <Image source={WhatsappLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>myCustomShare()}>
              <View style={{ marginStart: widthToDp('5') }}>
                <Image source={ShareLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <AntDesign name='right' color={'#000'} size={20} />
          </View>
        </View>
        </TouchableOpacity>

      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('2.5') }}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Motors')}>
                  <View style={{  height: heightToDp('12'), width: widthToDp('90'), backgroundColor: '#fff', borderRadius: widthToDp('3'), flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <Image source={CheckList1} style={{ height: heightToDp('6'), width: widthToDp('12') }} />
          </View>
          <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('3') }}>
            <Text style={{ color: '#000' }}>Motor Insurance</Text>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
              <View>
                <Text style={{ color: '#a9a9a9' }}>Share Checklist</Text>
              </View>
              <TouchableOpacity onPress={()=>Whatsapp()}>
                              <View style={{ marginStart: widthToDp('10') }}>
                <Image source={WhatsappLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>myCustomShare()}>
              <View style={{ marginStart: widthToDp('5') }}>
                <Image source={ShareLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <AntDesign name='right' color={'#000'} size={20} />
          </View>
        </View>
        </TouchableOpacity>

      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('2.5') }}>
       <TouchableOpacity onPress={()=>props.navigation.navigate('Lifes')}>
                <View style={{  height: heightToDp('12'), width: widthToDp('90'), backgroundColor: '#fff', borderRadius: widthToDp('3'), flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <Image source={CheckList1} style={{ height: heightToDp('6'), width: widthToDp('12') }} />
          </View>
          <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('3') }}>
            <Text style={{ color: '#000' }}>Life Insurance</Text>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
           
              <View>
                <Text style={{ color: '#a9a9a9' }}>Share Checklist</Text>
              </View>

              <TouchableOpacity onPress={()=>Whatsapp()}>
                              <View style={{ marginStart: widthToDp('10') }}>
                <Image source={WhatsappLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>myCustomShare()}>
              <View style={{ marginStart: widthToDp('5') }}>
                <Image source={ShareLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <AntDesign name='right' color={'#000'} size={20} />
          </View>
        </View>
       </TouchableOpacity>

      </View>
    <View>
    </View>
    </SafeAreaView>
  )
}