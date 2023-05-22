import { useState, memo } from "react";

// import addIcon from '../img/add-icon.svg';

const TodoInput = memo(({addTodo}) => {

  console.log('render TodoInput')

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
                setIsActive(false)
              }
            }}
            onFocus={() => setIsActive(true)}
            onBlur={() => {
              if (!todoTitle) {
                setIsActive(false)}}
              }
            />

          <label>Todo name</label>

          <button 
            className='add-button'
            onClick={() => {
              addTodo(todoTitle);
              setTodoTitle('');
              setIsActive(false)
            }} >

            {/* <img 
              src={addIcon} 
              alt="addIcon"
              /> */}
          </button>
        </div>
  );
});

export default TodoInput;