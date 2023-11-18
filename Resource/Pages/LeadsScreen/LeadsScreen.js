import { View, Text, SafeAreaView,TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function LeadsScreen(props) {
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
              <Text style={{color:'rgb(83,119,215)',fontSize:widthToDp('5')}}>Manage Leads</Text>
            </View>
    </View>  
    <View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('6')}}>
   <TouchableOpacity onPress={()=>Brands()}>
       <View style={{height:heightToDp('6'),width:widthToDp('44'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:Select==0?'#000':'#a9a9a9'}}>Brands</Text>
    </View> 
   </TouchableOpacity>
<TouchableOpacity onPress={()=>Insurance()}>
      <View style={{marginStart:widthToDp('0.5'),height:heightToDp('6'),width:widthToDp('44'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
       <Text style={{color:Select==1?'#000':'#a9a9a9'}}>Insurance</Text>
    </View>
</TouchableOpacity>

    </View>
    {
      applied==0?(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <View style={{justifyContent:'center'}}>
<Text style={{color:'#000',fontSize:widthToDp('4.5')}}>No Leads Yet!</Text>
       </View>
       <TouchableOpacity>
       <View style={{height:heightToDp('6'),width:widthToDp('50'),marginTop:heightToDp('5'),borderRadius:widthToDp('2'),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(83,119,215)'}} >
        <Text style={{color:'#fff'}}>CREATE MY FIRST LEAD</Text>
       </View>
       </TouchableOpacity>
        </View>
      ):(
        <View style={{flex:1}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>Fresh()}>
                      <View style={{borderWidth:1,marginTop:heightToDp('3'),marginStart:widthToDp('6'),width:widthToDp('20'),height:heightToDp('4.5'),justifyContent:'center',alignItems:'center',backgroundColor:change==0?'#000':'#fff',borderRadius:widthToDp('10'),borderColor:'#a9a9a9'}}>
            <Text style={{color:change==0?'#fff':'#a9a9a9'}}>Fresh</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Renewal()}>
                      <View style={{borderWidth:1,marginTop:heightToDp('3'),marginStart:widthToDp('6'),width:widthToDp('25'),height:heightToDp('4.5'),justifyContent:'center',alignItems:'center',borderRadius:widthToDp('10'),backgroundColor:change==1?'#000':'#fff',borderColor:'#a9a9a9'}}>
            <Text style={{color:change==1?'#fff':'#a9a9a9'}}>Renewal</Text>
          </View>
          </TouchableOpacity>
         
        </View>
        {change==0?(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View>
              <Text style={{color:'#000',fontSize:widthToDp('4.5')}}>No Leads yet!</Text>
            </View>
            <TouchableOpacity>
       <View style={{height:heightToDp('6'),width:widthToDp('50'),marginTop:heightToDp('5'),borderRadius:widthToDp('2'),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(83,119,215)'}} >
        <Text style={{color:'#fff'}}>CREATE MY FIRST LEAD</Text>
       </View>
       </TouchableOpacity>
          </View>
        ):(
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Text style={{color:'#000',fontSize:widthToDp('4.5')}}>No Leads yet!</Text>
</View>
        )
      }
        </View>
      )
    }
    </SafeAreaView>
    <View style={{ backgroundColor: '#fff', height: heightToDp('8'), justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginStart: widthToDp('6'), alignItems: 'center', marginTop: heightToDp('1') }}>
                       <TouchableOpacity onPress={()=>props.navigation.navigate('Home_Screen')}>
                         <AntDesign name='home' color={'#000'} size={23} style={{ marginBottom: heightToDp('0.5'),marginStart:widthToDp('1') }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color:'#000', fontSize: widthToDp('3') }}>Home</Text>
                        </View>
                       </TouchableOpacity>

                    </View>
                    <View style={{ marginStart: widthToDp('6'), alignItems: 'center', marginTop: heightToDp('1') }}>
                      <TouchableOpacity>
                        <Feather name='flag' color={ 'rgb(68,102,209)'} size={23} style={{ marginBottom: heightToDp('0.5'),marginStart:widthToDp('3') }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color:  'rgb(68,102,209)', fontSize: widthToDp('3') }}>Leads</Text>
                        </View>
                      </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Sell')}>
                     <View style={{ marginStart: widthToDp('4'), alignItems: 'center', width: widthToDp('14'), borderRadius: widthToDp('10'), height: heightToDp('7'), justifyContent: 'center', bottom: heightToDp('4'), backgroundColor: 'rgb(81,120,215)', left: widthToDp('2') }}>
                        <AntDesign name='plus' color={'#fff'} size={23} style={{ marginBottom: heightToDp('0.5') }} />
                    </View>
                     </TouchableOpacity>
                    <View style={{ marginStart: widthToDp('4'), alignItems: 'center', marginTop: heightToDp('1') }}>
                       <TouchableOpacity>
                                                <Entypo name='graduation-cap' color={'#000'} size={23} style={{ marginBottom: heightToDp('0.5'),marginStart:widthToDp('3') }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('3') }}>Academy</Text>
                        </View>
                       </TouchableOpacity>

                    </View>
                    <View style={{ marginStart: widthToDp('4'), alignItems: 'center', marginEnd: widthToDp('5'), marginTop: heightToDp('1') }}>
                        <TouchableOpacity>
                        <FontAwesome name='file-photo-o' color={'#000'} size={23} style={{ marginBottom: heightToDp('0.5'),marginStart:widthToDp('3') }} />
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