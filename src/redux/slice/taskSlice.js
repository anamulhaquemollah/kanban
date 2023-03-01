import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    taskList: localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : []
}

const taskSlice = createSlice({
    name: "task", 
    initialState, 
    reducers: {
        addTask: (state, action)=>{
            state.taskList.push(action.payload); 
            localStorage.setItem("taskList", JSON.stringify(state.taskList)); 
        }, 

        updateTask: (state, action)=>{
            const {status,idx} = action.payload;
            state.taskList[idx].status = status
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        }
    }
}); 

export default taskSlice.reducer; 
export const {addTask, updateTask} = taskSlice.actions; 