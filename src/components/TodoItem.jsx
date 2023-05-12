import { useState } from "react";

export default function TodoItem({title, id, completed, removeTodo, toggleTodo}) {

    // console.log('completed >>>', completed);

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(title)
    // const[checked, setCheked] = useState(false);
    // const cls = checked ? 'completed' : null;

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
                            className="todo-item-input-field"
                            type="text"
                            value={value}
                            onChange={(event) => setValue(event.target.value)}/>
                    ) : (
                        <span>{title}</span>
                    )}
                    
                </div>
                
                <div className="button-wrapper">
                    {isEdit ? (
                        <button className="done-button" onClick={() => {}}></button>
                    ) : (
                        <button 
                            className="edit-button" 
                            onClick={() => {
                            setIsEdit(!isEdit);
                            }}>
                        </button>
                    )}

                    {isEdit ? (
                        <button className="return-button" onClick={() => {}}></button>
                    ) : (
                        <button className="del-button" onClick={removeTodo}></button>
                    )}
                </div>
                
            </label>
        </li>
    )
}