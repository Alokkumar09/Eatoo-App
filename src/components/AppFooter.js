import {View, Text, Modal} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from './CustomButton';

const AppFooter = ({onPress, isLocationModal}) => {
  return (
    <Modal
      visible={isLocationModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            gap: 19,
            flex: 0.6,
            backgroundColor: 'white',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 7,
          }}>
          <View style={{alignItems: 'center'}}>
            <MaterialIcons name="pin-drop" size={100} color={'black'} />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
              top: -20,
              marginBlockStart: 10,
            }}>
            Location permission if Off
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
              opacity: 0.8,
            }}>
            Please enable location for better delivery experience
          </Text>
          <CustomButton title={'Continue'} onPress={onPress} />
        </View>
      </View>
    </Modal>
  );
};

export default AppFooter;
