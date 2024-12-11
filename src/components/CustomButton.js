import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius:15
      }}>
      <Text style={{color:"white",fontSize:16,fontWeight:"600"}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
