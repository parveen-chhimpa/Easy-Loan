import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../Pages/SplashScreen/SplashScreen';
import SignUpBrowser from '../../Pages/SignUPBrowser/SignUpBrowser';
import BrowserScreen from '../../Pages/BrowserScreen/BrowserScreen';
import SkipContent from '../../Pages/SkipContent/SkipContent';
import EMI_Calculator from '../../Pages/EMI_Calculator/EMI_Calculator';
import BecomePartner from '../../Pages/BecomePartner/BecomePartner';
import BasicProfileDetails from '../../Pages/BasicProfileDetails/BasicProfileDetails';
import CheckList from '../../Pages/CheckList/CheckList';
import Health_Insurence from '../../Pages/CheckList/Health_Insurence/Health_Insurence';
import Life_Insurence from '../../Pages/CheckList/Life_Insurense/Life_Insurence';
import Motor_Insurance from '../../Pages/CheckList/Motor_Insurance/Motor_Insurance';
import PrivateLimited from '../../Pages/CheckList/PrivateLimited/PrivateLimited';
import ReferAndEarn from '../../Pages/ReferAndEarn/ReferAndEarn';
import SkipSupport from '../../Pages/SkipSupport/SkipSupport';
import Terms from '../../Pages/Terms&Conditions/Terms';
import PrivacyPolicy from '../../Pages/PrivacyPolicy/PrivacyPolicy';
import QRScaneer from '../../Pages/QRScaneer/QRScaneer';
import CreditScore from '../../Pages/CreditScore/CreditScore';
import HomeScreen from '../../Pages/HomeScreen/HomeScreen';
import DrowerContent from '../../Pages/DrowerContent/DrowerContent';
import LeadsScreen from '../../Pages/LeadsScreen/LeadsScreen';
import SellAndEarn from '../../Pages/SellAndEarn/SellAndEarn';
import Wallet from '../../Pages/Wallet/Wallet';
import HomeCheckList from '../../Pages/HomeCheckList/HomeCheckList';
import HomeHealth from '../../Pages/HomeCheckList/HomeHealth/HomeHealth';
import HomeMoto from '../../Pages/HomeCheckList/HomeMoto/HomeMoto';
import HomeLife from '../../Pages/HomeCheckList/HomeLife/HomeLife';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function MainNavigation() {
    function BrouseNavigation(){
        return(
            <Drawer.Navigator drawerContent={props=><SkipContent {...props} />}>
              <Drawer.Screen name="Browser" component={BrowserScreen} options={{headerShown:false}} />
            </Drawer.Navigator>
        )
      }
      function DrowerNavigation(){
        return(
            <Drawer.Navigator drawerContent={props=><DrowerContent {...props} />}>
              <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
            </Drawer.Navigator>
        )
      }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Splash_Screen" 
         component={SplashScreen}
         options={{headerShown:false }}
         />
        <Stack.Screen
         name="SignUp" 
         component={SignUpBrowser}
         options={{headerShown:false }}
         />
        <Stack.Screen
         name="Browser" 
         component={BrouseNavigation}
         options={{headerShown:false }}
         />
        <Stack.Screen
         name="EMI" 
         component={EMI_Calculator}
         options={{headerShown:false }}
         />
        <Stack.Screen
         name="Become" 
         component={BecomePartner}
         options={{headerShown:false }}
         />
        <Stack.Screen
         name="Details" 
         component={BasicProfileDetails}
         options={{headerShown:false }}
         />
        <Stack.Screen
         name="CheckList" 
         component={CheckList}
         options={{headerShown:false }}
         />
        <Stack.Screen 
        name="Health" 
        component={Health_Insurence}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Motor" 
        component={Motor_Insurance}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Life" 
        component={Life_Insurence}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Private" 
        component={PrivateLimited}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Refer" 
        component={ReferAndEarn}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Skip_Support" 
        component={SkipSupport}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Terms" 
        component={Terms}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Privacy_Policy" 
        component={PrivacyPolicy}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="QR" 
        component={QRScaneer}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Credit_Score" 
        component={CreditScore}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Home_Screen" 
        component={DrowerNavigation}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Leads_Screen" 
        component={LeadsScreen}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Sell" 
        component={SellAndEarn}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Wallet" 
        component={Wallet}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="HCheckList" 
        component={HomeCheckList}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Healths" 
        component={HomeHealth}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Motors" 
        component={HomeMoto}
        options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Lifes" 
        component={HomeLife}
        options={{headerShown:false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}