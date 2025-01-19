import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'

function ToDoList({ todo, setToDo }: any) {
    function deleteTodo(id: any) {
        const newTodo = todo.filter((item: any) => item.id !== id);
        setToDo(newTodo);
    }

    function changeStatus(id: any) {
        const newTodo = todo.map((item: any) => item.id === id ? { ...item, status: !item.status } : item);
        setToDo(newTodo);
    }

    return (
        <div className="w-full h-[80vh] pt-[30px] flex flex-wrap justify-center gap-5 overflow-auto hide-scrollbar">
            {todo.map((item: any) => (
                <div key={item.id} className={`w-[350px] h-[200px] flex flex-col justify-between p-[10px] text-white bg-[#292c35] rounded-lg ${item.status ? `opacity-30` : `opacity-100` }`}>
                    <p contentEditable="false" className="w-full p-1">{item.title}</p>
                    <div className="flex justify-center gap-5">
                        <button onClick={() => deleteTodo(item.id)} className="px-[32px] py-[8px] bg-red-700 rounded-lg"><FontAwesomeIcon icon={faTrashCan} /></button>
                        <button onClick={() => changeStatus(item.id)} className="px-[32px] py-[8px] bg-[#18191e] rounded-lg">
                            {
                                item.status ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faSquare} />
                            }
                        </button>
                        <button className="px-[32px] py-[8px] bg-[#df9146] rounded-lg"><FontAwesomeIcon icon={faPenToSquare} /></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
