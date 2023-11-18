import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { SplashLogo } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Terms(props) {
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
          <Text style={{ fontSize: widthToDp('8'), color: 'rgb(58,77,110)' }}>Terms and Conditions</Text>
        </View>
        <View style={{marginBottom:heightToDp('5')}}>
          <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('2') }}>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>Bansal Associates., or the website https:</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>//easyloansco.com/ (together called the</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>"Company") is not a lender and does not</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>provide  loans   on   its   own. Information </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>carried at website is not and should not be</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>construed as an offer or solicitation or</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>invitation to borrow or lend. By submitting</Text>
            <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>your query, you authorize Bansal Associates</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>to share your information with lender(s) </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and consent for such lender(s) to pull your </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>credit information report and call/ message</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>you regarding your query.The outcome of </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>your query or application is solely a matter</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>between you and the lender(s).</Text>
          </View>
          <View style={{ marginStart: widthToDp('8'), marginTop: heightToDp('4') }}>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', }}>The Company is, by no means, assuring as</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>to the correctness of information, FAQ’s,</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>graphics, images, text, and/ or various</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>tools and calculators, including their result,</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>displayed at this website or sent to the user</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>by email  or  otherwise  (together  called </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>“Information”). These   are   purely   for </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>indicative purposes and cannot be relied </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>upon, either individually or together with</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>any other information, by the user in any</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>manner whatsoever. The Company is an</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>independent service provider and is not</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>related to the government or any regulator</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>or any credit information bureau in any way;</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>it does not have the ability to influence the</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>outcome   of   a   case   or   query  or loan </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>application in any manner. The Company is</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>not guaranteeing or assuring a particular</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>or favorable outcome. The Company is not </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>providing any legal or accounting or tax </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>advice. The Company shall have no liability</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>whatsoever to the user for any direct,</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>indirect or consequential losses, damages,</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>costs, charges, expenses or otherwise,</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>which the user or any third party may incur</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>arising out of the use of the Information.</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Any personal information, documents and</Text>
            <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>credit data and/or technical and/or business</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>and/ or commercial and/ or financial data</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>provided by the user can be used by the</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>Company   and   its   agents   without  any</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>obligation to the user and be shared with</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>any regulatory or statutory body on their</Text>
            <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>request. The Company is not liable to delete </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>any such information from its servers or</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>records. The Company gives the option to</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>opt-out from receiving emails or messages</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>at any time. Once you choose to opt-out,</Text>
            <Text style={{ fontSize: widthToDp('4.4'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>you won't receive any further communication</Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>from Bansal Associates. To unsubscribe, </Text>
            <Text style={{ fontSize: widthToDp('4.6'), color: 'rgb(115,127,141)', paddingTop: heightToDp('0.7') }}>click here</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}