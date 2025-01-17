import AddToDo from './Components/AddToDo/AddToDo'
import ToDoList from './Components/ToDoList/ToDoList'
import {useState} from 'react'

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Learn React',
      status: false
    },
    {
      id: 2,
      title: 'Learn Vite',
      status: false
    }
  ]);


  return (
    <div className="App w-full min-h-screen flex flex-col items-center py-[50px] bg-[#0d1b2a]">
      <AddToDo todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setToDo={setTodo} />
    </div>
  )
}

export default App
