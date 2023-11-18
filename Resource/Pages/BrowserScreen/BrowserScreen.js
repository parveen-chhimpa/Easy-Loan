import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Swiper from 'react-native-swiper'
import { AutoLoan, BrouseLogo1, BrouseLogo10, BusnessLoan,  CarLoan, DoctorLoan, EducationLoan, First, Four, HomeLoan, LapLoan, MSMELoan, Scaneer, Second, SplashLogo, StartUpLoan, Three } from '../../Utils/Image'
export default function BrowserScreen(props) {

  const OpenDetails = () => {
    props.navigation.navigate('Details')
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(255,255,255)' }}>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('2') }}>
              <AntDesign name='menuunfold' color={'#000'} size={25} onPress={() => props.navigation.openDrawer()} />
            </View>
            <View style={{ marginStart: widthToDp('7'), marginTop: heightToDp('1.5') }}>
             <Image source={SplashLogo} style={{height:heightToDp('8'),width:widthToDp('60')}} />
            </View>
          </View>
          <View style={{alignItems:'center'}}>
          <View style={{ borderWidth: 1, width: widthToDp('80'), height: heightToDp('18'), marginTop: heightToDp('3'), borderRadius: widthToDp('2'), backgroundColor: 'rgb(253,253,253)', flexDirection: 'row',justifyContent:'center'}}>
            <Swiper autoplay
            autoplayTimeout={5}
            >
            <View style={{flexDirection:'row'}}>
            <View style={{marginTop:heightToDp('0.3')}}>
              <Image source={First} style={{ height: heightToDp('20'), width: widthToDp('80') }} />
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{ marginTop: heightToDp('0.2') }}>
              <Image source={Second} style={{ height: heightToDp('20'), width: widthToDp('80') }} />
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={{ marginTop: heightToDp('0.2') }}>
              <Image source={Three} style={{ height: heightToDp('18'), width: widthToDp('70') }} />
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={{ marginTop: heightToDp('0.2') }}>
              <Image source={Four} style={{ height: heightToDp('19'), width: widthToDp('78') }} />
            </View>
            </View>
            </Swiper>

          </View>
          </View>
          <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('4') }}>
            <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Our Loan Services</Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: heightToDp('2.5') }}>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={BrouseLogo1} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Personal Loan</Text>
                  <Text style={{ textAlign: 'center' }}>Best Offer</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('6') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={CarLoan} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('1') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Car Loan</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('6') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={EducationLoan} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Education Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={BrouseLogo1} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Home Loan</Text>

                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={BusnessLoan} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3'), textAlign: 'center' }}>Businees Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('2') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={LapLoan} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3'), textAlign: 'center' }}>Lap Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={CarLoan} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('1') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3'), textAlign: 'center' }}>Vehicle Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={BusnessLoan} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>MSME Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={StartUpLoan} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Startup Loan</Text>

                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={AutoLoan} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Auto Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={BrouseLogo10} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Two Wheelar</Text>
                  <Text style={{ color: '#000', fontSize: widthToDp('3'), textAlign: 'center' }}>Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={CarLoan} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('1') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Used Car</Text>
                  <Text style={{ color: '#000', fontSize: widthToDp('3'), textAlign: 'center' }}>Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={BrouseLogo10} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Agriculture Limit</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={DoctorLoan} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Unsecured Doctor</Text>
                  <Text style={{ color: '#000', fontSize: widthToDp('3'), textAlign: 'center' }}>Loan</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OpenDetails()}>
              <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={BrouseLogo10} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                </View>
                <View style={{ marginTop: heightToDp('2') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Machinery Loan</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>
          {/* <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('4') }}>
            <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Other Links</Text>
          </View> */}
          {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: heightToDp('2.5') }}>
            <View style={{ marginStart: widthToDp('8') }}>
              <View style={{ alignItems: 'center' }}>
                <Image source={BrouseLogo11} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
              </View>
              <View style={{ marginTop: heightToDp('2') }}>
                <Text style={{ color: '#000', fontSize: widthToDp('3'), textAlign: 'center' }}>Refer and Earn</Text>
              </View>
            </View>
          </View> */}
        </ScrollView>
      </SafeAreaView>
      <View style={{ flexDirection: 'row', height: heightToDp('9'), backgroundColor: '#fff', borderWidth: 1, borderColor: '#ffd700' }}>
        <View style={{ alignItems: 'center', marginStart: heightToDp('1.5'), justifyContent: 'center' }}>
          <View style={{ justifyContent: 'center' }}>
            <Entypo name='home' color={'#000'} size={22} />
          </View>
          <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Home</Text>
        </View>
        <View style={{ alignItems: 'center', marginStart: heightToDp('2'), justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('EMI')}>
            <View style={{ alignItems:'center' }}>
            <AntDesign name='calculator' color={'#000'} size={22} />
          </View>
          <View>
          <Text style={{ color: '#000', fontSize: widthToDp('3') }}>EMI Calculator</Text>
          </View>
          </TouchableOpacity>

          
        </View>

        <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('QR')}>
            <Image source={Scaneer} style={{ height: 80, width: 80, bottom: 25 }} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginStart: heightToDp('1.5'), justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Credit_Score')}>
                      <View style={{ justifyContent: 'center',alignItems:'center' }}>
            <MaterialIcons name='speed' color={'#000'} size={22} />
          </View>
          <View>
          <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Credit Score</Text>
          </View>
          </TouchableOpacity>

         
        </View>

        <View style={{ alignItems: 'center', marginStart: heightToDp('3'), justifyContent: 'center' }}>
         <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
                    <View style={{alignItems:'center'}}>
            <FontAwesome5 name='user-alt' color={'#000'} size={22} />
          </View>
          <View>
          <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Login</Text>
          </View>
         </TouchableOpacity>
        </View>

      </View>
    </>

  )
}