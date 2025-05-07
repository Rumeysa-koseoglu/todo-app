import React from 'react'
import { FaXmark } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

function Todo() {
    return (
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", border:"1px solid lightgray", padding:"10px"}}>
            <div style={{color:"#796b5e"}}>
                I am first todo
            </div>
            <div>
                <MdOutlineEdit className='todo-list-icons'/>
                <FaXmark className='todo-list-icons'/>
            </div>
        </div>
    )
}

export default Todo
