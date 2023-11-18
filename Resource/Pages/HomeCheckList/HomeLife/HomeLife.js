import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity,Linking,Platform } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
import { CheckList1, HealthLogo, LifeLogo } from '../../../Utils/Image'
import Share from 'react-native-share';
import Filebase from '../../../Utils/Filebase'

export default function HomeLife(props) {
    const myCustomShare = async () => {
        const shareOptions = {
            message: 'Information',
           url:Filebase.Life
          
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
          <Text style={{ color: 'rgb(132,164,225)', fontSize: widthToDp('4.2'), fontWeight: 'bold' }}>Life Insurance CheckList</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
        <Image source={LifeLogo} style={{ height: heightToDp('10'), width: widthToDp('20') }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: widthToDp('90'), height: heightToDp('56'), marginTop: heightToDp('5'), borderRadius: widthToDp('3'), backgroundColor: '#fff' }}>
          <ScrollView>
            <View>
              <View style={{ marginTop: heightToDp('1'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Details</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000'}}>- Mother name</Text>
                <Text style={{ color: '#000'}}>- Marital status</Text>
                <Text style={{ color: '#000'}}>- Annual income</Text>
                <Text style={{ color: '#000'}}>- Company name</Text>
                <Text style={{ color: '#000'}}>- Office address</Text>
                <Text style={{ color: '#000'}}>- Designation</Text>
                <Text style={{ color: '#000'}}>- Nminee Name</Text>
                <Text style={{ color: '#000' }}>- Nminee Dob</Text>
                <Text style={{ color: '#000' }}>- Nminee Relation with Insured</Text>
                <Text style={{ color: '#000' }}>- Height</Text>
                <Text style={{ color: '#000' }}>- Width</Text>
                <Text style={{ color: '#000' }}>- Education</Text>
                <Text style={{ color: '#000' }}>- Place of birth</Text>
                <Text style={{ color: '#000' }}>- Any medical history</Text>
                <Text style={{ color: '#000' }}>- Any family medical history</Text>
                <Text style={{ color: '#000' }}>- Any existing Insurance cover</Text>
                <Text style={{ color: '#000' }}>- Smoking</Text>
                <Text style={{ color: '#000' }}>- Drinking</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>KYC</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Aadhar Card (colored)</Text>
                <Text style={{ color: '#000' }}>- PAN Card (colored)</Text>
                <Text style={{ color: '#000' }}>- Passport</Text>
                <Text style={{ color: '#000' }}>- Driving License</Text>
                <Text style={{ color: '#000' }}>- Any other ID card</Text>
                <Text style={{ color: '#000' }}>- Photo</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Age Proof (if not available in KYC) </Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Birth Certificate</Text>
                <Text style={{ color: '#000' }}>- Matriculation Certificate</Text>
                <Text style={{ color: '#000' }}>- Any other Age proof</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Address proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Aadhar Card(colored)</Text>
                <Text style={{ color: '#000' }}>- Passport</Text>
                <Text style={{ color: '#000' }}>- Utility Bill</Text>
                <Text style={{ color: '#000' }}>- Stamped Rental Agreement</Text>
              </View>
            </View>
            <View style={{marginBottom:heightToDp('4')}}>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Income Proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- 3 month salary slip</Text>
                <Text style={{ color: '#000' }}>- 6 month Bank statement</Text>
                <Text style={{ color: '#000' }}>- Last 3year ITR</Text>
                <Text style={{ color: '#000' }}>- Form 16</Text>
              </View>
            </View>
            <View style={{marginBottom:heightToDp('4')}}>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Pre-Existing Disease</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Medical Reports and prescriptions</Text>
              </View>
            </View>
            <View style={{marginBottom:heightToDp('4')}}>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Existing Policy</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
                <Text style={{ color: '#000' }}>- Policy Document</Text>
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