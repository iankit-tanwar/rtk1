import { configureStore } from "@reduxjs/toolkit";
import rootReducerFunction from "./features/add_elements/addElementSlice";




const store = configureStore({
    reducer:{
        rootReducer: rootReducerFunction
    }
})

export default store;