import { View, Text, SafeAreaView,TextInput,TouchableOpacity, StatusBar, ScrollView,Linking,Platform,Modal,Pressable } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
export default function SkipSupport(props) {
   const [Show,setShow] = useState(false);
   const [Lead,setLead] = useState(false);
   const [Payout,setPayout] = useState(false);
   const [Bank,setBank] = useState(false);
   const [Referral,setReferal] = useState(false);
   const [Scratch,setScratch] = useState(false);
const Email = ()=>{
  Linking.openURL('mailto:info@easyloansco.com')
}

  const Diler =()=>{
    let phoneNumber = +919463041347;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phoneNumber}`;
    }
    else  {
      phoneNumber = `tel:${phoneNumber}`;
    }
    Linking.openURL(phoneNumber);
  }
  return (
<SafeAreaView style={{flex:1}}>
    <StatusBar backgroundColor={'rgb(95,129,226)'} />
<View style={{height:heightToDp('15'),backgroundColor:'rgb(95,129,226)'}}>
  <View style={{flexDirection:'row',marginTop:heightToDp('2')}}>
      <View style={{marginStart:widthToDp('5')}}>
    <AntDesign name='arrowleft' size={25} color={'#fff'} onPress={()=>props.navigation.goBack()} />
  </View>
  <View style={{marginStart:widthToDp('21')}}>
    <Text style={{color:'#fff',fontSize:widthToDp('4.2')}}>EasyLoan Support</Text>
  </View>
  </View>
<View style={{alignItems:'center',marginTop:heightToDp('3')}}>
    <Text style={{color:'#fff',fontSize:widthToDp('6')}}>How can we help?</Text>
   </View>
</View>
<ScrollView>
<View style={{flexDirection:'row',flexWrap:'wrap',marginTop:heightToDp('2')}}>
   <TouchableOpacity onPress={()=>Email()}>
        <View style={{width:widthToDp('42'),height:heightToDp('8'),marginStart:widthToDp('5'),backgroundColor:'#fff',borderRadius:widthToDp('1'),flexDirection:'row'}}>
   <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('3')}}>
   <AntDesign  name='mail' color={'blue'} size={18}/>
   </View>
   <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
    <Text style={{color:'#000'}}>Email Us</Text>
    <View style={{marginTop:heightToDp('0.5')}}>
        <Text style={{color:'#a9a9a9',fontSize:widthToDp('3.5')}}>Wait Time 24-48 hrs</Text>
    </View>
   </View>
    </View>
   </TouchableOpacity>

    <TouchableOpacity onPress={()=>Diler()}>
          <View style={{width:widthToDp('42'),height:heightToDp('8'),marginStart:widthToDp('5'),backgroundColor:'#fff',borderRadius:widthToDp('1'),flexDirection:'row'}}>
   <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('3')}}>
   <Ionicons  name='call-outline' color={'blue'} size={18}/>
   </View>
   <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
    <Text style={{color:'#000'}}>Call us</Text>
    <View style={{marginTop:heightToDp('0.5')}}>
        <Text style={{color:'#a9a9a9',fontSize:widthToDp('3.5')}}>Wait Time 2-3 min</Text>
    </View>
   </View>
    </View>
    </TouchableOpacity>

</View>
<View style={{flexDirection:'row'}}>
    <View style={{marginStart:widthToDp('8'),marginTop:heightToDp('3')}}>
        <AntDesign name='exclamationcircleo' size={16} color={'rgb(121,138,184)' } />
    </View>
    <View style={{justifyContent:'center',marginTop:heightToDp('3'),marginStart:widthToDp('2')}}>
        <Text style={{color:'#a9a9a9',fontSize:widthToDp('3.5')}}>Our Chat/Call is available between 8am and 11pm{'\n'}during working days</Text>
    </View>
</View>
<View style={{marginTop:heightToDp('4'),marginStart:widthToDp('8')}}>
    <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>Frequent Asked Questions</Text>
</View>
<View style={{alignItems:'center'}}>
  <View>
     <TouchableOpacity onPress={()=>setShow(!Show)}>
    <View style={{flexDirection:'row',justifyContent:'space-between',height:heightToDp('7'),marginTop:heightToDp('3'),width:widthToDp('90'),backgroundColor:'#fff',borderRadius:widthToDp('1')}}>
    <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
      <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>Who can Apply for a Loan with us?</Text>
    </View>
    <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
        <AntDesign name='down' size={20} color={'rgb(132,156,204)'} />
    </View>
</View> 
 </TouchableOpacity>
 {
  Show&&<View style={{width:widthToDp('90'),height:heightToDp('15'),backgroundColor:'#fff'}}>
    <Text style={{color:'#000',paddingTop:heightToDp('1'),paddingStart:widthToDp('2')}}>If you are an Indian Citizen between the age of 18 to 75, and either salaried or self-employed, you can apply with us.</Text>
  </View>
 }
  </View>
<View>
   <TouchableOpacity onPress={()=>setLead(!Lead)}>
    <View style={{flexDirection:'row',justifyContent:'space-between',height:heightToDp('7'),marginTop:heightToDp('2'),width:widthToDp('90'),backgroundColor:'#fff',borderRadius:widthToDp('1')}}>
    <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
      <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>How can i apply loan at Easy Loan</Text>
    </View>
    <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
        <AntDesign name='down' size={20} color={'rgb(132,156,204)'} />
    </View>
</View>
 </TouchableOpacity>
 {Lead&&<View style={{width:widthToDp('90'),height:heightToDp('15'),backgroundColor:'#fff'}}>
  <Text style={{color:'#000',paddingTop:heightToDp('1'),paddingStart:widthToDp('2')}}>You can signup at our website and we will get back to you for documents.</Text>
  </View>}
</View>
 
<View>
  <TouchableOpacity onPress={()=>setPayout(!Payout)}>
        <View style={{flexDirection:'row',justifyContent:'space-between',height:heightToDp('7'),marginTop:heightToDp('2'),width:widthToDp('90'),backgroundColor:'#fff',borderRadius:widthToDp('1')}}>
    <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
      <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>Is it mandatory to have a co-applicant?</Text>
    </View>
    <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
        <AntDesign name='down' size={20} color={'rgb(132,156,204)'} />
    </View>
</View>
  </TouchableOpacity>
 {Payout&&
 <View  style={{width:widthToDp('90'),height:heightToDp('15'),backgroundColor:'#fff'}} >
<Text style={{color:'#000',paddingStart:widthToDp('4'),paddingTop:heightToDp('3')}}>It is not mandatory to have a co-applicant but having a co-applicant will increase your eligibility and chances of getting the loan sanctioned.</Text>

 </View>
 }
</View>
  
  <View>
    <TouchableOpacity onPress={()=>setBank(!Bank)}>
            <View style={{flexDirection:'row',justifyContent:'space-between',height:heightToDp('7'),marginTop:heightToDp('2'),width:widthToDp('90'),backgroundColor:'#fff',borderRadius:widthToDp('1')}}>
    <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
      <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>Who will collect my Documents</Text>
    </View>
    <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
        <AntDesign name='down' size={20} color={'rgb(132,156,204)'} />
    </View>
</View> 
    </TouchableOpacity>
{Bank&&
<View style={{width:widthToDp('90'),height:heightToDp('15'),backgroundColor:'#fff'}} >
  <Text style={{color:'#000',paddingStart:widthToDp('4'),paddingTop:heightToDp('2')}}>We will collect your documents by sending our authorized agent or you can fill all details and upload documents on our website also or you can courier your documents.</Text>
</View>
}
  </View>
 
 <View>
  <TouchableOpacity onPress={()=>setReferal(!Referral)}>
     <View style={{flexDirection:'row',justifyContent:'space-between',height:heightToDp('7'),marginTop:heightToDp('2'),width:widthToDp('90'),backgroundColor:'#fff',borderRadius:widthToDp('1')}}>
    <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>If yes, who can be my co-applicant?</Text>
    </View>
    <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
        <AntDesign name='down' size={20} color={'rgb(132,156,204)'} />
    </View>
</View>
  </TouchableOpacity>
   {Referral && 
   <View style={{width:widthToDp('90'),height:heightToDp('15'),backgroundColor:'#fff'}} >

    <Text style={{color:'#000',paddingStart:widthToDp('4'),paddingTop:heightToDp('2')}}>Your parents, spouse or even you major children can be your co-applicant.</Text>
   </View>
   
   }
 </View>
  
  <View>
    <TouchableOpacity onPress={()=>setScratch(!Scratch)}>
           <View style={{flexDirection:'row',justifyContent:'space-between',height:heightToDp('7'),marginTop:heightToDp('2'),width:widthToDp('90'),backgroundColor:'#fff',borderRadius:widthToDp('1'),marginBottom:heightToDp('5')}}>
    <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
      <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>Is my information is secured wirh you?</Text>
    </View>
    <View style={{justifyContent:'center',marginEnd:widthToDp('5')}}>
        <AntDesign name='down' size={20} color={'rgb(132,156,204)'} />
    </View>
</View> 
    </TouchableOpacity>
    {Scratch&&
    <View style={{width:widthToDp('90'),height:heightToDp('15'),backgroundColor:'#fff',marginBottom:heightToDp('3'),bottom:heightToDp('5')}}>
<Text style={{color:'#000',paddingTop:heightToDp('2'),paddingStart:widthToDp('4')}}>Yes, we never share our customers details to any third parrty.</Text>

    </View>
    }
  </View>
  
</View>
</ScrollView>
</SafeAreaView>
  )
}