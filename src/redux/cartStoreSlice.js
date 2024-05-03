import { createSlice } from "@reduxjs/toolkit";

const cartStoreSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItems : (state,action)=>{
            state.items.push(action.payload)
        },

        clearItems : (state,action)=>{
            state.items.length=0
        }
    }
})

export const {addItems,clearItems} = cartStoreSlice.actions
export default cartStoreSlice.reducer
