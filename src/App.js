import AddNew from "./components/AddNew";
import Board from "./components/Board";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { updateTask } from "./redux/slice/taskSlice";
import { useSelector } from "react-redux";

function App() {
  const {taskList} = useSelector(store => store.tasks)
  const dispatch = useDispatch(); 
  const onDragEnd = (result)=>{
    const {destination, source, draggableId} = result; 
    if(!destination) return undefined; 
    if(destination.droppableId === source.droppableId && destination.index === source.index) return; 

    
    const idx = taskList.findIndex(value=> value.id === Number(draggableId))
    dispatch(updateTask({
      idx, 
      status: destination.droppableId, 
    }))

  }
  return (
    <div className="py-10">
      <AddNew />
      {/* <Body/> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Board />
      </DragDropContext>
    </div>
  );
}

export default App;
