import { useState } from "react";

export default function TodoItem({title, id, completed, removeTodo, toggleTodo}) {

    // console.log('completed >>>', completed);

    // const[checked, setCheked] = useState(false);
    // const cls = checked ? 'completed' : null;

    const cls = completed ? 'completed' : null;
    
    return(
        <li className={`todo-item ${cls}`}>
            <label>
                <div className="wrapper">
                    <input 
                    type="checkbox"
                    defaultChecked={completed}
                    // checked={checked}
                    onChange={() => {
                        // setCheked(!checked);
                        toggleTodo(id);
                    }} />

                    <span>{title}</span>
                </div>
                

                <button onClick={removeTodo}>Del</button>
            </label>
        </li>
    )
}