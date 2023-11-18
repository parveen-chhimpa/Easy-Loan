import { View, Text, SafeAreaView, Image, TouchableOpacity,Linking,Platform} from 'react-native'
import React, { useState } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Share from 'react-native-share';
import { CompanyLogo, PartnerLogo, PersonalLogo, PropLogo, ShareLogo, WhatsappLogo } from '../../Utils/Image'
import Filebase from '../../Utils/Filebase';
export default function CheckList(props) {
  const myCustomShare1 = async () => {
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
        url:Filebase.Life
    }
    try {
        const ShareResponse = await Share.open(shareOptions);
        console.log(JSON.stringify(ShareResponse));
    } catch (error) {
        console.log('Error => ', error);
    }
};
  const myCustomShare2 = async () => {
    const shareOptions = {
        message:  `KYC 
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

Current Address proof
Any One of these : Aadhaar Card/Driving License/Passport/Postpaid Phone Bill/Credit Card Bill Bank Statement/Electricity Bill/Rent Agreement
                
Company Registration proof
Any One of these :GST Certificate/Shop and wstablishment act/Food License/Drug License/(CST /RST/Service Tax/VAT Registration)
        `,
        url:Filebase.Life
    }
    try {
        const ShareResponse = await Share.open(shareOptions);
        console.log(JSON.stringify(ShareResponse));
    } catch (error) {
        console.log('Error => ', error);
    }
};
  const myCustomShare3 = async () => {
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

Partner's Current Address proof
Any One of these : Aadhaar Card/Driving License/Passport/Postpaid Phone Bill/Credit Card Bill Bank Statement/Electricity Bill/Rent Agreement
                
Company Registration proof
Any One of these :GST Certificate/Shop and wstablishment act/Food License/Drug License/(CST /RST/Service Tax/VAT Registration)
        `,
        url:Filebase.Life
    }
    try {
        const ShareResponse = await Share.open(shareOptions);
        console.log(JSON.stringify(ShareResponse));
    } catch (error) {
        console.log('Error => ', error);
    }
};
  const myCustomShare4 = async () => {
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
        url:Filebase.Life
    }
    try {
        const ShareResponse = await Share.open(shareOptions);
        console.log(JSON.stringify(ShareResponse));
    } catch (error) {
        console.log('Error => ', error);
    }
};

const Personal = ()=>{
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
const Prop = ()=>{
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

Current Address proof
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
const Partner = ()=>{
  let msg =  `KYC 
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

Partner's Current Address proof
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
const Private = ()=>{
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('3') }}>
        <View style={{ marginStart: heightToDp('2') }}>
          <AntDesign name='arrowleft' color={'rgb(93,117,189)'} size={25} onPress={() => props.navigation.navigate('Browser')} />
        </View>
        <View style={{ marginEnd: widthToDp('25') }}>
          <Text style={{ color: 'rgb(93,117,189)', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Document Checklist</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
       
       <TouchableOpacity onPress={()=>props.navigation.navigate('Health')}>
         <View style={{  height: heightToDp('12'), width: widthToDp('90'), backgroundColor: '#fff', borderRadius: widthToDp('3'), flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <Image source={PersonalLogo} style={{ height: heightToDp('6'), width: widthToDp('12') }} />
          </View>
          <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('3') }}>
            <Text style={{ color: '#000' }}>Personal</Text>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
              <View>
                <Text style={{ color: '#a9a9a9' }}>Share Checklist</Text>
              </View>
              <TouchableOpacity onPress={()=>Personal()}>
                              <View style={{ marginStart: widthToDp('10') }}>
                <Image source={WhatsappLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>myCustomShare1()}>
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
        <TouchableOpacity onPress={()=>props.navigation.navigate('Motor')}>
                  <View style={{  height: heightToDp('12'), width: widthToDp('90'), backgroundColor: '#fff', borderRadius: widthToDp('3'), flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <Image source={PropLogo} style={{ height: heightToDp('6'), width: widthToDp('12') }} />
          </View>
          <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('3') }}>
            <Text style={{ color: '#000' }}>Prop Writer</Text>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
              <View>
                <Text style={{ color: '#a9a9a9' }}>Share Checklist</Text>
              </View>
              <TouchableOpacity onPress={()=>Prop()}>
                              <View style={{ marginStart: widthToDp('10') }}>
                <Image source={WhatsappLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>myCustomShare2()}>
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
       <TouchableOpacity onPress={()=>props.navigation.navigate('Life')}>
                <View style={{  height: heightToDp('12'), width: widthToDp('90'), backgroundColor: '#fff', borderRadius: widthToDp('3'), flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <Image source={PartnerLogo} style={{ height: heightToDp('6'), width: widthToDp('12') }} />
          </View>
          <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('3') }}>
            <Text style={{ color: '#000' }}>Partner Form</Text>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
           
              <View>
                <Text style={{ color: '#a9a9a9' }}>Share Checklist</Text>
              </View>

              <TouchableOpacity onPress={()=>Partner()}>
                              <View style={{ marginStart: widthToDp('10') }}>
                <Image source={WhatsappLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>myCustomShare3()}>
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
       <TouchableOpacity onPress={()=>props.navigation.navigate('Private')}>
                <View style={{  height: heightToDp('12'), width: widthToDp('90'), backgroundColor: '#fff', borderRadius: widthToDp('3'), flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
            <Image source={CompanyLogo} style={{ height: heightToDp('6'), width: widthToDp('12') }} />
          </View>
          <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('3') }}>
            <Text style={{ color: '#000' }}>Private Limited Company</Text>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
           
              <View>
                <Text style={{ color: '#a9a9a9' }}>Share Checklist</Text>
              </View>

              <TouchableOpacity onPress={()=>Private()}>
                              <View style={{ marginStart: widthToDp('10') }}>
                <Image source={WhatsappLogo} style={{ height: heightToDp('3.5'), width: widthToDp('7') }} />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>myCustomShare4()}>
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