import AddToDo from './Components/AddToDo/AddToDo';
import ToDoList from './Components/ToDoList/ToDoList';
import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './Components/ThemeProvider/ThemeProvider';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App: React.FC = () => {
  const [todo, setTodo] = useState(
    localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo') as string) : []
  );

  return (
    <ThemeProvider>
      <MainAppContent todo={todo} setTodo={setTodo} />
    </ThemeProvider>
  );
};

const MainAppContent: React.FC<{
  todo: any[];
  setTodo: React.Dispatch<React.SetStateAction<any[]>>;
}> = ({ todo, setTodo }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`App w-full min-h-screen flex justify-center items-center py-[20px] ${theme === 'light'
        ? 'bg-gradient-to-r from-[#18191e] via-[#292c35] to-[#ac6f35]'
        : 'bg-gradient-to-r from-[#e3e3e3] via-[#505152] to-[#dfaa78]'
        }`}
    >
      <div className="w-[780px] h-[88vh] gap-5 p-5 flex flex-col items-center bg-gradient-to-br from-slate-100/20 dark:from-slate-100/40 to-transparent backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg">
        <div className="controlContainer">
          <button
            className="controlButton w-[40px] h-[40px] rounded-lg bg-[#292c35] text-white dark:text-[#333] dark:bg-white"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </div>
        <AddToDo todo={todo} setTodo={setTodo} />
        <ToDoList todo={todo} setToDo={setTodo} />
      </div>
    </div>
  );
};

export default App;