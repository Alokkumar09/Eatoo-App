import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home';
import Cart from '../screens/Cart/Cart';
import Details from '../screens/Details/Details';
import Login from '../screens/Login/Login';
import Splash from '../screens/Splash/Splash';
import Wishlist from '../screens/Wishlist/Wishlist';
import ProductCart from '../screens/products/ProductCart';
import { NavigationContainer } from '@react-navigation/native';


const Stack=createNativeStackNavigator();
const StackRoute = () => {
  return ( 

    //change kro initialRouteName is 'Products' and splash screen me Home krdo
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}> 
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Cart' component={Cart}/>
            <Stack.Screen name='Details' component={Details}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Wishlist' component={Wishlist}/>
            <Stack.Screen name='Products' component={ProductCart}/>
        </Stack.Navigator>
        </NavigationContainer>
    
  )
}

export default StackRoute