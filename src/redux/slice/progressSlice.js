import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inprogressList: []
}

const progressSlice = createSlice({
    name: "inprogress", 
    initialState, 
    reducers: {
        addProgress: (state, action)=>{
            console.log(action.payload)
            state.inprogressList.push(action.payload)
        }
    }
}); 

export default progressSlice.reducer; 
export const {addProgress} = progressSlice.actions; 