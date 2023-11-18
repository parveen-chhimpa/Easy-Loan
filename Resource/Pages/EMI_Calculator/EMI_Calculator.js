import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function EMI_Calculator() {
    const [amount, setAmount] = useState("");
    const [interest, setinterest] = useState("");
    const [months, setmonths] = useState("");
    const [emi, setemi] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);
    const [totalPayable, setTotalPayable] = useState(null);
    // console.log(emi, '====>')

    useEffect(() => {
        let a = interest / 1200;
        if (a === 0) {
            setemi("0");
            setTotalInterest("0");
            setTotalPayable("0");
            return;
        }
        if (months === "") {
            setemi("0");
            setTotalInterest("0");
            setTotalPayable("0");
            return;
        }
        let b = Math.pow(1 + a, months);
        let val = (amount * a * b) / (b - 1);
        setemi(Math.round(val));
        setTotalInterest(Math.round(val * months - amount));
        setTotalPayable(Math.round(val * months));
        // console.log(val, a, months);
    }, [amount, interest, months]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: heightToDp('8'), flexDirection: 'row', backgroundColor: 'rgb(1,117,204)', alignItems: 'center' }}>
                <View style={{ marginStart: widthToDp('5') }}>
                    <AntDesign name='menuunfold' size={20} color={'#fff'} />
                </View>
                <View style={{ marginStart: widthToDp('10') }}>
                    <Text style={{ color: '#fff', fontSize: widthToDp('5') }}>Calculator</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: widthToDp('85'), height: heightToDp('17'), marginTop: heightToDp('3'), borderRadius: widthToDp('2'), backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                            <Text style={{ color: '#4169E1', fontSize: widthToDp('4.5') }}>EMI</Text>
                        </View>
                        <View style={{ marginTop: heightToDp('3'), marginEnd: widthToDp('15') }}>
                            <Text style={{ color: '#4169E1', fontSize: widthToDp('5') }}>₹ {emi < 1 ? "0" : emi}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('3') }}>
                        <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('1') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Total Interest</Text>
                            <Text style={{ color: '#4169E1', fontSize: widthToDp('4') }}>₹ {totalInterest}</Text>
                        </View>
                        <View style={{ marginTop: heightToDp('1'), marginEnd: widthToDp('5') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Total Payable</Text>
                            <Text style={{ color: '#4169E1', fontSize: widthToDp('4') }}>₹ {totalPayable}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: widthToDp('85'), marginTop: heightToDp('2'), height: heightToDp('12'), borderRadius: widthToDp('2'), backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ marginStart: widthToDp('3') }}>
                        <Text style={{ color: '#000' }}>Loan Amount(₹)</Text>
                    </View>
                    <View style={{ borderWidth: 0.3, width: widthToDp('35'), height: heightToDp('5.5'), marginEnd: widthToDp('3'), borderRadius: widthToDp('2'), justifyContent: 'center' }}>
                        <TextInput placeholder='Enter Amount'
                            placeholderTextColor={'#000'}
                            style={{ color: '#000' }}
                            returnKeyType="next"
                            keyboardType="numeric"
                            onChange={(text) => setAmount(text.nativeEvent.text)}
                            maxLength={10}
                            value={amount}
                        />

                    </View>
                </View>
                <View style={{ width: widthToDp('85'), marginTop: heightToDp('2'), height: heightToDp('18'), borderRadius: widthToDp('2'), backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ marginStart: widthToDp('3') }}>
                        <Text style={{ fontSize: widthToDp('4'), color: '#000' }}>Loan Rate*</Text>
                        <Text style={{ fontSize: widthToDp('4'), color: '#000' }}>(in %)</Text>
                        <TextInput
                            style={{
                                height: heightToDp('6'),
                                backgroundColor: "white",
                                paddingHorizontal: widthToDp('4'),
                                fontSize: widthToDp('5'),
                                borderWidth: 0.2,
                                borderColor: "#4169E1",
                                marginTop: heightToDp('1'),
                                elevation: 2,
                                borderRadius: widthToDp('2'),
                                width: widthToDp('25'),
                                color: '#000'
                            }}
                            returnKeyType="next"
                            keyboardType="numeric"
                            onChange={(text) => setinterest(text.nativeEvent.text)}
                            maxLength={5}
                            value={interest}
                        />
                    </View>
                    <View style={{ marginEnd: widthToDp('3') }}>
                        <Text style={{ fontSize: widthToDp('4'), color: '#000' }}>Loan Tenure*</Text>
                        <Text style={{ fontSize: widthToDp('4'), color: '#000' }}>(in months)</Text>
                        <TextInput
                            style={{
                                height: heightToDp('6'),
                                backgroundColor: "white",
                                paddingHorizontal: widthToDp('4'),
                                fontSize: widthToDp('5'),
                                borderWidth: 0.2,
                                borderColor: "#4169E1",
                                marginTop: heightToDp('1'),
                                elevation: 2,
                                borderRadius: widthToDp('2'),
                                width: widthToDp('20'),
                                color: '#000'
                            }}
                            returnKeyType="next"
                            keyboardType="numeric"
                            onChange={(text) => setmonths(text.nativeEvent.text)}
                            maxLength={3}
                            value={months}
                        />
                    </View>
                </View>
                <View
          style={{
            flexDirection: "row",
            padding:widthToDp('4'),
            justifyContent: "space-evenly",
          }}
        >
          <View >
            <Text style={{ fontSize:widthToDp('4'), color: "#191970" }}>PRODUCT</Text>
            <Text
              style={{
                paddingBottom:heightToDp('1'),
                fontSize:widthToDp('4'),
                borderBottomWidth:heightToDp('0.2'),
                color: "#191970",
                textAlign: "center",
              }}
            ></Text>
            <Text style={Styles.text1}>Home Loan</Text>
            <Text style={Styles.text1}>Lap Loan</Text>
            <Text style={Styles.text1}>Business Loan</Text>
            <Text style={Styles.text1}>(Unsecured)</Text>
            <Text style={Styles.text1}>Personal Loan</Text>
            <Text style={Styles.text1}>Education Loan</Text>
            <Text style={Styles.text1}>Education Loan</Text>
          </View>
          <View style={{marginStart:widthToDp('6')}}>
            <Text
              style={{ fontSize:widthToDp('4'), color: "#191970", textAlign: "center" }}
            >
              ROI
            </Text>
            <Text
              style={{
                paddingBottom:heightToDp('1'),
                fontSize:widthToDp('4'),
                borderBottomWidth:heightToDp('0.2'),
                color: "#191970",
                textAlign: "center",
              }}
            >
              (% approx)
            </Text>
            <Text style={Styles.text2}>7.50</Text>
            <Text style={Styles.text2}>9.50</Text>
            <Text style={Styles.text2}>12.50</Text>
            <Text style={Styles.text2}></Text>
            <Text style={Styles.text2}>12.50</Text>
            <Text style={Styles.text2}>9.50</Text>
            <Text style={Styles.text2}>12.50</Text>
          </View>
          <View style={{marginStart:widthToDp('6')}}>
            <Text style={{ fontSize:widthToDp('4'), color: "#191970" }}>TENURE</Text>
            <Text
              style={{
                paddingBottom:heightToDp('1'),
                fontSize:widthToDp('4'),
                borderBottomWidth:heightToDp('0.2'),
                color: "#191970",
                textAlign: "center",
              }}
            >
              (Y)
            </Text>
            <Text style={Styles.text3}>15</Text>
            <Text style={Styles.text3}>15</Text>
            <Text style={Styles.text3}>5</Text>
            <Text style={Styles.text3}></Text>
            <Text style={Styles.text3}>5</Text>
            <Text style={Styles.text3}>10</Text>
            <Text style={Styles.text3}>10</Text>
          </View>
        </View>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    text1: {
        textAlign: "left",
        padding:widthToDp('1.4'),
        color:'#000'
      },
      text2: {
        color: "#1E90EF",
        textAlign: "center",
        padding:widthToDp('1.5'),
      },
      text3: {
        color: "#1E90EF",
        textAlign: "center",
        padding:widthToDp('1.5'),
      },
})