import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import React, { useState, useEffect } from 'react';

function ToDoList({ todo, setToDo }: any) {
    function deleteTodo(id: any) {
        const newTodo = todo.filter((item: any) => item.id !== id);
        localStorage.setItem('todo', JSON.stringify(newTodo));
        setToDo(newTodo);
    }

    function changeStatus(id: any) {
        const newTodo = todo.map((item: any) => item.id === id ? { ...item, status: !item.status } : item);
        localStorage.setItem('todo', JSON.stringify(newTodo));
        setToDo(newTodo);
    }

    function saveTitle(id: any, title: any) {
        const editBtn = document.getElementById(`edit-${id}`) as HTMLButtonElement;
        const saveBtn = document.getElementById(`save-${id}`) as HTMLButtonElement;
        const newTodo = todo.map((item: any) => item.id === id ? {...todo, title: title } : item);
        localStorage.setItem('todo', JSON.stringify(newTodo));
        editBtn.style.display = 'block';
        saveBtn.style.display = 'none';
        setToDo(newTodo);
    }

    function editTitle(id: any) {
        const title = document.getElementById(`title-${id}`) as HTMLParagraphElement;
        const editBtn = document.getElementById(`edit-${id}`) as HTMLButtonElement;
        const saveBtn = document.getElementById(`save-${id}`) as HTMLButtonElement;
        editBtn.style.display = 'none';
        saveBtn.style.display = 'block';
        title.contentEditable = 'true';
        title.focus();
    }

    return (
        <div className="w-full h-[80vh] pt-[30px] flex flex-wrap justify-center items-start gap-5 overflow-auto hide-scrollbar">
            {todo.map((item: any) => (
                <div key={item.id} className={`w-[350px] min-h-[200px] flex flex-col justify-between p-[10px] text-white bg-[#292c35] dark:bg-[#ffffff] dark:text-[#333] rounded-lg ${item.status ? `opacity-30` : `opacity-100` }`}>
                    <p contentEditable="false" id={`title-${item.id}`} className="title w-full p-1">{item.title}</p>
                    <div className="flex justify-center gap-5 mt-4">
                        <button onClick={() => deleteTodo(item.id)} className="px-[32px] py-[8px] bg-red-700 rounded-lg dark:text-[#fff]"><FontAwesomeIcon icon={faTrashCan} /></button>
                        <button onClick={() => changeStatus(item.id)} className="px-[32px] py-[8px] bg-[#18191e] dark:bg-[#cccccc] rounded-lg">
                            {
                                item.status ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faSquare} />
                            }
                        </button>
                        <button onClick={() => editTitle(item.id)} id={`edit-${item.id}`} className="px-[32px] py-[8px] bg-[#df9146] rounded-lg dark:text-[#fff]"><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button onClick={() => saveTitle(item.id, (document.getElementById(`title-${item.id}`) as HTMLParagraphElement).innerText)} id={`save-${item.id}`} className="px-[32px] py-[8px] bg-[#df9146] rounded-lg hidden dark:text-[#fff]"><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
