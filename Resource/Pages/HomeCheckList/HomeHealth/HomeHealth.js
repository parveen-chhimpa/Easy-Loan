import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity,Linking,Platform } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
import { CheckList1, HealthLogo } from '../../../Utils/Image'
import Share from 'react-native-share';
import Filebase from '../../../Utils/Filebase'
export default function HomeHealth(props) {
  const myCustomShare = async () => {
    const shareOptions = {
        message: 'Information',
        url:Filebase.Health
      
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
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(244,245,249)' }}>
      <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
        <View style={{ marginStart: widthToDp('4') }}>
          <AntDesign name='arrowleft' color={'rgb(103,131,205)'} size={25} onPress={()=>props.navigation.goBack()} />
        </View>
        <View style={{ justifyContent: 'center', marginStart: widthToDp('15') }}>
          <Text style={{ color: 'rgb(132,164,225)', fontSize: widthToDp('4.2'), fontWeight: 'bold' }}>Health Insurance CheckList</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
        <Image source={HealthLogo} style={{ height: heightToDp('10'), width: widthToDp('20') }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: widthToDp('90'), height: heightToDp('56'), marginTop: heightToDp('5'), borderRadius: widthToDp('3'), backgroundColor: '#fff' }}>
          <ScrollView>
            <View>
              <View style={{ marginTop: heightToDp('1'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Information</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000'}}>- Nminee Name</Text>
                <Text style={{ color: '#000' }}>- Nminee Dob</Text>
                <Text style={{ color: '#000' }}>- Nminee Relation with Insured</Text>
                <Text style={{ color: '#000' }}>- Height</Text>
                <Text style={{ color: '#000' }}>- Width</Text>
                <Text style={{ color: '#000' }}>- Education</Text>
                <Text style={{ color: '#000' }}>- Any medical history</Text>
                <Text style={{ color: '#000' }}>- Any family medical history</Text>
                <Text style={{ color: '#000' }}>- Smoking</Text>
                <Text style={{ color: '#000' }}>- Drinking</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>KYC</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Adhar Card (colored) of proposer</Text>
                <Text style={{ color: '#000' }}>- PAN Card (colored) of proposer</Text>
                <Text style={{ color: '#000' }}>- Any other Age proof</Text>
                <Text style={{ color: '#000' }}>- Any other Address proof</Text>
                <Text style={{ color: '#000' }}>- Any other Id proof</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Banking</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Cancelled cheque</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Pre-Existing Disease</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Medical Reports and prescriptions</Text>
              </View>
            </View>
            <View style={{marginBottom:heightToDp('4')}}>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Portability</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- All previous year policies (max 4yrs)</Text>
              </View>
            </View>

          </ScrollView>
        </View>
        <TouchableOpacity onPress={()=>Whatsapp()}>
                  <View style={{ width: widthToDp('90'), height: heightToDp('5'), marginTop: heightToDp('2'), backgroundColor: 'rgb(39,192,52)', borderRadius: widthToDp('1.5'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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