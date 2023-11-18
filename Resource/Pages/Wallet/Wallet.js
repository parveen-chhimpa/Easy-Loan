import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Wallet(props) {
  return (
<SafeAreaView style={{flex:1}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightToDp('3')}}>
            <View style={{marginEnd:widthToDp('30')}}>
              <AntDesign name='arrowleft' color={'rgb(83,119,215)'} size={25} onPress={()=>props.navigation.goBack()}/>
            </View>
            <View style={{marginEnd:widthToDp('35')}}>
              <Text style={{color:'rgb(83,119,215)',fontSize:widthToDp('5')}}>Wallet</Text>
            </View>
    </View> 
    <View style={{alignItems:'center'}}>
           <View style={{borderWidth:1,width:widthToDp('90'),height:heightToDp('28'),marginTop:heightToDp('4'),borderColor:'rgb(247,230,220)'}}>
           <View style={{flexDirection:'row'}}>
            <View style={{borderWidth:1,width:widthToDp('45'),height:heightToDp('5'),backgroundColor:'rgb(253,242,233)',borderColor:'rgb(247,230,220)'}}>
              <View style={{justifyContent:'center',alignItems:'center',marginTop:heightToDp('1'),flexDirection:'row'}}>
                <Text style={{color:'#000'}}>Total earnings</Text>
                <Text style={{color:'#000',paddingStart:widthToDp('2')}}>0</Text>
              </View>
            </View>
            <View style={{borderWidth:1,width:widthToDp('45'),height:heightToDp('5'),backgroundColor:'rgb(253,242,233)',borderColor:'rgb(247,230,220)'}}>
               <View style={{alignItems:'center',justifyContent:'center',marginTop:heightToDp('1'),flexDirection:'row'}}>
                <Text style={{color:'#000'}}>Sent to Bank</Text>
                <Text style={{color:'#000',paddingStart:widthToDp('2')}}>0</Text>
               </View>
            </View>
           </View>
           <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('4'),flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <Text style={{color:'#a9a9a9',fontSize:widthToDp('4.5')}}>Wallet balance</Text>
            <Text style={{color:'#000',textAlign:'center',paddingTop:heightToDp('1')}}>0</Text>
            </View>
            <View style={{height:heightToDp('5'),width:widthToDp('35'),marginEnd:widthToDp('2'),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(67,100,203)',borderRadius:widthToDp('2')}}>
                <Text style={{color:'#fff'}}>Complete KYC</Text>
            </View>
           
           </View>
           <View style={{marginTop:heightToDp('8'),alignItems:'center'}}>
            <Text style={{color:'#000'}}>Last transfer date: N/A</Text>
           </View>
    </View> 
    <View style={{width:widthToDp('92'),marginTop:heightToDp('1'),height:heightToDp('9'),borderRadius:widthToDp('2'),flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'}}>
       <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('3')}}>
        <Text style={{color:'#a9a9a9',fontSize:widthToDp('5')}}>Brands</Text>
       </View>
       <View style={{flexDirection:'row',marginEnd:widthToDp('6'),marginTop:heightToDp('1')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5')}}>0</Text>
        <View style={{marginTop:heightToDp('0.5'),marginStart:widthToDp('1')}}>
            <AntDesign name='right'  color={'#000'} size={20} />
        </View>
       </View>
    </View>
    <View style={{width:widthToDp('92'),marginTop:heightToDp('1'),height:heightToDp('9'),borderRadius:widthToDp('2'),flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'}}>
       <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('3')}}>
        <Text style={{color:'#a9a9a9',fontSize:widthToDp('5')}}>Rewards</Text>
       </View>
       <View style={{flexDirection:'row',marginEnd:widthToDp('6'),marginTop:heightToDp('1')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5')}}>0</Text>
        <View style={{marginTop:heightToDp('0.5'),marginStart:widthToDp('1')}}>
            <AntDesign name='right'  color={'#000'} size={20} />
        </View>
       </View>
    </View>
    <View style={{width:widthToDp('92'),marginTop:heightToDp('1'),height:heightToDp('6'),borderRadius:widthToDp('2'),flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'}}>
       <View style={{marginTop:heightToDp('1'),marginStart:widthToDp('3')}}>
        <Text style={{color:'#a9a9a9',fontSize:widthToDp('5')}}>Insurence</Text>
       </View>
       <View style={{justifyContent:'center',marginEnd:widthToDp('2')}}>
        <Text style={{color:'rgb(235,220,151)'}}>Coming soon</Text>
       </View>
    </View>
    <View style={{width:widthToDp('92'),marginTop:heightToDp('1'),height:heightToDp('5'),borderRadius:widthToDp('2'),flexDirection:'row',justifyContent:'space-between',backgroundColor:'rgb(255,205,210)',alignItems:'center'}}>
      <View style={{marginStart:widthToDp('3'),flexDirection:'row'}}>
        <AntDesign name='exclamationcircleo' color={'red'} size={16} />
        <View style={{marginStart:widthToDp('2')}}>
            <Text style={{color:'#000'}}>Complete KYC to transfer</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',marginEnd:widthToDp('4')}}>
        <View>
        <Text style={{color:'rgb(115,130,197)'}}>Complete</Text> 
        </View>
        <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
            <AntDesign name='right' color={'rgb(115,130,197)'}  />
        </View>
      </View>
    </View>
    </View>
    <View style={{marginStart:widthToDp('4'),marginTop:heightToDp('4')}}>
        <Text style={{color:'#a9a9a9'}}>MY LAST 10 TRANSACTION</Text>
    </View>
    <View style={{marginTop:heightToDp('1'),height:heightToDp('15'),alignItems:'center'}}>
        <Text style={{color:'#000'}}>No transactions found.</Text>
    </View>
    <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#a9a9a9'}}>Have a Problem with payment?</Text>
        <TouchableOpacity>
            <Text style={{color:'rgb(65,92,163)'}}> Raise a dispute?</Text>
        </TouchableOpacity>
        </View>
        
    </View>
</SafeAreaView>
  )
}