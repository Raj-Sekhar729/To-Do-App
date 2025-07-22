// import React, { useEffect, useRef, useState } from 'react'
// import ToDoItems from './ToDoItems'

// const ToDo = () => {

//   const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

//   const inputRef = useRef();


//   const add = ()=>{
//     const inputText = inputRef.current.value.trim();

//     if(inputText === "")
//        {
//         return null;
//        }
    
//     const newTodo = {
//       id : Date.now(),
//       text : inputText,
//       isComplete : false,
//     }

//     setTodoList((prev) => [...prev, newTodo]);
//     inputRef.current.value = "";
//   }

//   const deleteTodo = (id) =>{
//     setTodoList((prevTodos)=>{
//       return prevTodos.filter((todo) => todo.id !== id)
//     })
//   }

//   const toggle = (id)=>{
//     setTodoList((prvTodos)=>{
//       return prvTodos.map((todo)=>{
//         if(todo.id === id) {
//         return {...todo, isComplete : !todo.isComplete}
//         }
//         return todo;
//       })
//     })
//   }

//   useEffect(()=>{
//     localStorage.setItem("todos",JSON.stringify(todoList)) 
//   },[todoList])

//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <div className='bg-white w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

//         {/*---------- title------------ */}

//         <div className='flex items-center mt-7 gap-2'>
//           <img className='w-8' src="./todo_icon.png" alt="" />
//           <h1 className='text-3xl font-semibold'>To-Do List</h1>
//         </div>

//         {/* ---------input-box-------- */}

//         <div className='flex items-center my-7 bg-gray-200 rounded-full'>
//             <input ref = {inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' 
//             type='text' placeholder='Add Your Task'/>

//             <button onClick = {add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white
//              font-medium cursor-pointer'>Add+</button>
//         </div>

//          {/* ---------to-do list-------- */}
         
//          <div>
//             {todoList.map((item, index) => {
//                 return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} 
//                 deleteTodo={deleteTodo} toggle={toggle}/>
//             })}

//          </div>

//       </div>
//     </div>
//   )
// }

// export default ToDo



import React, { useEffect, useRef, useState } from 'react'
import ToDoItems from './ToDoItems'

const ToDo = () => {

  // YOUR EXACT ORIGINAL FUNCTIONALITY - UNCHANGED
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])
  const inputRef = useRef();

  const add = ()=>{
    const inputText = inputRef.current.value.trim();

    if(inputText === "")
       {
        return null;
       }
    
    const newTodo = {
      id : Date.now(),
      text : inputText,
      isComplete : false,
    }

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) =>{
    setTodoList((prevTodos)=>{
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id)=>{
    setTodoList((prvTodos)=>{
      return prvTodos.map((todo)=>{
        if(todo.id === id) {
        return {...todo, isComplete : !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList)) 
  },[todoList])

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10">
      {/* Glass morphism container with enhanced styling */}
      <div className='bg-white/95 backdrop-blur-lg w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden'>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 rounded-2xl pointer-events-none"></div>
        
        <div className="relative z-10">
          {/*---------- title------------ */}
          <div className='flex items-center mt-7 gap-2'>
            <img className='w-8 drop-shadow-md' src="./todo_icon.png" alt="" />
            <h1 className='text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              To-Do List
            </h1>
          </div>

          {/* ---------input-box-------- */}
          <div className='flex items-center my-7 bg-gray-100/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 transition-all duration-300 hover:shadow-xl'>
              <input ref = {inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' 
              type='text' placeholder='Add Your Task'/>

              <button onClick = {add} className='border-none rounded-full bg-gradient-to-r from-orange-500 to-pink-500 w-32 h-14 text-white
               font-medium cursor-pointer transition-all duration-300 hover:from-orange-600 hover:to-pink-600 hover:shadow-lg transform hover:scale-105'>
                Add+
              </button>
          </div>

           {/* ---------to-do list-------- */}
           
           <div>
              {todoList.map((item, index) => {
                  return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} 
                  deleteTodo={deleteTodo} toggle={toggle}/>
              })}
           </div>
        </div>
      </div>
    </div>
  )
}

export default ToDo
