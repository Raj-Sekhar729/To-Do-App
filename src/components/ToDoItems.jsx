// import React from 'react'

// const ToDoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
//   return (
//     <div className='flex items-center my-3 gap-2'>

//         <div onClick = {()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
//             <img src={isComplete ? "./tick.png " : "not_tick.png"} alt="" className='w-7' />
//             <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
//               ${isComplete ? "line-through" : ""}`}>{text}</p>
//         </div>

//         <img onClick = {()=>{deleteTodo(id)}} src="./delete.png" alt="" className='w-3.5 cursor-pointer'/>
//     </div>
//   )
// }

// export default ToDoItems



import React from 'react'

const ToDoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2 p-3 rounded-xl bg-gray-50/50 backdrop-blur-sm border border-gray-200/30 transition-all duration-300 hover:bg-gray-100/60 hover:shadow-md group'>
        <div onClick = {()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? "./tick.png " : "not_tick.png"} alt="" className='w-7 transition-transform duration-200 group-hover:scale-110' />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 transition-all duration-300
              ${isComplete ? "line-through opacity-60" : ""}`}>{text}</p>
        </div>

        <img onClick = {()=>{deleteTodo(id)}} src="./delete.png" alt="" className='w-3.5 cursor-pointer transition-all duration-200 hover:scale-125 opacity-60 hover:opacity-100'/>
    </div>
  )
}

export default ToDoItems