import { View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import {InviteLogo, ReferLogo} from '../../Utils/Image'
export default function ReferAndEarn(props) {
  return (
<SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <StatusBar backgroundColor={'#fff'}
    barStyle={'dark-content'}
    />
    <ScrollView>


<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightToDp('3')}}>
            <View style={{marginEnd:widthToDp('20')}}>
              <AntDesign name='arrowleft' color={'rgb(83,119,215)'} size={25} onPress={()=>props.navigation.goBack()}/>
            </View>
            <View style={{marginEnd:widthToDp('28')}}>
              <Text style={{color:'rgb(83,119,215)',fontSize:widthToDp('5')}}>Refer and Earn</Text>
            </View>
    </View>  
    <View style={{alignItems:'center',marginTop:heightToDp('3')}}>
        <Image source={ReferLogo} style={{height:heightToDp('15'),width:widthToDp('90'),borderRadius:widthToDp('2')}}/>
    </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightToDp('1')}}>
        </View>

        <View style={{marginTop:heightToDp('5'),marginStart:widthToDp('7')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4.2')}}>Share you referral code and earn more</Text>
        </View>
        <View style={{alignItems:'center',marginTop:heightToDp('2')}}>
           <TouchableOpacity>
                       <View style={{width:widthToDp('88'),height:heightToDp('5'),marginTop:heightToDp('3'),backgroundColor:'rgb(40,191,54)',flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:widthToDp('2')}}>
            <View>
               <AntDesign name='sharealt' color={'#fff'} size={20} />
            </View>
            <View style={{marginStart:widthToDp('2')}}>
                <Text style={{color:'#fff',fontSize:widthToDp('5')}}>SHARE</Text>
            </View>
           </View>
           </TouchableOpacity>
           <TouchableOpacity>
                       <View style={{width:widthToDp('88'),height:heightToDp('5'),marginTop:heightToDp('3'),backgroundColor: 'rgb(83,119,215)',flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:widthToDp('2')}}>
            <View style={{marginStart:widthToDp('2')}}>
                <Text style={{color:'#fff',fontSize:widthToDp('5')}}>REGISTRATION</Text>
            </View>
           </View>
           </TouchableOpacity>
           <View style={{width:widthToDp('88'),height:heightToDp('25'),marginTop:heightToDp('5'),backgroundColor:'rgb(66,101,205)',flexDirection:'row',borderRadius:widthToDp('3')}}>
              <View style={{marginTop:heightToDp('5'),marginStart:widthToDp('8')}}>
                <Image source={InviteLogo}  style={{height:heightToDp('6'),width:widthToDp('15')}} />
              </View>
              <View style={{marginTop:heightToDp('3.5'),marginStart:widthToDp('5')}}>
                <Text style={{fontSize:widthToDp('5'),color:'#fff'}}>Invite friends to{'\n'}EasyLoan and earn ₹100{'\n'}on their first customer{'\n'}sale</Text>
                <TouchableOpacity>
                                    <View style={{width:widthToDp('40'),height:heightToDp('6'),backgroundColor:'#fff',flexDirection:'row',justifyContent:'center',marginTop:heightToDp('2'),borderRadius:widthToDp('2')}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'#000'}}>Invite friends</Text>   
                    </View>
                     <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
                        <AntDesign  name='arrowright'  color={'#000'} size={23}  />
                     </View>
                </View>
                </TouchableOpacity>
              </View>
           </View>
           <View style={{flexDirection:'row',marginTop:heightToDp('4'),marginBottom:heightToDp('4')}}>
                <View>
                <Text style={{color:'#000'}}>Read referral</Text>
                </View>
                 <View style={{marginStart:widthToDp('1')}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Terms')}>
                        <Text style={{color:'rgb(101,119,169)'}}>Terms and Conditions</Text>
                    </TouchableOpacity>
                 </View>
              </View>
        </View>
        </ScrollView>
</SafeAreaView>
  )
}