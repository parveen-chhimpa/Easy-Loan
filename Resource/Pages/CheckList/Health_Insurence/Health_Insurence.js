import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity,Linking,Platform } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
import { CheckList1, HealthLogo, PersonalLogo } from '../../../Utils/Image'
import Share from 'react-native-share';
import Filebase from '../../../Utils/Filebase'
export default function Health_Insurence(props) {
  const myCustomShare = async () => {
    const shareOptions = {
        message: `KYC 
Adhar Card  : Colored and self-attested
PAN Card     : Colored and self-attested
Passport size photo : Colored
      
Income Proof
Bank statement : Current/savings
Current job Proof : joining/Appointment Letter
Salary slip/Certificate : Last 3 Months
      
Existing loans
Document:Sanction Letter & Loan Repayment Schedule

Current Address proof
Any One of these : Aadhaar Card/Driving License/Passport/Postpaid Phone Bill/Credit Card Bill Bank Statement/Electricity Bill/Rent Agreement
                `,
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
  let msg = `KYC 
Adhar Card  : Colored and self-attested
PAN Card     : Colored and self-attested
Passport size photo : Colored
      
Income Proof
Bank statement : Current/savings
Current job Proof : joining/Appointment Letter
Salary slip/Certificate : Last 3 Months
      
Existing loans
Document:Sanction Letter & Loan Repayment Schedule

Current Address proof
Any One of these : Aadhaar Card/Driving License/Passport/Postpaid Phone Bill/Credit Card Bill Bank Statement/Electricity Bill/Rent Agreement
                  `;
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
        <View style={{ justifyContent: 'center', marginStart: widthToDp('22') }}>
          <Text style={{ color: 'rgb(132,164,225)', fontSize: widthToDp('4.2'), fontWeight: 'bold' }}>Personal CheckList</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
        <Image source={PersonalLogo} style={{ height: heightToDp('10'), width: widthToDp('20') }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: widthToDp('90'), height: heightToDp('56'), marginTop: heightToDp('5'), borderRadius: widthToDp('3'), backgroundColor: '#fff' }}>
          <ScrollView>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>KYC</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}> Adhar Card  : Colored and self-attested</Text>
                <Text style={{ color: '#000' }}> PAN Card     : Colored and self-attested</Text>
                <Text style={{ color: '#000' }}> Passport size photo : Colored</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Income Proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}> Bank statement : Current/savings</Text>
                <Text style={{ color: '#000' }}> Current job Proof : joining/Appointment Letter</Text>
                <Text style={{ color: '#000' }}> Salary slip/Certificate : Last 3 Months</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Existing loans</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5'),flexDirection:'row'}}>
                <Text style={{ color: '#000' }}> Document:</Text>
                <Text style={{ color: '#000' }}> Sanction Letter & Loan Repayment{'\n'} Schedule</Text>
              </View>
            </View>
            <View style={{marginBottom:heightToDp('4')}}>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Current Address proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5'),flexDirection:'row' }}>
                <Text style={{ color: '#000' }}> Any One of these :</Text>
                <Text style={{ color: '#000' }}> Aadhaar Card/Driving {'\n'}License/Passport/Postpaid{'\n'}Phone Bill/Credit Card Bill{'\n'}Bank Statement/Electricity{'\n'}Bill/Rent Agreement</Text>
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