import { Draggable } from "react-beautiful-dnd";

const Task = ({ id, index, taskName }) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
        ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="border border-black my-2 mx-4 text-center bg-[#DDDDDD] "
        >
          {taskName}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
