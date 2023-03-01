import { createSlice } from "@reduxjs/toolkit";; 

const initialState = {
    boardList: [
        {
          id: "todo", 
          title:"To Do"
        }, 
        {
          id: "progress", 
          title: "In Progress"
        }, 
        {
          id: "done", 
          title: "Done"
        }
    ]
}; 

const boardSlice = createSlice({
    name: boardList, 
    initialState, 
    reducers: {
        boardList: (state, action)=>{}
    }
})