import {createAsyncThunk} from "@reduxjs/toolkit"

export const setVisualMbMenu =  createAsyncThunk('common/setVisualMbMenu',(payload) => {
    return payload;
})

export const setVisualPcMenu =  createAsyncThunk('common/setVisualPcMenu',(payload) => {
    return payload;
})