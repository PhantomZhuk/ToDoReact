import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddToDo({ todo, setTodo, placeholder }: any) {
    const [value, setValue] = useState('');

    function saveTodo() {
        if (value === '') return;
        setTodo([...todo, {
            id: uuid(),
            title: value,
            status: false
        }]);
        localStorage.setItem('todo', JSON.stringify([...todo, {
            id: uuid(),
            title: value,
            status: false
        }]))
        setValue('');
    }

    return (
        <div className='w-full flex justify-between items-center gap-3'>
            <input className='w-[90%] h-[50px] rounded-lg outline-none bg-[#292c35] pl-[10px] text-white dark:text-[#333] dark:bg-white' type="text" value={value} placeholder={placeholder} onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
            <button onClick={saveTodo} className='w-[50px] h-[50px] rounded-lg bg-[#292c35] text-white dark:text-[#333] dark:bg-white'><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
}

export default AddToDo;