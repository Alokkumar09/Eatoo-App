import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {myColors} from '../utils/Themes/Colors';

const AppHeader = isLocationModal => {
  return (
    <View style={{flex: 0.19, gap: 10, paddingTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Ionicons name="person-circle-outline" size={40} />
        <View style={{flex: 0.7}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              fontWeight: '800',
              color: 'purple',
            }}>
            Delivery in 5 minutes
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: '600',
              color: 'grey',
            }}>
            {isLocationModal ? `Gonda Uttar Pradesh ` : 'Not    fetching'}
          </Text>
        </View>
        <MaterialCommunityIcons name="note-edit-outline" size={37} />
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: 'black',
          marginHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          borderRadius: 10,
          gap: 2,
        }}>
        <Ionicons name="search" size={25} />
        <TextInput style={{padding: 12, flex: 1}} placeholder="Search Here" />
      </View>
    </View>
  );
};

export default AppHeader;
