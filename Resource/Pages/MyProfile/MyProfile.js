import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { ProfileLogo, ProfileLogo1, ProfileLogo2, UserLogo } from '../../Utils/Image'
export default function MyProfile(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('3') }}>
        <View style={{ marginStart: heightToDp('2') }}>
          <AntDesign name='arrowleft' color={'rgb(93,117,189)'} size={25} onPress={()=>props.navigation.navigate('Home_Screen')} />
        </View>
        <View style={{ marginEnd: widthToDp('40') }}>
          <Text style={{ color: 'rgb(93,117,189)', fontSize: widthToDp('4') }}>Your Profile</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ height: heightToDp('22'), marginTop: heightToDp('4'), width: widthToDp('90'), borderRadius: widthToDp('2'), backgroundColor: 'rgb(83,119,215)', alignItems: 'center' }}>
          <View style={{ marginTop: heightToDp('2') }}>
            <Image source={UserLogo} style={{ height: heightToDp('12'), width: widthToDp('24') }} />
          </View>
          <View style={{ marginTop: heightToDp('1') }}>
            <Text style={{ color: '#fff', fontSize: widthToDp('5'),textAlign:'center' }}>XYZ</Text>
            <Text style={{ textAlign: 'center', color: '#fff', paddingTop: heightToDp('0.7') }}>123456789</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <View style={{ width: widthToDp('90'), height: heightToDp('10'), marginTop: heightToDp('2'), borderRadius: widthToDp('2'), backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ marginStart: widthToDp('6') }}>
                <AntDesign name='checkcircle' color={'rgb(79,169,82)'} size={18} />
              </View>
              <View style={{ marginStart: widthToDp('6') }}>
                <Image source={ProfileLogo} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
              </View>
              <View style={{ marginStart: widthToDp('6') }}>
                <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>Basic Profile Information</Text>
              </View>
              <View style={{ marginStart: widthToDp('8') }}>
                <AntDesign name='right' size={20} color={'#000'} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ width: widthToDp('90'), height: heightToDp('10'), marginTop: heightToDp('2'), borderRadius: widthToDp('2'), backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ marginStart: widthToDp('6') }}>
                <AntDesign name='warning' color={'red'} size={18} />
              </View>
              <View style={{ marginStart: widthToDp('6') }}>
                <Image source={ProfileLogo1} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
              </View>
              <View style={{ marginStart: widthToDp('6'), width: widthToDp('47') }}>
                <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>Identity Details</Text>
              </View>
              <View>
                <AntDesign name='right' size={20} color={'#000'} />
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <View style={{ width: widthToDp('90'), height: heightToDp('10'), marginTop: heightToDp('2'), borderRadius: widthToDp('2'), backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ marginStart: widthToDp('6') }}>
                <AntDesign name='warning' color={'red'} size={18} />
              </View>
              <View style={{ marginStart: widthToDp('6') }}>
                <Image source={ProfileLogo2} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
              </View>
              <View style={{ marginStart: widthToDp('6'), width: widthToDp('40') }}>
                <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>Bank Details</Text>
              </View>
              <View style={{ marginStart: widthToDp('8') }}>
                <AntDesign name='right' size={20} color={'#000'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
        <TouchableOpacity>
          <Text style={{color:'#000'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}