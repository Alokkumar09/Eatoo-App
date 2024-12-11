import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, deleteMyCartItem, RemoveProductFromMyCart } from '../../redux/reducer/MyCartSlice';
import { decreaseQty, increaseQty } from '../../redux/reducer/MyProductSlice';

const Cart = () => {
  const dispatch=useDispatch();
  const myCartItems=useSelector(state=>state.cart)
  return (
    <View style={{flex:1}}>
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
        data={myCartItems}
        renderItem={({item, index}) => {
          return (
            <View 
              style={{
                width: '94%',
                height: 130,
                backgroundColor: '#fff',
                marginTop: 15,
                alignSelf: 'center',
                borderRadius: 10,
                elevation: 3,
                flexDirection:"row",
                alignItems:"center",paddingLeft:10
              }}
            >
              <Image style={{height: 100, width: 100,borderRadius:10,elevation:4}} source={{uri:item.image}} />
              <View style={{padding:10}}>
                <Text style={{fontWeight:"600",color:"#000",fontSize:16}}>{item.name.substring(0,20) + ".."}</Text>
                <Text style={{fontWeight:"600"}}>{item.brand}</Text>
                <Text style={{fontWeight:"600",fontSize:16,color:"green"}}>{item.price}</Text>
                <View style={{alignItems:"center",flexDirection:"row",marginTop:5}}>
                  
                    {/* agar qty ki value greater 0 hai to show hoga  */}
                      {/* - Button */}
                    {item.qty==0? null :(<TouchableOpacity style={{backgroundColor:"green",paddingLeft:10,paddingRight:10,height:30,borderRadius:7,justifyContent:"center",alignItems:"center",marginLeft:15}} onPress={()=>{
                      if(item.qty>1){
                        dispatch(RemoveProductFromMyCart(item));
                        dispatch(decreaseQty(item.id))
                      }else{
                        dispatch(deleteMyCartItem(item.id))
                        dispatch(decreaseQty(item.id))
                        
                      }
                    }}>
                        <Text style={{color:"#fff",fontSize:13,fontWeight:"500"}}>-</Text>
                    </TouchableOpacity>)}
                    {/* AGar qty==0 hero to hide rahega */}
                    {item.qty==0?null:(<Text style={{marginLeft:10,fontWeight:"600",fontSize:16}}>{item.qty}</Text>)}
                    {/* agar qty ki value greater 0 hai to show hoga */}
                    {item.qty==0? null :(<TouchableOpacity style={{backgroundColor:"green",paddingLeft:10,paddingRight:10,height:30,borderRadius:7,justifyContent:"center",alignItems:"center",marginLeft:15}} onPress={()=>{dispatch(addProductToMyCart(item))
                      dispatch(increaseQty(item.id))
                    }}>
                        <Text style={{color:"#fff",fontSize:13,fontWeight:"500"}}>+</Text>
                    </TouchableOpacity>)}
                    
                </View>
             </View>

            </View>
          );
        }}
      />
    </View>
  )
}

export default Cart