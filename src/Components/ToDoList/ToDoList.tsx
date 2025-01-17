function ToDoList({ todo, setToDo }: any) {
    function deleteTodo(id: any) {
        const newTodo = todo.filter((item: any) => item.id !== id);
        setToDo(newTodo);
    }

    return (
        <div className="w-[500px] min-h-[80vh] pt-[30px] flex flex-col items-center gap-[10px]">
            {todo.map((item: any) => (
                <div key={item.id} className="w-[650px] flex justify-between bg-[#415a77] p-[10px] text-white rounded-lg">
                    <p contentEditable="false">{item.title}</p>
                    <div className="flex gap-5">
                        <button onClick={() => deleteTodo(item.id)} className="px-[32px] py-[8px] bg-red-700 rounded-lg">Delete</button>
                        <button className="px-[32px] py-[8px] bg-[#0d1b2a] rounded-lg">Complete</button>
                        <button className="px-[32px] py-[8px] bg-[#0d1b2a] rounded-lg">Edit</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
