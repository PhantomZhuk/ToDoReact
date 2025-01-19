import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddToDo({ todo, setTodo }: any) {
    const [value, setValue] = useState('');

    function saveTodo() {
        if (value === '') return;
        setTodo([...todo, {
            id: uuid(),
            title: value,
            status: false
        }]);
        setValue('');
    }

    return (
        <div className='w-full flex justify-between items-center gap-3'>
            <input className='w-[90%] h-[50px] rounded-lg outline-none bg-[#292c35] pl-[10px] text-white' type="text" value={value} placeholder='Add Todo' onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
            <button onClick={saveTodo} className='w-[50px] h-[50px] rounded-lg bg-[#292c35] text-white'><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
}

export default AddToDo;