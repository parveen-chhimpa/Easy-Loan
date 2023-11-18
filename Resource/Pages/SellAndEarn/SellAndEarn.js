import { View, Text, SafeAreaView,TouchableOpacity, Image, ScrollView  } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AU, AxisBank, IB, IDFC, Jupiter, Kotak, SellImg, SellLogo1, SellLogo2, SellLogo3, SellLogo4, SellLogo5, SellLogo6, SellLogo7, SellLogo8, SellLogo9 } from '../../Utils/Image'
export default function SellAndEarn(props) {
const [Select,setSelect] = useState(0);
const [applied,setApplied] = useState(0);
const [change,setChange] = useState(0);

  const Brands = ()=>{
   setApplied(0);
   setSelect(0);
  }

  const Insurance = () =>{
setApplied(1);
setSelect(1);
  }

  const Fresh = ()=>{
    setChange(0);
  }
  const Renewal = ()=>{
    setChange(1);
  }
  return (
<>
    <SafeAreaView style={{flex:1}}>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightToDp('2')}}>
            <View style={{marginEnd:widthToDp('20')}}>
              <AntDesign name='arrowleft' color={'#000'} size={25} onPress={()=>props.navigation.goBack()}/>
            </View>
            <View style={{marginEnd:widthToDp('28')}}>
              <Text style={{color:'rgb(83,119,215)',fontSize:widthToDp('5')}}>Sell and Earn</Text>
            </View>
    </View>  
    <View style={{flexDirection:'row',marginTop:heightToDp('2'),marginStart:widthToDp('6')}}>
   <TouchableOpacity onPress={()=>Brands()}>
       <View style={{height:heightToDp('6'),width:widthToDp('44'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:Select==0?'#000':'#a9a9a9',fontSize:widthToDp('5')}}>Insurance</Text>
    </View> 
   </TouchableOpacity>
<TouchableOpacity onPress={()=>Insurance()}>
      <View style={{marginStart:widthToDp('0.5'),height:heightToDp('6'),width:widthToDp('44'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
       <Text style={{color:Select==1?'#000':'#a9a9a9',fontSize:widthToDp('5')}}>Brands</Text>
    </View>
</TouchableOpacity>

    </View>
    {
      applied==0?(
        <View style={{flex:1}}>
          <View style={{alignItems:'center'}}>
       <View style={{width:widthToDp('90'),height:heightToDp('23'),marginTop:heightToDp('2'),borderRadius:widthToDp('3'),backgroundColor:'#fff'}}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Image source={SellImg} style={{height:heightToDp('22')}}/>
        </View>
       </View>
          </View>
        <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('5')}}>
          <Text style={{color:'#000'}}>INSURANCE PRODUCTS</Text>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginEnd:widthToDp('2'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <View>
            <Image source={SellLogo1} style={{height:heightToDp('5'),width:widthToDp('8')}}/>
            </View>
            <Text style={{color:'#000'}}>Car</Text>
          </View>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginEnd:widthToDp('2'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <View>
            <Image source={SellLogo2} style={{height:heightToDp('5'),width:widthToDp('8')}}/>
            </View>
            <Text style={{color:'#000'}}>2 Wheeler</Text>
          </View>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginEnd:widthToDp('2'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <View>
            <Image source={SellLogo3} style={{height:heightToDp('5'),width:widthToDp('8')}}/>
            </View>
            <Text style={{color:'#000'}}>Health</Text>
          </View>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginEnd:widthToDp('2'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <View>
            <Image source={SellLogo4} style={{height:heightToDp('5'),width:widthToDp('8')}}/>
            </View>
            <Text style={{color:'#000'}}>Life/Team</Text>
          </View>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginEnd:widthToDp('2'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <View>
            <Image source={SellLogo5} style={{height:heightToDp('5'),width:widthToDp('8')}}/>
            </View>
            <Text style={{color:'#000'}}>Cam. Vehicle</Text>
          </View>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginEnd:widthToDp('1'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <View>
            <Image source={SellLogo6} style={{height:heightToDp('5'),width:widthToDp('8')}}/>
            </View>
            <Text style={{color:'#000'}}>Investment</Text>
          </View>

          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginStart:widthToDp('2'),backgroundColor:'rgb(223,231,244)'}}>
                     <View>
            <Image source={SellLogo7} style={{height:heightToDp('6'),width:widthToDp('24')}}/>
            </View>
            <Text style={{color:'#000',textAlign:'center'}}>Group</Text>
          </View>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginStart:widthToDp('2'),backgroundColor:'rgb(223,231,244)'}}>
          <View>
            <Image source={SellLogo8} style={{height:heightToDp('6'),width:widthToDp('24')}}/>
            </View>
            <Text style={{color:'#000',textAlign:'center'}}>Investment</Text>
          </View>
          <View style={{width:widthToDp('28'),height:heightToDp('12'),marginTop:heightToDp('2'),marginStart:widthToDp('2'),backgroundColor:'rgb(223,231,244)'}}>
          <View>
            <Image source={SellLogo9} style={{height:heightToDp('6'),width:widthToDp('23')}}/>
            </View>
            <Text style={{color:'#000',textAlign:'center'}}>Investment</Text>
          </View>
        </View>
        </View>
      ):(
        <ScrollView>


        <View style={{flex:1}}>
          <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('5')}}>
            <Text style={{color:'#a9a9a9'}}>CREDIT CARD</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <View style={{width:widthToDp('90'),height:heightToDp('15'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('4')}}>
            <Image source={IB} style={{height:heightToDp('4'),width:widthToDp('20')}}/>
           </View>
           <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>Induslnd Credit Card</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}>₹3000</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9',paddingTop:heightToDp('0.5')}}>Sell and Earn Induslnd Credit{'\n'}Card</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>

          <View style={{width:widthToDp('90'),height:heightToDp('15'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('4')}}>
            <Image source={IDFC} style={{height:heightToDp('4'),width:widthToDp('20')}}/>
           </View>
           <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>IDFC FIRST Bank Credit Card</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}> upto ₹3000</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9',paddingTop:heightToDp('0.5')}}>Lifetime Free credit card by{'\n'}IDFC First Bank</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>
          <View style={{width:widthToDp('90'),height:heightToDp('15'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('4')}}>
            <Image source={AU} style={{height:heightToDp('4'),width:widthToDp('20')}}/>
           </View>
           <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>AU Small Finance Bank Credit{'\n'}Card</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}>₹1800</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9'}}>Sell and Earn AU Small{'\n'}Finance Bank Credit Card</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>
          <View style={{width:widthToDp('90'),height:heightToDp('12'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('10'),marginEnd:widthToDp('3')}}>
            <Image source={AxisBank} style={{height:heightToDp('4'),width:widthToDp('10')}}/>
           </View>
           <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>Axis Credit Card</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}>₹2250</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9'}}>Sell and Earn Axis Credit Card</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>
          </View>
          <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('5')}}>
            <Text style={{color:'#a9a9a9'}}>SEVING ACCOUNT</Text>
          </View>

        </View>
        <View style={{alignItems:'center'}}>
          <View style={{width:widthToDp('90'),height:heightToDp('15'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('4')}}>
            <Image source={Kotak} style={{height:heightToDp('4'),width:widthToDp('20')}}/>
           </View>
           <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>Kotak 811 Savings Account</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}>₹310</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9',paddingTop:heightToDp('0.5')}}>This is for Kotak 811 Savings{'\n'}Account</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>

          <View style={{width:widthToDp('90'),height:heightToDp('15'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('4')}}>
            <Image source={Jupiter} style={{height:heightToDp('4'),width:widthToDp('20')}}/>
           </View>
           <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>Jupiter Money Account</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}> ₹600</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9',paddingTop:heightToDp('0.5')}}>For account opening and 1st{'\n'}debit card transaction of ₹500{'\n'}within 15 days</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>
          <View style={{width:widthToDp('90'),height:heightToDp('15'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('4')}}>
            <Image source={AU} style={{height:heightToDp('4'),width:widthToDp('20')}}/>
           </View>
           <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>Yes Bank Saving Account</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}>₹350</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9'}}>For account opening and first{'\n'}deposit</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>
          <View style={{width:widthToDp('90'),height:heightToDp('15'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('4')}}>
            <Image source={AU} style={{height:heightToDp('4'),width:widthToDp('20')}}/>
           </View>
           <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>AU savings bank account</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}>₹350</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9'}}>For account opening and{'\n'}funding of ₹1000 fro 30 days</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>
          <View style={{width:widthToDp('90'),height:heightToDp('12'),marginTop:heightToDp('2'),borderRadius:widthToDp('2'),backgroundColor:'#fff',flexDirection:'row'}}>
           <View style={{marginTop:heightToDp('3'),marginStart:widthToDp('10'),marginEnd:widthToDp('3')}}>
            <Image source={AxisBank} style={{height:heightToDp('4'),width:widthToDp('10')}}/>
           </View>
           <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('2')}}>
            <Text style={{color:'#a9a9a9'}}>Axis Credit Card</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000'}}>Sell and earn</Text>
              <Text style={{color:'rgb(76,202,58)',paddingStart:widthToDp('2')}}>₹2250</Text>
            </View>
            <View>
              <Text style={{color:'#a9a9a9'}}>Sell and Earn Axis Credit Card</Text>
            </View>
           </View>
           <View style={{marginStart:widthToDp('4'),justifyContent:'center',marginBottom:heightToDp('1')}}>
            <AntDesign  name='right'  size={30} color={'rgb(69,92,160)'}/>
           </View>
          </View>
          </View>
        </ScrollView>
      )
    }
    </SafeAreaView>
    </>
  )
}