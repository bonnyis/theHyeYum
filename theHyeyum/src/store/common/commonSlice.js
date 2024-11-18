import { createSlice } from "@reduxjs/toolkit"
import { setVisualMbMenu } from './thunkFunctions'

const initialState = {
    visualMbMenu: false,

}

const common = createSlice({
    name: 'common',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setVisualMbMenu.fulfilled, (state, {payload}) => {
            state.visualMbMenu = payload;
        })
    }
})

export default common.reducer