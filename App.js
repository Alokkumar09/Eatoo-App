// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import StackRoute from './src/routes/StackRoute';
// import {NavigationContainer} from '@react-navigation/native';
// import {addMyProducts} from './src/redux/reducer/MyProductSlice';
// import {Provider, useDispatch} from 'react-redux';
// import { mystore } from './src/redux/MyStore';

// const items = [
//   {
//     id: 1,
//     image:
//       'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380748/03/sv01/fnd/IND/fmt/png/Shuffle-Mid-Unisex-Sneakers',
//     name: 'Puma Smash v 2 l shoes for men',
//     brand: 'Puma',
//     price: '₹ 300',
//     qty: 0,
//   },
//   {
//     id: 2,
//     image:
//       'https://th.bing.com/th/id/OIP.6OVyTMos4ub53NOd4UJg1AHaLH?rs=1&pid=ImgDetMain',
//     name: 'Slim fit Jeans',
//     brand: 'Gucci',
//     price: '₹ 300',
//     qty: 0,
//   },
//   {
//     id: 3,
//     image:
//       'https://th.bing.com/th/id/OIP.27Bk7A7H_KfWrbrD6TA2FQHaE8?rs=1&pid=ImgDetMain',
//     name: 'MackBook air 2',
//     brand: 'Apple',
//     price: '₹ 3',
//     qty: 0,
//   },
//   {
//     id: 4,
//     image:
//       'https://i5.walmartimages.com/asr/3c92c819-468f-4edd-8098-551a16ea9f1c.a8809b55a1038c8f51139443cd9e92db.jpeg',
//     name: 'Black Flying MAchine shirt',
//     brand: 'Flyling Machine',
//     price: '₹ 3009',
//     qty: 0,
//   },
// ];

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     items.map(item => dispatch(addMyProducts(item)));
//   }, []);
//   return (
//   <Provider store={mystore}>
//   <StackRoute />
//   </Provider>
// )
// };

// export default App;


import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { mystore } from './src/redux/MyStore';
import StackRoute from './src/routes/StackRoute';
import { addMyProducts } from './src/redux/reducer/MyProductSlice';

const items = [
  {
    id: 1,
    image:
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380748/03/sv01/fnd/IND/fmt/png/Shuffle-Mid-Unisex-Sneakers',
    name: 'Puma Smash v 2 l shoes for men',
    brand: 'Puma',
    price: 5999,
    qty: 0,
  },
  {
    id: 2,
    image:
      'https://th.bing.com/th/id/OIP.6OVyTMos4ub53NOd4UJg1AHaLH?rs=1&pid=ImgDetMain',
    name: 'Slim fit Jeans',
    brand: 'Gucci',
    price:  39999,
    qty: 0,
  },
  {
    id: 3,
    image:
      'https://th.bing.com/th/id/OIP.27Bk7A7H_KfWrbrD6TA2FQHaE8?rs=1&pid=ImgDetMain',
    name: 'MackBook air 2',
    brand: 'Apple',
    price:  199999,
    qty: 0,
  },
  {
    id: 4,
    image:
      'https://i5.walmartimages.com/asr/3c92c819-468f-4edd-8098-551a16ea9f1c.a8809b55a1038c8f51139443cd9e92db.jpeg',
    name: 'Black Flying Machine shirt',
    brand: 'Flying Machine',
    price: 1999,
    qty: 0,
  },
];

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    items.forEach(item => dispatch(addMyProducts(item)));
  }, [dispatch]);

  return <StackRoute />;
};

const App = () => {
  return (
    <Provider store={mystore}>
      <AppContent />
    </Provider>
  );
};

export default App;

