import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    taskList: []
}

const taskSlice = createSlice({
    name: "task", 
    initialState, 
    reducers: {
        addTask: (state, action)=>{
            state.taskList.push(action.payload); 
        }
    }
}); 

export default taskSlice.reducer; 
export const {addTask} = taskSlice.actions; 