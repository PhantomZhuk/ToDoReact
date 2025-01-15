import './App.css'
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
    <>
      <AddToDo todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setToDo={setTodo} />
    </>
  )
}

export default App
