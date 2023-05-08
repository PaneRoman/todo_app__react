import { useState } from "react";

export default function TodoInput({todoTitle, setTodoTitle, addTodo}) {

    const[isActive, setIsActive] = useState(false);
    const cls = isActive ? 'active' : null;

    return (
        <div className={`input-field ${cls}`}>
          <input 
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyDown={addTodo}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            />

          <label>Todo name</label>
        </div>
    );
}