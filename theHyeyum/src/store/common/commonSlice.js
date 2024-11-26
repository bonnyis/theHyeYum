import { createSlice } from "@reduxjs/toolkit"
import { setVisualMbMenu,setVisualPcMenu } from './thunkFunctions'

const initialState = {
    visualMbMenu: false,
    visualPcMenu: false,

}

const common = createSlice({
    name: 'common',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setVisualMbMenu.fulfilled, (state, {payload}) => {
            state.visualMbMenu = payload;
        }),
        builder.addCase(setVisualPcMenu.fulfilled, (state, {payload}) => {
            state.visualPcMenu = payload;
        })
    }
})

export default common.reducer