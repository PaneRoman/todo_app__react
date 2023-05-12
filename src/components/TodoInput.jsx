import { useState } from "react";

// import addIcon from '../img/add-icon.svg';

export default function TodoInput({addTodo}) {

    const[isActive, setIsActive] = useState(false);
    const[todoTitle, setTodoTitle] = useState('');

    const cls = isActive ? 'active' : null;

    return (
        <div className={`input-field ${cls}`}>
          <input 
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            // onKeyDown={addTodo}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                addTodo(todoTitle);
                setTodoTitle('');
              }
            }}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            />

          <label>Todo name</label>

          <button 
            className='add-button'
            onClick={() => {
              addTodo(todoTitle);
              setTodoTitle('');
            }} >

            {/* <img src={addIcon} alt="addIcon"/> */}
          </button>
        </div>
    );
}