import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const GridCategory = ({data}) => {
  const renderGridCategories = ({item, index}) => {
    return (
      <View style={{height: 100, width: 80, backgroundColor: '#FCECFA',margin:"2%",borderRadius:10}}>
        <Image
          style={{height: 90, width: 90,alignSelf:"center"}}
          source={require('../assets/diet.png')}
        />
        <Text style={{top:20,color:"#5c1083",fontSize:16,fontWeight:"600"}}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={{flex:1,marginTop:10}}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{width: 20, height: 20}}></View>
        )}
        data={data}
        numColumns={4}
        scrollEnabled={false}
        renderItem={renderGridCategories}
        ListFooterComponent={()=><View style={{marginBottom:40}}></View>}
      />
    </View>
  );
};

export default GridCategory;
