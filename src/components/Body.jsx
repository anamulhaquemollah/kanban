import React from "react";
import Board from "./Board";
import { useSelector } from "react-redux";

const Body = () => {
    const tasks = useSelector((store)=>store.tasks.taskList); 
    
  return (
    <div className="flex justify-center gap-6 pt-5">
        {
           tasks.map((task, index) =>{
            if(task.status === "todo"){
                
            }
           }) 
        }
     <Board/>
     <Board/>
     <Board/>
    </div>
  );
};

export default Body;
