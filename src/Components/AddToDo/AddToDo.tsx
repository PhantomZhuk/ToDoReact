import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function AddToDo({todo, setTodo}: any) {
    const [value, setValue] = useState('');

    function saveTodo() {
        setTodo([...todo, {
            id: uuid(),
            title: value,
            status: false
        }]);
        setValue('');
    }

    return (
        <div>
            <input className='w-[500px] h-[50px] rounded-lg outline-none bg-[#415a77] pl-[10px] text-white' type="text" value={value} placeholder='Add Todo' onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
            <button onClick={saveTodo} className='w-[100px] h-[50px] rounded-lg bg-[#415a77] text-white mx-[10px]'>Add</button>
        </div>
    );
}

export default AddToDo;