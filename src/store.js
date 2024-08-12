import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./arrayslice";

 const store = configureStore({
    reducer: {
        array : arrayReducer
    }
 });

export default store;