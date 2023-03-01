import AddNew from './components/AddNew';
import Board from './components/Board';
import { useSelector } from 'react-redux';

function App() {
  const tasks =  useSelector((store)=>{return store.tasks})
  console.log(tasks)
  const boardList= [
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
  return (
    <div className="py-10">
     <AddNew/>
     <div className='flex justify-center gap-6 pt-5'>
      {boardList.map(board=> <Board key={board.id} boardDetails = {board}/>)}
     </div>
    </div>
  );
}

export default App;
