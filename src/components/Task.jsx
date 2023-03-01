import { Draggable } from "react-beautiful-dnd";

const Task = ({ id, index, taskName }) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
        ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="border border-gray-300 m-2 text-center"
        >
          {taskName}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
