import { useLayoutEffect, useRef, useState } from "react";

export default function TodoItem({title, id, completed, removeTodo, toggleTodo, editTodo}) {

    // console.log('completed >>>', completed);
    console.log('id >>>', id);

    const [isEdit, setIsEdit] = useState(false);
    const [inputValue, setinputValue] = useState(title)

    const inputRef = useRef(null);
    // const[checked, setCheked] = useState(false);
    // const cls = checked ? 'completed' : null;

    useLayoutEffect(() => {
        if (isEdit && inputRef) {
            inputRef.current.focus();
        }
    }, [isEdit])

    const cls = completed ? 'completed' : null;
    
    return(
        <li className={`todo-item ${cls}`}>
            <label>
                <div className="wrapper">
                    <input
                        className="todo-item-checkbox"
                        type="checkbox"
                        defaultChecked={completed}
                        // checked={checked}
                        onChange={() => {
                        // setCheked(!checked);
                        toggleTodo();
                    }} />

                    {isEdit ? (
                        <input 
                            className="todo-item-edit-input"
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(event) => setinputValue(event.target.value)}/>
                    ) : (
                        <span>{title}</span>
                    )}
                    
                </div>
                
                <div className="button-wrapper">
                    {isEdit ? (
                        <button 
                            className="done-button" 
                            onClick={() => {
                                if (inputValue === title) {
                                    setIsEdit(!isEdit)
                                } else {
                                    editTodo(inputValue);
                                    setIsEdit(!isEdit);
                                }
                            }}>
                        </button>
                    ) : (
                        <button 
                            className="edit-button" 
                            onClick={() => {
                                setIsEdit(!isEdit);
                            }}>
                        </button>
                    )}

                    {isEdit ? (
                        <button 
                            className="return-button" 
                            onClick={() => {
                                setinputValue(title);
                                setIsEdit(!isEdit);
                            }}>
                        </button>
                    ) : (
                        <button 
                            className="del-button" 
                            onClick={() => {
                                if (window.confirm('Are you sure?')) {
                                    removeTodo()
                                }
                            }}>
                        </button>
                    )}
                </div>
                
            </label>
        </li>
    )
}