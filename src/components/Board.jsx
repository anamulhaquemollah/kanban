import Task from "./Task";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

const Board = () => {
  const store = useSelector((store) => store);
  const tasks = store.tasks.taskList;
  const inprogress = store.inprogress.inprogressList;
  console.log(tasks);

  return (
    <div className="flex justify-center gap-6 pt-5">
      <Droppable droppableId="todo">
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="border border-black w-[200px] h-[400px]">
                <h2 className="text-center text-gray-700 bg-[#FF6347] font-bold py-1 text-lg">
                  To Do
                </h2>
                {tasks.map(
                (task, index) =>
                  task.status === "todo" && (
                    <Task
                      key={task.id}
                      id={task.id}
                      index={index}
                      taskName={task.taskName}
                    />
                  )
              )}
                {provided.placeholder}
              </div>
            </div>
          );
        }}
      </Droppable>

      <Droppable droppableId="inprogress">
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="border border-black w-[200px] h-[400px]"
            >
              <h2 className="text-center text-gray-700 bg-[#FF6347] font-bold py-1 text-lg">
                In Progess
              </h2>
              {tasks.map(
                (task, index) =>
                  task.status === "inprogress" && (
                    <Task
                      key={task.id}
                      id={task.id}
                      index={index}
                      taskName={task.taskName}
                    />
                  )
              )}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>

      <Droppable droppableId="done">
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="border border-black w-[200px] h-[400px]"
            >
              <h2 className="text-center text-gray-700 bg-[#FF6347] font-bold py-1 text-lg">
                Done
              </h2>
              {tasks.map(
                (task, index) =>
                  task.status === "done" && (
                    <Task
                      key={task.id}
                      id={task.id}
                      index={index}
                      taskName={task.taskName}
                    />
                  )
              )}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Board;
