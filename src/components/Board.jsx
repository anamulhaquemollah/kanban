import Task from "./Task"; 

const Board = ({boardDetails}) => {
    const {id, title} = boardDetails; 
  return (
    <div className="border border-black w-[200px] h-[400px]">
        <h2 className="text-center text-gray-700 bg-[#FF6347] font-bold py-1 text-lg">{title}</h2>
        
    </div>
  )
}

export default Board