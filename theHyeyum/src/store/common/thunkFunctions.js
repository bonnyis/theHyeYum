import {createAsyncThunk} from "@reduxjs/toolkit"

export const setVisualMbMenu =  createAsyncThunk('common/setVisualMbMenu',(payload) => {
    console.log(payload)
    return payload;
})