import TodoItem from './TodoItem';

export default function TodoList({todos, removeTodo, toggleTodo, editTodo}) {

    return (
        <ul className='todo-list'>
            {todos.length <= 0 && (
                <p className='no-todos-text'>No one Todos added</p>
            )}

            {todos.map(todo => {
                    return <TodoItem 
                        key={todo.id}
                        {...todo}
                        removeTodo={() => removeTodo(todo.id)}
                        toggleTodo={() => toggleTodo(todo.id)}
                        editTodo={(title) => editTodo(todo.id, title)}/>
                })
            }
        </ul>
    )
}