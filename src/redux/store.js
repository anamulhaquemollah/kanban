import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskSlice";
import progressReducer from "./slice/progressSlice"

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    inprogress: progressReducer, 
  },
});

export default store;
