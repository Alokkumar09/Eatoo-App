import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProductToMyCart, deleteMyCartItem, RemoveProductFromMyCart} from '../../redux/reducer/MyCartSlice';
import { useNavigation } from '@react-navigation/native';
import { decreaseQty, increaseQty } from '../../redux/reducer/MyProductSlice';

const ProductCart = () => {
  const navigation=useNavigation();
  // const getTotal = () => {
  //   let total = 0;
  //   mycart.map(item => {
  //     total = total + item.qty * item.price;
  //   });
  //   console.log( "Total ",total);
  //   return total;
    
  // };
  const getTotal = () => {
    const total = mycart.reduce((acc, item) => acc + item.qty * item.price, 0);
    console.log("Total", total);
    return total;
};

  const dispatch = useDispatch();
  const myProduct = useSelector(state => state.product);
  // console.log("Addred product",myProduct);
  const mycart = useSelector(state => state.cart);
  console.log('items added in :', mycart);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          backgroundColor: '#fff',
          paddingHorizontal: 10,
          alignItems: 'center',
          elevation: 3,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Redux Practise</Text>
      </View>
      <FlatList
        data={myProduct}
        renderItem={({item, index}) => {
          return (
            <View key={index}
              style={{
                width: '94%',
                height: 130,
                backgroundColor: '#fff',
                marginTop: 15,
                alignSelf: 'center',
                borderRadius: 10,
                elevation: 3,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  elevation: 4,
                }}
                source={{uri: item.image}}
              />
              <View style={{padding: 12}}>
                <Text style={{fontWeight: '600', color: '#000', fontSize: 16}}>
                  {item.name.substring(0, 20) + '..'}
                </Text>
                <Text style={{fontWeight: '600'}}>{item.brand}</Text>
                <Text style={{fontWeight: '600', fontSize: 16, color: 'green'}}>
                  {'₹ '+item.price}
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  {/* agar quantity qty==0 value Equal hai 0 to show hoga wrna hide  */}
                  {item.qty === 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        paddingLeft: 10,
                        paddingRight: 10,
                        height: 30,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {dispatch(addProductToMyCart(item))
                        dispatch(increaseQty(item.id))
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 13,
                          fontWeight: '500',
                        }}>
                        Add To Cart
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                  {/* agar qty ki value greater 0 hai to show hoga  */}
                  {/* - Button */}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        paddingLeft: 10,
                        paddingRight: 10,
                        height: 30,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 15,
                      }}
                      
                      onPress={()=>{
                        if(item.qty>1){
                          dispatch(RemoveProductFromMyCart(item));
                          dispatch(decreaseQty(item.id))
                        }else{
                          dispatch(deleteMyCartItem(item.id))
                          dispatch(decreaseQty(item.id))
                          
                        }
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 13,
                          fontWeight: '500',
                        }} 
                        >
                        -
                      </Text>
                    </TouchableOpacity>
                  )}
                  {/* AGar qty==0 hero to hide rahega */}
                  {item.qty == 0 ? null : (
                    <Text
                      style={{marginLeft: 10, fontWeight: '600', fontSize: 16}}>
                      {item.qty}
                    </Text>
                  )}
                  {/* agar qty ki value greater 0 hai to show hoga */}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        paddingLeft: 10,
                        paddingRight: 10,
                        height: 30,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 15,
                      }} onPress={()=>{dispatch(addProductToMyCart(item))
                        dispatch(increaseQty(item.id))
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 13,
                          fontWeight: '500',
                        }}
                        
                        >
                        +
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#fff',
          bottom: 0,
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
            {'added item' + '(' + mycart.length + ') '}
          </Text>
           
           <Text>{'Total:' + `₹ ${getTotal()}`}</Text>

         </View> 
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            
          }}>
          {/* <Text>{'Total:' + getTotal()}</Text> */}
          <TouchableOpacity style={{backgroundColor:"green" ,width:"70%" ,height:35,justifyContent:"center",alignItems:"center",borderRadius:7}} onPress={()=>navigation.navigate('Cart')}>
            <Text style={{textAlign:"center",color:"white",fontSize:16,fontWeight:"bold"}}> View Cart</Text>
          </TouchableOpacity>
        </View>
        
        {/* <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <TouchableOpacity style={{backgroundColor:"green" ,width:"70%" ,height:35,justifyContent:"center",alignItems:"center"}}>
            <Text> View Cart</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default ProductCart;
