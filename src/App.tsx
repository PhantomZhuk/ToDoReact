import AddToDo from './Components/AddToDo/AddToDo'
import ToDoList from './Components/ToDoList/ToDoList'
import React, { useState, useEffect } from 'react';

function App() {

  const [todo, setTodo] = useState(localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo') as string) : []);

  return (
    <div className="App w-full min-h-screen flex justify-center items-center py-[20px] bg-gradient-to-r from-[#18191e] via-[#292c35] to-[#ac6f35]">
      <div className="w-[780px] h-[88vh] gap-5 p-5 flex flex-col items-center bg-gradient-to-br from-slate-100/20 to-transparent backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg">
        <AddToDo todo={todo} setTodo={setTodo} />
        <ToDoList todo={todo} setToDo={setTodo} />
      </div>
    </div>
  )
}

export default App
