import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity,Linking,Platform } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
import { CheckList1, HealthLogo, MotoLogo } from '../../../Utils/Image'
import Filebase from '../../../Utils/Filebase'
import Share from 'react-native-share';

export default function HomeMoto(props) {
    const myCustomShare = async () => {
        const shareOptions = {
            message: 'Information',
            url:Filebase.Moto
          
        }
        try {
            const ShareResponse = await Share.open(shareOptions);
            console.log(JSON.stringify(ShareResponse));
        } catch (error) {
            console.log('Error => ', error);
        }
    }
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
<SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(244,245,249)' }}>
      <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
        <View style={{ marginStart: widthToDp('4') }}>
          <AntDesign name='arrowleft' color={'rgb(103,131,205)'} size={25} onPress={()=>props.navigation.goBack()} />
        </View>
        <View style={{ justifyContent: 'center', marginStart: widthToDp('15') }}>
          <Text style={{ color: 'rgb(132,164,225)', fontSize: widthToDp('4.2'), fontWeight: 'bold' }}>Motor Insurance CheckList</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
        <Image source={MotoLogo} style={{ height: heightToDp('10'), width: widthToDp('20') }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: widthToDp('90'), height: heightToDp('40'), marginTop: heightToDp('5'), borderRadius: widthToDp('3'), backgroundColor: '#fff' }}>
          <ScrollView>
            <View>
              <View style={{ marginTop: heightToDp('1'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Registration</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000'}}>- Registration Certificate</Text>
                <Text style={{ color: '#000' }}>- Any other registration document</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Previous year Policy</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000'}}>- Policy document</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>KYC</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000'}}>- Aadhaar card(colored)</Text>
                <Text style={{ color: '#000'}}>- PAN card(colored)</Text>
                <Text style={{ color: '#000'}}>- Passport</Text>
                <Text style={{ color: '#000'}}>- Any other address proof</Text>
              </View>
            </View>

          </ScrollView>
        </View>
        <TouchableOpacity onPress={()=>Whatsapp()}>
                  <View style={{ width: widthToDp('90'), height: heightToDp('5'), marginTop: heightToDp('16'), backgroundColor: 'rgb(39,192,52)', borderRadius: widthToDp('1.5'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ marginEnd: widthToDp('5') }}>
            <FontAwesome name='whatsapp' color={'#fff'} size={20} />
          </View>
          <View>
            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>SHARE ON WHATSAPP</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>myCustomShare()}>
                  <View style={{ width: widthToDp('90'), height: heightToDp('5'), marginTop: heightToDp('4'), backgroundColor: 'rgb(83,119,215)', borderRadius: widthToDp('1.5'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ marginEnd: widthToDp('5') }}>
            <AntDesign name='sharealt' color={'#fff'} size={20} />
          </View>
          <View>
            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>SHARE ON OTHER NETWORKS</Text>
          </View>
        </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}