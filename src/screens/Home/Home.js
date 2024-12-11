import {View, Text, PermissionsAndroid, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWrapper from '../../components/AppWrapper';
import AppHeader from '../../components/AppHeader';
import AppBody from '../../components/AppBody';
import AppFooter from '../../components/AppFooter';
import Geolocation from 'react-native-geolocation-service';

const Home = () => {

  const [userLocation, setUserLocation] = useState([]);
  const [isLocationModal, setIsLocationModal] = useState(false);
  useEffect(() => {
    requestLocationPermission();
  }, []);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Zepto location',
          message:
            'Zepto need access to your location ' +
            'so you can take your delivery.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsLocationModal(false)
        console.log('You can enjoy Zepto');
        getCurrentLocation();
      } else {
        setIsLocationModal(true)
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        if(position){
          setUserLocation({
            latitude:position.coords?.latitude,
            longitude:position.coords?.longitude
          })
        }
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  return (
    <AppWrapper>
      <AppHeader isLocationModal={isLocationModal}/>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <AppBody />
      </ScrollView>
      <AppFooter onPress={requestLocationPermission}  isLocationModal={isLocationModal}/>
    </AppWrapper>
  );
};

export default Home;
