import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swiper from 'react-native-swiper'
import Share from 'react-native-share';
import Filebase from '../../Utils/Filebase'
import { AU, AxisBank, AxisImg, CircelLogo, CircelLogo1, CircelLogo2, CircelLogo3, CLogo, DematImg, DLogo, First, Four, IB, IDFC, INLogo, Jupiter, Kotak, LiveLogo, LLogo, Logo, Second, ShareLogo, Three, WhatsappLogo, YesImg } from '../../Utils/Image'
export default function HomeScreen(props) {
    const myCustomShare = async () => {
        const shareOptions = {
            message: 'EASYLOAN ARE BEST FOR YOU',
            url: Filebase.image1
        }

        try {
            const ShareResponse = await Share.open(shareOptions);
            console.log(JSON.stringify(ShareResponse));
        } catch (error) {
            console.log('Error => ', error);
        }
    };
    return (
        <>

            <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(244,245,249)" }}>
                <View style={{ height: heightToDp('9'), backgroundColor: '#fff', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginStart: widthToDp('5') }}>
                            <AntDesign name='menuunfold' color={'rgb(81,120,215)'} size={22} onPress={() => props.navigation.openDrawer()} />
                            <View style={{ marginStart: widthToDp('15') }}>
                                <Text style={{ color: "#000", fontSize: widthToDp('5') }}>Hi</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginEnd: widthToDp('6') }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Wallet')}>
                                <View style={{ marginEnd: widthToDp('8') }}>
                                    <Ionicons name='wallet-outline' color={'rgb(81,120,215)'} size={22} />
                                </View>
                            </TouchableOpacity>

                            <View style={{ marginEnd: widthToDp('8') }}>
                                <FontAwesome name='bell-o' color={'rgb(81,120,215)'} size={22} />
                            </View>
                            <TouchableOpacity>
                                <View>
                                    <AntDesign name='questioncircleo' color={'rgb(81,120,215)'} size={22} onPress={()=>props.navigation.navigate('Skip_Support')} />
                                </View>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', height: heightToDp('30') }}>
                        <Swiper autoplay
                            autoplayTimeout={5}
                        >
                            <View style={{ borderWidth: 1, height: heightToDp('18'), width: widthToDp('85'), marginTop: heightToDp('3'), marginStart: widthToDp('7'), borderRadius: widthToDp('3'),alignItems:'center',justifyContent:'center' }}>
                                <Image source={First} style={{ height: heightToDp('16'), width: widthToDp('83.5'), borderRadius: widthToDp('3') }} />
                            </View>
                            <View style={{ borderWidth: 1, height: heightToDp('18'), width: widthToDp('85'), marginTop: heightToDp('3'), marginStart: widthToDp('7'), borderRadius: widthToDp('3'),alignItems:'center',justifyContent:'center' }}>
                                <Image source={Second} style={{ height: heightToDp('16'), width: widthToDp('82.5'), borderRadius: widthToDp('3') }} />
                            </View>
                            <View style={{ borderWidth: 1, height: heightToDp('18'), width: widthToDp('85'), marginTop: heightToDp('3'), marginStart: widthToDp('7'), marginEnd: widthToDp('7'), borderRadius: widthToDp('3'),alignItems:'center',justifyContent:'center',backgroundColor:'#fff' }}>
                                <Image source={Three} style={{ height: heightToDp('17'), width: widthToDp('70.5'), borderRadius: widthToDp('3') }} />
                            </View>
                            <View style={{ borderWidth: 1, height: heightToDp('18'), width: widthToDp('85'), marginTop: heightToDp('3'), marginStart: widthToDp('7'), marginEnd: widthToDp('7'), borderRadius: widthToDp('3'),alignItems:'center',justifyContent:'center',backgroundColor:'#fff' }}>
                                <Image source={Four} style={{ height: heightToDp('17'), width: widthToDp('70.5'), borderRadius: widthToDp('3') }} />
                            </View>
                        </Swiper>
                    </View>
                    {/* <View style={{ marginStart: widthToDp('7'), marginTop: heightToDp('2') }}>
                        <View style={{ borderWidth: 1, width: widthToDp('85'), height: heightToDp('9') }}>

                        </View>
                    </View> */}

                    <View style={{ alignItems: 'center', marginTop: heightToDp('4') }}>
                        <Text style={{ color: '#000', fontSize: widthToDp('5') }}>Start Selling</Text>
                    </View>
                    <View style={{ flexDirection: "row-reverse", marginStart: widthToDp('4'), marginTop: heightToDp('2') }}>
                        <Text style={{ color: 'rgb(99,127,190)', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>See More</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: heightToDp('15'), width: widthToDp('28'), marginStart: widthToDp('6'), marginTop: heightToDp('1'), borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <View style={{ marginBottom: heightToDp('1'), marginTop: heightToDp('2') }}>
                                    <Image source={Logo} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Insurence</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('15'), width: widthToDp('28'), marginStart: widthToDp('3'), marginTop: heightToDp('1'), borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row', width: widthToDp('21'), height: heightToDp('2.8'), marginBottom: heightToDp('2'), marginEnd: widthToDp('7'), borderBottomEndRadius: widthToDp('4'), borderTopEndRadius: widthToDp('4'), backgroundColor: 'rgb(46,187,56)' }}>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>Upto</Text>
                                    </View>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>₹2250</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <AntDesign name='creditcard' color={'rgb(134,155,220)'} size={20} />
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Text style={{ color: '#000' }}>Credit Card</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('15'), width: widthToDp('28'), marginStart: widthToDp('3'), marginTop: heightToDp('1'), borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row', width: widthToDp('19'), height: heightToDp('2.8'), marginBottom: heightToDp('2'), marginEnd: widthToDp('8'), borderBottomEndRadius: widthToDp('4'), borderTopEndRadius: widthToDp('4'), backgroundColor: 'rgb(46,187,56)' }}>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>upto</Text>
                                    </View>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>₹600</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <MaterialCommunityIcons name='bank' color={'rgb(134,155,220)'} size={20} />
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Text style={{ color: '#000' }}>Savings A/c</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('15'), width: widthToDp('28'), marginStart: widthToDp('3'), marginTop: heightToDp('1'), borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row', width: widthToDp('19'), height: heightToDp('2.8'), marginBottom: heightToDp('2'), marginEnd: widthToDp('8'), borderBottomEndRadius: widthToDp('4'), borderTopEndRadius: widthToDp('4'), backgroundColor: 'rgb(46,187,56)' }}>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>upto</Text>
                                    </View>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>₹500</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Image source={INLogo} style={{ height: heightToDp('4'), width: widthToDp('6') }} />
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Text style={{ color: '#000' }}>Investment</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('15'), width: widthToDp('28'), marginStart: widthToDp('3'), marginTop: heightToDp('1'), borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row', width: widthToDp('19'), height: heightToDp('2.8'), marginBottom: heightToDp('2'), marginEnd: widthToDp('8'), borderBottomEndRadius: widthToDp('4'), borderTopEndRadius: widthToDp('4'), backgroundColor: 'rgb(46,187,56)' }}>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>upto</Text>
                                    </View>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>₹500</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Image source={DLogo} style={{ height: heightToDp('4'), width: widthToDp('6') }} />
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Text style={{ color: '#000' }}>Demat A/c</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('15'), width: widthToDp('28'), marginStart: widthToDp('3'), marginTop: heightToDp('1'), borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row', width: widthToDp('19'), height: heightToDp('2.8'), marginBottom: heightToDp('2'), marginEnd: widthToDp('8'), borderBottomEndRadius: widthToDp('4'), borderTopEndRadius: widthToDp('4'), backgroundColor: 'rgb(46,187,56)' }}>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>upto</Text>
                                    </View>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>₹100</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Image source={LLogo} style={{ height: heightToDp('4'), width: widthToDp('6') }} />
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Text style={{ color: '#000' }}>Loan</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('15'), width: widthToDp('28'), marginStart: widthToDp('3'), marginTop: heightToDp('1'), borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row', width: widthToDp('19'), height: heightToDp('2.8'), marginBottom: heightToDp('2'), marginEnd: widthToDp('8'), borderBottomEndRadius: widthToDp('4'), borderTopEndRadius: widthToDp('4'), backgroundColor: 'rgb(46,187,56)' }}>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>upto</Text>
                                    </View>
                                    <View style={{ marginStart: widthToDp('1.5') }}>
                                        <Text style={{ color: '#fff', fontSize: widthToDp('3.5') }}>₹350</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Image source={CLogo} style={{ height: heightToDp('4'), width: widthToDp('6') }} />
                                </View>
                                <View style={{ marginBottom: heightToDp('1') }}>
                                    <Text style={{ color: '#000' }}>Credit</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', marginBottom: heightToDp('4'), marginEnd: widthToDp('4') }}>
                            <View style={{ height: heightToDp('17'), width: widthToDp('42'), marginStart: widthToDp('6'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={AxisBank} style={{ height: heightToDp('6'), width: widthToDp('15') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Credit Card</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹2250</Text>
                                </View>
                            </View>

                            <View style={{ height: heightToDp('17'), width: widthToDp('30'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={AU} style={{ height: heightToDp('6'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Credit Card</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹1800</Text>
                                </View>
                            </View>

                            <View style={{ height: heightToDp('17'), width: widthToDp('35'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={Jupiter} style={{ height: heightToDp('6'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Seving Account</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹600</Text>
                                </View>
                            </View>

                            <View style={{ height: heightToDp('17'), width: widthToDp('35'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={Kotak} style={{ height: heightToDp('5'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Seving Account</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹310</Text>
                                </View>
                            </View>

                            <View style={{ height: heightToDp('17'), width: widthToDp('28'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={IB} style={{ height: heightToDp('5'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Credit Card</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹2200</Text>
                                </View>
                            </View>

                            <View style={{ height: heightToDp('17'), width: widthToDp('35'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={IDFC} style={{ height: heightToDp('5'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Credit Card</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹1700</Text>
                                </View>
                            </View>

                            <View style={{ height: heightToDp('17'), width: widthToDp('35'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={IDFC} style={{ height: heightToDp('5'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Seving Account</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn Upto ₹350</Text>
                                </View>
                            </View>

                            <View style={{ height: heightToDp('17'), width: widthToDp('35'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={IDFC} style={{ height: heightToDp('5'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Investment</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn Upto ₹200</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('17'), width: widthToDp('35'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={IDFC} style={{ height: heightToDp('5'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Demat A/c</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹400</Text>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('17'), width: widthToDp('35'), marginStart: widthToDp('3'), marginTop: heightToDp('3'), backgroundColor: '#fff', borderRadius: widthToDp('1'), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ marginTop: heightToDp('1.5') }}>
                                    <Image source={IDFC} style={{ height: heightToDp('5'), width: widthToDp('25') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000' }}>Loan</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('0.5') }}>
                                    <Text style={{ color: '#000' }}>Earn ₹100</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: heightToDp('25'), width: widthToDp('88'), backgroundColor: '#fff', flexDirection: 'row', marginBottom: heightToDp('4') }}>
                            <View>
                                <Image source={LiveLogo} style={{ height: heightToDp('24.8'), width: widthToDp('35') }} />
                            </View>
                            <View style={{ marginTop: heightToDp('2') }}>
                                <Text style={{ color: '#000', fontSize: widthToDp('4.3') }}>Want to make 1st sale in 3</Text>
                                <Text style={{ color: '#000', fontSize: widthToDp('4.3'), paddingTop: heightToDp('1') }}>days?</Text>
                                <View style={{ marginTop: heightToDp('1') }}>
                                    <Text style={{ color: '#a9a9a9' }}>Get trained by our experts{'\n'}Who train 10,000+Partners{'\n'}every month and earn up to{'\n'}₹1,00,000/-.</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('1'), height: heightToDp('4'), backgroundColor: 'rgb(83,119,215)', justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('1') }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#fff' }}>LIVE TRAINING</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginStart: widthToDp('5') }}>
                        <Text style={{ color: '#000', fontSize: widthToDp('5') }}>My tools</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
                        <View>
                            <View style={{ height: heightToDp('8'), width: widthToDp('16'), borderRadius: widthToDp('15'), marginStart: widthToDp('6'), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: heightToDp('1.5') }}>
                                <Image source={CircelLogo} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                            </View>
                            <Text style={{ color: '#000', paddingStart: widthToDp('4'), fontSize: widthToDp('3.5') }}>Visiting Card</Text>
                        </View>
                        <View>
                            <View style={{ height: heightToDp('8'), width: widthToDp('16'), borderRadius: widthToDp('15'), marginStart: widthToDp('6'), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: heightToDp('1.5') }}>
                                <Image source={CircelLogo1} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                            </View>
                            <Text style={{ color: '#000', paddingStart: widthToDp('4'), fontSize: widthToDp('3.5') }}>Refer & Earn</Text>
                        </View>
                        <View>
                            <View style={{ height: heightToDp('8'), width: widthToDp('16'), borderRadius: widthToDp('15'), marginStart: widthToDp('6'), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: heightToDp('1.5') }}>
                                <Image source={CircelLogo2} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                            </View>
                            <Text style={{ color: '#000', paddingStart: widthToDp('10'), fontSize: widthToDp('3.5') }}>Diary</Text>
                        </View>
                        <View>
                            <View style={{ height: heightToDp('8'), width: widthToDp('16'), borderRadius: widthToDp('15'), marginStart: widthToDp('6'), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: heightToDp('1.5') }}>
                                <Image source={CircelLogo3} style={{ height: heightToDp('4'), width: widthToDp('10') }} />
                            </View>
                            <Text style={{ color: '#000', paddingStart: widthToDp('8'), fontSize: widthToDp('3.5') }}>Website</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: heightToDp('4'), marginStart: widthToDp('4') }}>
                        <Text style={{ color: '#000', fontSize: widthToDp('5') }}>Trainings</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', marginTop: heightToDp('2'), marginEnd: widthToDp('6') }}>
                            <View style={{ width: widthToDp('80'), height: heightToDp('16'), marginStart: widthToDp('5'), backgroundColor: '#fff', borderRadius: widthToDp('1'), flexDirection: 'row' }}>
                                <View style={{ marginTop: heightToDp('5.5'), marginStart: widthToDp('4') }}>
                                    <Image source={Jupiter} style={{ width: widthToDp('20'), height: heightToDp('4') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('2') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.6') }}>Training-Jupiter Mone...</Text>
                                    <Text style={{ color: '#a9a9a9', paddingTop: heightToDp('1') }}>22 Sep 05:30PM</Text>
                                    <TouchableOpacity style={{ width: widthToDp('23') }}>
                                        <View style={{ width: widthToDp('23'), height: heightToDp('4'), backgroundColor: 'rgb(88,119,215)', justifyContent: 'center', alignItems: 'center', marginTop: heightToDp('1.5'), borderRadius: widthToDp('1') }}>
                                            <Text style={{ color: '#fff' }}>REGISTER</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ width: widthToDp('80'), height: heightToDp('16'), marginStart: widthToDp('5'), backgroundColor: '#fff', borderRadius: widthToDp('1'), flexDirection: 'row' }}>
                                <View style={{ marginTop: heightToDp('5.5'), marginStart: widthToDp('4') }}>
                                    <Image source={Jupiter} style={{ width: widthToDp('20'), height: heightToDp('4') }} />
                                </View>
                                <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('2') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.6') }}>Training-Jupiter Mone...</Text>
                                    <Text style={{ color: '#a9a9a9', paddingTop: heightToDp('1') }}>22 Sep 05:30PM</Text>
                                    <TouchableOpacity style={{ width: widthToDp('23') }}>
                                        <View style={{ width: widthToDp('23'), height: heightToDp('4'), backgroundColor: 'rgb(88,119,215)', justifyContent: 'center', alignItems: 'center', marginTop: heightToDp('1.5'), borderRadius: widthToDp('1') }}>
                                            <Text style={{ color: '#fff' }}>REGISTER</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <View style={{ width: widthToDp('50'), height: heightToDp('16'), marginStart: widthToDp('5'), backgroundColor: '#fff', borderRadius: widthToDp('1'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'rgb(84,115,197)', fontSize: widthToDp('5') }}>See More</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={{ marginStart: widthToDp('25'), marginTop: heightToDp('3') }}>
                        <Text style={{ color: '#000' }}>'s Content</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', marginBottom: heightToDp('4'), marginEnd: widthToDp('8') }}>
                            <View style={{ height: heightToDp('30'), width: widthToDp('32'), marginStart: widthToDp('5'), marginTop: heightToDp('2'), backgroundColor: '#fff' }}>
                                <Image source={AxisImg} style={{ height: heightToDp('16'), width: widthToDp('31.8') }} />
                                <View style={{ marginTop: heightToDp('6.5') }}>
                                    <Text style={{ color: '#000', textAlign: 'center' }}>Axis Bank Cre...</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('3') }}>
                                        <Image source={WhatsappLogo} style={{ height: heightToDp('3'), width: widthToDp('7') }} />
                                    </View>
                                    <View style={{ marginTop: heightToDp('1') }}>
                                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('6') }}>|</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => myCustomShare()}>
                                        <View style={{ marginTop: heightToDp('2'), marginEnd: widthToDp('3') }}>
                                            <Image source={ShareLogo} style={{ height: heightToDp('3'), width: widthToDp('7') }} />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={{ height: heightToDp('30'), width: widthToDp('32'), marginStart: widthToDp('5'), marginTop: heightToDp('2'), backgroundColor: '#fff' }}>
                                <Image source={YesImg} style={{ height: heightToDp('16'), width: widthToDp('31.8') }} />
                                <View style={{ marginTop: heightToDp('1') }}>
                                    <Text style={{ color: '#a9a9a9', textAlign: 'center' }}>SAVING A/C</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('3') }}>
                                    <Text style={{ color: '#000', textAlign: 'center' }}>Yes Bank Sevi...</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('3') }}>
                                        <Image source={WhatsappLogo} style={{ height: heightToDp('3'), width: widthToDp('7') }} />
                                    </View>
                                    <View style={{ marginTop: heightToDp('1') }}>
                                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('6') }}>|</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => myCustomShare()}>
                                        <View style={{ marginTop: heightToDp('2'), marginEnd: widthToDp('3') }}>
                                            <Image source={ShareLogo} style={{ height: heightToDp('3'), width: widthToDp('7') }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ height: heightToDp('30'), width: widthToDp('32'), marginStart: widthToDp('5'), marginTop: heightToDp('2'), backgroundColor: '#fff' }}>
                                <Image source={DematImg} style={{ height: heightToDp('16'), width: widthToDp('31.8') }} />
                                <View style={{ marginTop: heightToDp('1') }}>
                                    <Text style={{ color: '#a9a9a9', textAlign: 'center' }}>DEMATE A/C</Text>
                                </View>
                                <View style={{ marginTop: heightToDp('3') }}>
                                    <Text style={{ color: '#000', textAlign: 'center' }}>Edelweiss De...</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('3') }}>
                                        <Image source={WhatsappLogo} style={{ height: heightToDp('3'), width: widthToDp('7') }} />
                                    </View>
                                    <View style={{ marginTop: heightToDp('1') }}>
                                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('6') }}>|</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => myCustomShare()}>
                                        <View style={{ marginTop: heightToDp('2'), marginEnd: widthToDp('3') }}>
                                            <Image source={ShareLogo} style={{ height: heightToDp('3'), width: widthToDp('7') }} />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <TouchableOpacity>
                                <View style={{ height: heightToDp('30'), width: widthToDp('32'), marginStart: widthToDp('5'), marginTop: heightToDp('2'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'rgb(84,115,197)' }}>See More</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>

            <View style={{ backgroundColor: '#fff', height: heightToDp('8'), justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginStart: widthToDp('6'), alignItems: 'center', marginTop: heightToDp('1') }}>
                        <TouchableOpacity>
                            <AntDesign name='home' color={'rgb(68,102,209)'} size={23} style={{ marginBottom: heightToDp('0.5'), marginStart: widthToDp('1') }} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: 'rgb(68,102,209)', fontSize: widthToDp('3') }}>Home</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginStart: widthToDp('6'), alignItems: 'center', marginTop: heightToDp('1') }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Leads_Screen')}>
                            <Feather name='flag' color={'#000'} size={23} style={{ marginBottom: heightToDp('0.5'), marginStart: widthToDp('3') }} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Leads</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Sell')}>
                        <View style={{ marginStart: widthToDp('4'), alignItems: 'center', width: widthToDp('14'), borderRadius: widthToDp('10'), height: heightToDp('7'), justifyContent: 'center', bottom: heightToDp('4'), backgroundColor: 'rgb(81,120,215)', left: widthToDp('2') }}>
                            <AntDesign name='plus' color={'#fff'} size={23} style={{ marginBottom: heightToDp('0.5') }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginStart: widthToDp('4'), alignItems: 'center', marginTop: heightToDp('1') }}>
                        <TouchableOpacity>
                            <Entypo name='graduation-cap' color={'#000'} size={23} style={{ marginBottom: heightToDp('0.5'), marginStart: widthToDp('3') }} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Academy</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginStart: widthToDp('4'), alignItems: 'center', marginEnd: widthToDp('5'), marginTop: heightToDp('1') }}>
                        <TouchableOpacity>
                            <FontAwesome name='file-photo-o' color={'#000'} size={23} style={{ marginBottom: heightToDp('0.5'), marginStart: widthToDp('3') }} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Content</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </>
    )
}