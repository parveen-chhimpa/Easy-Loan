import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { SplashLogo } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function PrivacyPolicy(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
            <View style={{flexDirection:'row'}}>
          <View style={{justifyContent:'center',marginStart:widthToDp('3')}}>
            <AntDesign name='arrowleft' color={'#000'} size={40} onPress={()=>props.navigation.goBack()} />
          </View>
          <View style={{ alignItems: 'center' ,marginStart:widthToDp('5')}}>
          <Image source={SplashLogo} style={{ height: heightToDp('13'), width: widthToDp('80') }} />
        </View> 
        </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Privacy Policy</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Bansal Associates. (hereinafter referred to</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>as     “easyloansco.com   or   we/   our  and</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>including www.easyloansco.com and Easy</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Loan mobile app”) understands the privacy</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and confidentiality   of   its  customers who</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>have shared their personal information with</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>us. It’s  our  top  most  priority  to  keep  the</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>information  secure  and  avoid  misuse of</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>customer’s personal details.</Text>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('4') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Please find below the type of  information</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>we may collect from you and it’s usage for</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>the services offered to you via our website</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and  our   business  partners.  This privacy</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>policy  is   applicable   to  our  current  and</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>existing and future customers. By visiting</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>our  website  and  registering  with us, you</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>agree to this privacy policy.</Text>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('4') }}>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', }}>By registering online at Easy Loans or using</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>our mobile app, you allow Easy Loan and its</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>business partners to get in touch with you</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>via phone call, email or sms. The purpose of</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>contacting you is to offer you our services</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>for the product you have chosen, informing</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>you about our new products, tell you about</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>promotional offers running at easyloansco.</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>com, or by its business partners and linked </Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>third parties. Under this policy, you authorize  </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>us to make contact with you for the above</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>mentioned purposes even if your number is</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>registered under DND/DNC/NCPR services.</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>This authorization is valid until your account</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>is deactivated by either you or us.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Personal Information</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Easy  Loan  collects  personal  information </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>from its  customers  including  first name,</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>last name, email address, date of birth,your</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>residence city and mobile number etc. Easy  </Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Loan can also extract information from third</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>parties or public shared profiles which  are</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>public   in   your   social   accounts.  The</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>collected   information   is  stored   at</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Easy Loan only.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Purpose</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Easyloansco.com collects information from  </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>when  you  register  online  with us or need</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>some  information  regarding  our products</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and   services,   visit   our  website.  After</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>registering  with  us  or   sharing  personal</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>details with us, you authorize us to contact </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>you via email,  call  or  sms  and  send you</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>promotional offers.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Use of Information</Text>
                </View>
                <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('3') }}>
                    <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('4.6') }}>Easy Loan need your personal information for the following purposes –</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('6') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, height: heightToDp('1.5'), width: widthToDp('3'), borderRadius: widthToDp('4'), backgroundColor: 'rgb(115,127,141)', marginTop: heightToDp('1') }}>
                            </View>
                            <View style={{ marginStart: widthToDp('4') }}>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5') }}>to reply to your queries being</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>submitted by you</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, height: heightToDp('1.5'), width: widthToDp('3'), borderRadius: widthToDp('4'), backgroundColor: 'rgb(115,127,141)', marginTop: heightToDp('1') }}>
                            </View>
                            <View style={{ marginStart: widthToDp('4') }}>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5') }}>process applications or orders</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>submitted by you</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, height: heightToDp('1.5'), width: widthToDp('3'), borderRadius: widthToDp('4'), backgroundColor: 'rgb(115,127,141)', marginTop: heightToDp('1') }}>
                            </View>
                            <View style={{ marginStart: widthToDp('4') }}>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5') }}>in order to resolve problems with any</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>services provided to you</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, height: heightToDp('1.5'), width: widthToDp('3'), borderRadius: widthToDp('4'), backgroundColor: 'rgb(115,127,141)', marginTop: heightToDp('1') }}>
                            </View>
                            <View style={{ marginStart: widthToDp('4') }}>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5') }}>to send you promotional offers, new</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>products or services available on our</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>website or third parties with whom</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>we have a tie up</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, height: heightToDp('1.5'), width: widthToDp('3'), borderRadius: widthToDp('4'), backgroundColor: 'rgb(115,127,141)', marginTop: heightToDp('1') }}>
                            </View>
                            <View style={{ marginStart: widthToDp('4') }}>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5') }}>manage or achieve our duties with</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>subject to any contract with our</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>business partners</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, height: heightToDp('1.5'), width: widthToDp('3'), borderRadius: widthToDp('4'), backgroundColor: 'rgb(115,127,141)', marginTop: heightToDp('1') }}>
                            </View>
                            <View style={{ marginStart: widthToDp('4') }}>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5') }}>information received from you is</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>combined with the information we </Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}>from third parties in order to make</Text>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5'), paddingTop: heightToDp('1') }}> our website and services better</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, height: heightToDp('1.5'), width: widthToDp('3'), borderRadius: widthToDp('4'), backgroundColor: 'rgb(115,127,141)', marginTop: heightToDp('1') }}>
                            </View>
                            <View style={{ marginStart: widthToDp('4') }}>
                                <Text style={{ color: 'rgb(115,127,141)', fontSize: widthToDp('5') }}>as mentioned in this privacy policy</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Information Disclosure and Sharing</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Easyloansco.com does not sell/ rent or</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>disclose your personal information with</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>anyone as described in this policy. We may</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>share your personal information with our</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>business partners or with another entity in</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>case of   business   merger   or  sale   of</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Easyloansco.com’s   business   part.  We</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>restrict the   collection   and use  of   your </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>personal information. We may disclose</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>your   personal   information    in   a   non-</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>personally identifiable manner that does </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>not reveal your identity. Easyloansco.com</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>does not let  anyone   use   your   account</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>information   and  any   other   personal </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>identifiable information except some </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>specific domestic procedures in order to </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>manage, expand and improve our services. </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Third parties who have tie up with us can </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>contact you and tell you about our</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>services but with a limited access and they</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>are required to maintain the confidentiality </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>of the information as mentioned in the</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>contract   with   us. We   may   share   your </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>personal information to the government </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>agencies under the law in case of</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>identity verification, investigation of cyber</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>incidents, hearings and punishment of</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>offences, or where disclosure of information </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>is required for the legal purpose. We may </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>also need to disclose the information to</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>third parties under the law.Easyloansco.</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>com has various types of products like</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>loans, credit cards offered by lenders and </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>banks. If you apply for these products or</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>services and disclose information to these</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>providers then the use of your information</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>is dependent on their privacy policies for </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>which Easyloansco.com is not responsible.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Tracking via Cookies</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Easyloansco.com and its partners use </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>cookies to analyze trends, manage the</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>website, improve marketing, track user’s</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>preferences around the website and collect</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>demographic figures for overall use.You can</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>control the use of cookies at an individual</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>browser stage by disabling these cookies</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>that may restrict your use of certain features</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>or services on our website.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Log Files</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>We use log files that include internet </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>protocol (IP) address, internet service</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>provider (ISP), browser type, exit or referred</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>pages, date/time stamp, operating system</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>to analyze trends and user’s movements</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>while visiting the website. This information</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>is combined with the other information we </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>collect about you to improve our services,</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>site functionality and marketing.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Email – Opt Out</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>If you don’t want us to send you emails or  </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>other promotion information, write us at</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>info@easyloansco.com. It may take some</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>time to process the request but once you </Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>are unsubscribed by us, you won’t receive</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>emails or any other information from us.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Security</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Easyloansco.com use suitable technical</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and electronic measures to protect the </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>personal information being submitted to</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>us. In today’s time, we cannot guarantee</Text>
                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>complete security as no electronic system</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>is 100% secure but we still use multiple</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>security measures to protect illegal use,</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>damage or loss of any kind of information.</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>You must also maintain the confidentiality</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and security of your login id and password</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and may not share these credentials with</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>any third party.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Connection to Other Websites</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Easyloansco.com provides links to other</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>websites. The privacy of the information</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>provided to other websites is not our</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>liability. Easyloansco.com is not responsible</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>for any loss of personal information through</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>other sources. We can only suggest you to </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>read their privacy policies when you visit</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>their websites.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Third Party Advertising</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Easyloansco.com uses ad agencies or third</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>party advertising companies to provide ads</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>when you are using our website.These</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>companies do not use your personal </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>information except the details about your </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>visit to our website so as to offer ads on </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>our websites as well as on other websites</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>about the services that you may like.</Text>
                    </View>
                </View>
                <View style={{ marginTop: heightToDp('5'), marginStart: widthToDp('8') }}>
                    <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Contact Us with Questions or Concerns or For Grievance Redressal</Text>
                </View>
                <View>
                    <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2'),marginBottom:heightToDp('4') }}>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>If   you   have   grievance   or   complaint,</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>questions,  comments,  concerns   or </Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>feedback in relation to the processing of</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>information or regarding this Privacy and</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Security Policy or any other privacy or</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>security concern, send an e-mail to care</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>@Easyloansco.com. The name and contact</Text>
                        <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>details of the Grievance Officer is</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}