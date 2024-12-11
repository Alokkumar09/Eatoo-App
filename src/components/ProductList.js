import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import { myColors } from '../utils/Themes/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductList = ({data}) => {
  const renderProducts = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: myColors.white,
          height: 230,
          width: 160,
          borderRadius: 10,elevation:3,borderColor:"#E3E3E3",borderWidth:2
        }}>
        <Image
          resizeMode="cover"
          source={{uri: item.image}}
          style={{flex: 0.6,elevation:1,borderTopRightRadius:10,borderTopLeftRadius:10}}
        />
        <View style={{flex:0.4,paddingHorizontal:10,gap:5,paddingTop:5}}>
            <Text style={{fontSize:15,color:myColors.black,fontWeight:"500"}}>{item.name}</Text>
            <Text style={{fontSize:13,color:myColors.black,fontWeight:"400"}} >{item.grams} grams</Text>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <View>
                    <Text style={{color:myColors.black,fontSize:13,textDecorationLine:"line-through"}}>₹ {item.price}</Text>
                    <Text style={{color:"purple",fontSize:16,fontWeight:"600"}}>₹ {item.discounted_price}</Text>
                </View>
                <AntDesign name='plussquareo'  size={23} color={myColors.pink}/>
            </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{marginTop: 10}}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
        horizontal
        data={data}
        renderItem={renderProducts}
      />
    </View>
  );
};

export default ProductList;
