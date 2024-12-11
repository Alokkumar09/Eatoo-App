import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import AppWrapper from '../../components/AppWrapper';
import {myColors} from '../../utils/Themes/Colors';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

 


const Login = ({navigation}) => {

  useEffect(()=>{
    GoogleSignin.configure();
  },[])


  // Somewhere in your code
  const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    // this.setState({ userInfo });
    if(userInfo){

      await AsyncStorage.setItem('key',JSON.stringify(userInfo));
      navigation.replace('Home')
    }
    
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('SIGN_IN_CANCELLED');
      
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('IN_PROGRESS');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('PLAY_SERVICES_NOT_AVAILABLE');
      // play services not available or outdated
    } else {
      console.log(error,"Error ,Please try again");
      
      // some other error happened
    }
  }
};
  return (
    <AppWrapper>
      <StatusBar backgroundColor={myColors.themeVolet} />
      <View
        style={{
          flex: 1,
          backgroundColor: myColors.themeVolet,
          paddingHorizontal: 20,
        }}>
        <View style={{flex: 0.5}}>
          <Image
            style={{
              width: responsiveWidth(60),
              height: 100,
              alignSelf: 'center',
            }}
            source={{
              uri: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2021/12/zepto-1640066094.jpg',
            }}
          />
          <Text
            style={{
              color: myColors.white,
              fontSize: responsiveFontSize(1.8),
              textAlign: 'center',
              letterSpacing: 1.4,
              top: -20, //Agar png image use kiye to ye hta denge top:-20
            }}>
            10 Minutes Delivery!
          </Text>
        </View>
        <View style={{flex: 0.5, justifyContent: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: myColors.white,
              padding: 15,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }} onPress={signIn}>
            <AntDesign name="google" color={myColors.themeVolet} size={25} />
            <Text
              style={{
                fontWeight: '700',
                fontSize: responsiveFontSize(1.7),
                color: myColors.black,
              }}>
              Signin with Google
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: myColors.white,
              fontSize: responsiveFontSize(1.4),
              fontWeight: '400',
              textAlign: 'center',
              top: 10,
            }}>
            *I accept the term & privacy policy{' '}
          </Text>
        </View>
      </View>
    </AppWrapper>
  );
};

export default Login;
