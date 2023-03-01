import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slice/taskSlice";

const AddNew = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      status: "todo",
      taskName,
    };
    dispatch(addTask(task));
    setTaskName("");
  };

  const inputHandler = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={submitHandler} className="flex gap-6">
        <input
          type="text"
          placeholder="Write your task..."
          className="border border-black pl-6 py-1.5"
          value={taskName}
          onChange={inputHandler}
        />
        <button className="border border-black px-6 font-bold text-[#FF6347]">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNew;
