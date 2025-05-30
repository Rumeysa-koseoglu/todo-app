import React, { useState } from 'react'
import '../App.css'
import { IoIosAddCircleOutline } from "react-icons/io";

//we get onAddTask function from props object
function CreateTodo({onAddTask}) {

    //we define a state named newTask, it will hold text in input
    const [newTask, setNewTask] =useState ('');

    const clearInput = () => {
        setNewTask('')
    }

    //a function to create a new task
    const CreateNewTask = () => {
        //if the input field is empty, do nothing
        if(!newTask) return;
        //we create a new object named 'request' to the new task (id + content)
        const request = {
            id : Math.floor(Math.random() * 9999999999999), //to get an id made up of random numbers
            content: newTask //the text written by the user
        }
        //we send this object to the parent component
        onAddTask(request)
        clearInput();
    }

    return (
        
            <div className='new-task-section'>
                {/** the field where the user enters a task */}
                <input value={newTask} //input value depends on state
                onChange={(e) => setNewTask(e.target.value)} //when input changes, state is updated
                 className='todo-input' type="text" placeholder='enter a task' />
                <button className='addBtn' onClick={CreateNewTask} >Add<IoIosAddCircleOutline size='20px' color='white'/></button>
            </div>
    
    )
}

export default CreateTodo
