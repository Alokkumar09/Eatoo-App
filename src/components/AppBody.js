import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {myColors} from '../utils/Themes/Colors';
import HomeTitles from './HomeTitles';
import ProductList from './ProductList';
import { Categories, product } from '../utils/MockData/Groceries';
import GridCategory from './GridCategory';

const AppBody = () => {
  const banners = [
    'https://www.brucira.com/assets/img/work/zepto/zepto-banner.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9BZEajuMpStopcwPjk_jWiWNk5JxqgEf3A&s',
    'https://thearcweb.com/_next/image?url=https%3A%2F%2Fstatic.thearcweb.com%2Fimages%2FPROD%2FPROD-df8dadba-45b2-4689-9244-dbe7d046ab08.jpg%3Fw%3D90%26q%3D75&w=1024&q=100',
  ];
  const renderBanners = ({item, index}) => {
    return (
      <Image
        resizeMode="contain"
        source={{uri: item}}
        style={{
          height: 200,
          width: responsiveWidth(80),
          borderRadius: 10,
          backgroundColor: myColors.themeVolet,
          alignSelf: 'stretch',
        }}
      />
    );
  };
  return (
    <View style={{flex: 1, marginTop: 60, paddingHorizontal: 20}}>
      <View>
      <FlatList
        data={banners}
        pagingEnabled
        ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
        renderItem={renderBanners}
        horizontal
      
      />
      </View>
   
    <HomeTitles title={'Your Go-to items'}  subtitle={"See All"}/>
     <ProductList data={product}/>
    <HomeTitles title={'Explore By Categories'}  subtitle={"See All"}/>
    

    <GridCategory data={Categories}/>
   
    
    </View>
  );
};
export default AppBody;
