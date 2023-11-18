import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity,Linking,Platform } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
import { CheckList1, CompanyLogo, HealthLogo, MotoLogo } from '../../../Utils/Image'
import Filebase from '../../../Utils/Filebase'
import Share from 'react-native-share';

export default function PrivateLimited(props) {
    const myCustomShare = async () => {
        const shareOptions = {
            message: `KYC 
            Adhar Card  : Colored and self-attested
            PAN Card     : Colored and self-attested
            Passport size photo : Colored
                  
            Income Proof
            Bank Statement : Current/Savings
            ITR : Last 2 years
            Profit and Loss Statement : Last 2 years
            Balance Sheet : Last 2 years
                  
            Office Address Proof
            Any One of these :Registration proof/Lease Agreement/Bank Statement Electricity Bill/Telephonic Bill
      
            Existing loans
            Document:Sanction Letter & Loan Repayment Schedule
            
            Partnership Deed
            Document : Partnership Deed

            Director Current Address proof
            Any One of these : Aadhaar Card/Driving License/Passport/Postpaid Phone Bill/Credit Card Bill Bank Statement/Electricity Bill/Rent Agreement
                            
            Company Registration proof
            Any One of these :GST Certificate/Shop and wstablishment act/Food License/Drug License/(CST /RST/Service Tax/VAT Registration)
            `,
            url:Filebase.Health
          
        }
        try {
            const ShareResponse = await Share.open(shareOptions);
            console.log(JSON.stringify(ShareResponse));
        } catch (error) {
            console.log('Error => ', error);
        }
    }
    const Whatsapp = ()=>{
      let msg = `KYC 
Adhar Card  : Colored and self-attested
PAN Card     : Colored and self-attested
Passport size photo : Colored
                  
Income Proof
Bank Statement : Current/Savings
ITR : Last 2 years
Profit and Loss Statement : Last 2 years
Balance Sheet : Last 2 years
                  
Office Address Proof
Any One of these :Registration proof/Lease Agreement/Bank Statement Electricity Bill/Telephonic Bill
      
Existing loans
Document:Sanction Letter & Loan Repayment Schedule
            
Partnership Deed
Document : Partnership Deed
      
Director Current Address proof
Any One of these : Aadhaar Card/Driving License/Passport/Postpaid Phone Bill/Credit Card Bill Bank Statement/Electricity Bill/Rent Agreement
                            
Company Registration proof
Any One of these :GST Certificate/Shop and wstablishment act/Food License/Drug License/(CST /RST/Service Tax/VAT Registration)
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
        <View style={{ justifyContent: 'center', marginStart: widthToDp('20') }}>
          <Text style={{ color: 'rgb(132,164,225)', fontSize: widthToDp('4.2'), fontWeight: 'bold' }}>Private Limited CheckList</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
        <Image source={CompanyLogo} style={{ height: heightToDp('10'), width: widthToDp('20') }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: widthToDp('90'), height: heightToDp('50'), marginTop: heightToDp('5'), borderRadius: widthToDp('3'), backgroundColor: '#fff' }}>
          <ScrollView>
            <View>
              <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>KYC</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
              <Text style={{ color: '#000' }}> Adhar Card  : Colored and self-attested</Text>
                <Text style={{ color: '#000' }}> PAN Card     : Colored and self-attested</Text>
                <Text style={{ color: '#000' }}> Passport size photo : Colored</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Income Proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5') }}>
              <Text style={{ color: '#000' }}> Bank Statement  : Current/Savings</Text>
                <Text style={{ color: '#000' }}> ITR                          : Last 2 years</Text>
                <Text style={{ color: '#000' }}> Profit and Loss Statement : Last 2 years</Text>
                <Text style={{ color: '#000' }}> Balance Sheet      : Last 2 years</Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Office Address Proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5'),flexDirection:'row' }}>
              <Text style={{ color: '#000' }}> Any One of these :</Text>
              <Text style={{ color: '#000' }}> Registration proof/Lease{'\n'}Agreement/Bank Statement{'\n'}Electricity Bill/Telephonic{'\n'} Bill </Text>
              </View>
            </View>
            <View>
              <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Existing Loans</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5'),flexDirection:'row' }}>
              <Text style={{ color: '#000' }}> Document :</Text>
              <Text style={{ color: '#000' }}> Sanction Letter & Loan{'\n'} Repayment Schedule</Text>
              </View>
            </View>
            <View style={{marginBottom:heightToDp('4')}}>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Director Current Address proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5'),flexDirection:'row' }}>
                <Text style={{ color: '#000' }}> Any One of these :</Text>
                <Text style={{ color: '#000' }}> Aadhaar Card/Driving {'\n'}License/Passport/Postpaid{'\n'}Phone Bill/Credit Card Bill{'\n'}Bank Statement/Electricity{'\n'}Bill/Rent Agreement</Text>
              </View>
            </View>
            <View style={{marginBottom:heightToDp('4')}}>
              <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('10') }}>
                <Text style={{ color: 'rgb(67,173,75)' }}>Company Registration proof</Text>
              </View>
              <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('0.5'),flexDirection:'row' }}>
                <Text style={{ color: '#000' }}> Any One of these :</Text>
                <Text style={{ color: '#000' }}> GST Certificate/Shop and{'\n'}wstablishment act/Food{'\n'}License/Drug License/(CST{'\n'}/RST/Service Tax/VAT{'\n'}Registration)</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={()=>Whatsapp()}>
                  <View style={{ width: widthToDp('90'), height: heightToDp('5'), marginTop: heightToDp('6'), backgroundColor: 'rgb(39,192,52)', borderRadius: widthToDp('1.5'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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