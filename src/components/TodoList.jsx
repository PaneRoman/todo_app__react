import TodoItem from './TodoItem';

export default function TodoList({todos, removeTodo, toggleTodo}) {

    return (
        <ul className='todo-list'>
            {todos.map(todo => {
                    return <TodoItem 
                        key={todo.id}
                        {...todo}
                        removeTodo={() => removeTodo(todo.id)}
                        toggleTodo={() => toggleTodo(todo.id)}/>
                })
            }
        </ul>
    )
}