import React from 'react'
import '../App.css'
import { IoIosAddCircle } from "react-icons/io";

function CreateTodo() {
    return (
        
            <div className='create-todo'>
                <input className='todo-input' type="text" placeholder='enter a task' />
                <IoIosAddCircle size='50px' color='#796b5e'/>
            </div>
    
    )
}

export default CreateTodo
