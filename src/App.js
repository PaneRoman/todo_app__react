import { useEffect, useState, useCallback } from 'react';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import './App.css';


 function App() {

  const local = JSON.parse(localStorage.getItem('todos'));

  const[todos, setTodos] = useState(local || [])
  // const[todoTitle, setTodoTitle] = useState('');
  // const[isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   console.log('useEffect1>>');
  //   const local = localStorage.getItem('todos') || '[]';
  //   console.log('local>>>', local);
  //   setTodos(JSON.parse(local));
  // }, [])

  useEffect(() => {
    console.log('useEffect2>>');
    console.log('todos>>>', todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const addTodo = useCallback((title) => {

    // console.log(title);

    // if (event.key === 'Enter') {
    //   setTodos([
    //     ...todos,
    //     {id: Date.now(), title: todoTitle, completed: false}
    //   ])

    // }

    setTodos((todos) => [...todos, {id: Date.now(), title: title, completed: false}])

  }, []);
      

  const removeTodo = (id) => {
    const refreshTodos = todos.filter(todo => todo.id !== id);

    console.log('refreshTodos >>>', refreshTodos);
    setTodos(refreshTodos);
  }

  const toggleTodo = (id) => {
    const refreshTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : {...todo})

    console.log('refreshTodos >>>', refreshTodos);
    setTodos(refreshTodos);
  }

  const editTodo = (id, title) => {
    const refreshTodos = todos.map(todo => todo.id === id ? {...todo, title: title} : {...todo})

    console.log('refreshTodos >>>', refreshTodos);
    setTodos(refreshTodos);
  }
  

  // const cls = isActive ? 'active' : null;

  return(
      <div className="container">
        <h1 className='app-header'>Simple_Todo_App<sup> react.js</sup></h1>

        <TodoInput 
          // todoTitle={todoTitle} 
          // setTodoTitle={setTodoTitle}
          addTodo={addTodo} 
          />

        {/* <div className={`input-field ${cls}`}>
          <input 
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyDown={addTodo}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            />

          <label>Todo name</label>
        </div> */}

        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      </div>
    );
  }
 

export default App;
