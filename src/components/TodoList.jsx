import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemoveTask, onUpdateTask, onToggleComplete }) {//these are the props we sent from the App.jsx file
    return (
        <div style={{width:"100%", marginTop:"70px"}} >
        {
            todos && todos.map((todo) => ( //we loop the todos array with 'map()' (but first, we check if there is a todos or not -secure coding-)
                <Todo key={todo.id} todo={todo} onRemoveTask={onRemoveTask} onUpdateTask ={onUpdateTask} onToggleComplete={onToggleComplete} />
            ))
        }
   
        </div>
    )
}

export default TodoList
