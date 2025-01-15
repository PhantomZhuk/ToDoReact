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
            <input type="text" value={value} placeholder='Add Todo' onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
            <button onClick={saveTodo}>Add</button>
        </div>
    );
}

export default AddToDo;