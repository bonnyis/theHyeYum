import { combineReducers, configureStore } from "@reduxjs/toolkit";
import common from "./common/commonSlice"
const rootReducer = combineReducers({
    common
})

export const store = configureStore({
    reducer: rootReducer,
})