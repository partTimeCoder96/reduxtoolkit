import {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name:"counter",
    initialState:{
        number:0
    },
    reducers:{
        incrementNumber:(state)=>{
                state.number += 1
        }
    }
})

export const {incrementNumber} = counterSlice.actions;

export default counterSlice.reducer