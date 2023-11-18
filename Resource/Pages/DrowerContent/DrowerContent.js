import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { DrowerLogo, DrowerLogo1, DrowerLogo2, DrowerLogo3, DrowerLogo4, DrowerLogo5, DrowerLogo6, DrowerLogo7, DrowerLogo8, UserLogo } from '../../Utils/Image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function DrowerContent(props) {

const AB = ()=>{
  props.navigation.navigate('AB');
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={{ height: heightToDp('25'), backgroundColor: 'rgb(83,119,215)', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ marginBottom: heightToDp('1') }}>
          <Image source={UserLogo} style={{ height: heightToDp('8'), width: widthToDp('16') }} />
        </View>
        <View style={{ marginBottom: heightToDp('0.5') }}>
          <Text style={{ color: '#fff', fontSize: widthToDp('5') }}>XYZ</Text>
        </View>
        <View style={{ marginBottom: heightToDp('3') }}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('MyProfile')}>
            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('4')}}>
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Apply for Loan</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}>
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo1} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>EMI Calculator</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
         onPress={()=>props.navigation.navigate('HCheckList')}
        >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo2} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Checklist</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      onPress={()=>props.navigation.navigate('Refer')}
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo5} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Refer and Earn</Text>
          </View>
        </View>
        </TouchableOpacity>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      
      
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo6} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Support</Text>
          </View>
        </View>
        </TouchableOpacity>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      onPress={()=>props.navigation.navigate('Terms')}
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo7} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Terms & Conditions</Text>
          </View>
        </View>
        </TouchableOpacity>
      <TouchableOpacity style={{height:heightToDp('6'),marginTop:heightToDp('2')}}
      onPress={()=>props.navigation.navigate('Privacy_Policy')}
      >
        <View style={{flexDirection:'row',height:heightToDp('6')}}>
          <View style={{marginStart:widthToDp('6'),justifyContent:'center'}}>
            <Image source={DrowerLogo8} style={{height:heightToDp('4'),width:widthToDp('8')}}/>
          </View>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4')}}>Privacy Policy</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>AB()}>
             <View style={{borderWidth:1,height:heightToDp('8'),marginTop:heightToDp('10'),justifyContent:'center'}}>
        <View style={{marginStart:widthToDp('7')}}>
          <Text style={{color:'#000'}}>Developed by Abstract Brains</Text>
        </View>
      </View> 
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}