// store.js
import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../slices/addProductSlice';
import customerSlice from '../slices/addCustomerSlice';
import orderSlice from "../slices/orderSlice"; 
import allProducts from "../slices/products"; 
import cartDetails from "../slices/CartSlice"
const store = configureStore({
  reducer: {
    productData: productSlice,
    customerSlice: customerSlice, 
    ordersData: orderSlice,
    allProducts :allProducts,
    cartDetails:cartDetails
  },
});

export default store;


