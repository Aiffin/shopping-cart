import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotals } from "../cartSlice";
import productSlice from "../productSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice
    }
})

store.dispatch(getTotals());

export default store