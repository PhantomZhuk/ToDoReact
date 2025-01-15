function ToDoList({ todo, setToDo }: any) {
    function deleteTodo(id: any) {
        const newTodo = todo.filter((item: any) => item.id !== id);
        setToDo(newTodo);
    }

    return (
        <div>
            {todo.map((item: any) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                    <button>Complete</button>
                    <button>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
