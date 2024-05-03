import cartStoreSlice from "./cartStoreSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
 
    reducer : {
        cart : cartStoreSlice
    }
})

export default appStore;