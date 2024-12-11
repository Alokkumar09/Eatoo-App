import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../redux/reducer/MyProductSlice"
import MyCartReducer from "../redux/reducer/MyCartSlice"
export const mystore=configureStore({
    reducer:{
        product:MyProductReducer,
        cart:MyCartReducer
    }
})