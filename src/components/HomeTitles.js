import {View, Text} from 'react-native';
import React from 'react';
import {myColors} from '../utils/Themes/Colors';
import Ionicons from "react-native-vector-icons/Ionicons"

const HomeTitles = ({title, subtitle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        padding: 4,
        justifyContent: 'space-between',
        alignItems:"center"
      }}>
      <Text style={{fontSize: 15, color: myColors.black, fontWeight: '700'}}>
        {title}
      </Text>
      <View style={{flexDirection:"row",alignItems:"center",gap:1}}>
      <Text style={{fontSize: 15, color: myColors.pink, fontWeight: '500'}}>
        {subtitle}
      </Text>
        <Ionicons name="chevron-forward-outline" size={22} color={myColors.pink}/>
      </View>
    </View>
  );
};

export default HomeTitles;
