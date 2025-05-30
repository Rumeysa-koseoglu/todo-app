import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function Todo({ todo, onRemoveTask, onUpdateTask, onToggleComplete }) {
  // these are the props we sent from TodoList.jsx
  const { id, content, isCompleted } = todo; //we destructured the todo to use its content and is easily (without having to bother writing 'todo.id' or 'todo.content' )

  //we created a state named 'edit'. initially it is false , well because we are not in the edit mood
  const [edit, setEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(content); //we defined a state named 'updateTodo' to update task text. initially the content is same with the coming content value

  //this function calls the onRemoveTask function and sends the id. Thus the parent component (App.jsx) deletes the task
  const removeTask = () => {
    onRemoveTask(id);
  };

  // this function runs when the edit button (✅) is clicked and creates a new object (request)
  const updateTask = () => {
    const request = {
      id: id,
      content: updateTodo,
      isCompleted: false,
    };
    onUpdateTask(request); //and sends this object to teh onUpdateTask function
    setEdit(false); //edit mode is closed (edit is set to false)
  };

  return (
    <div className="todosInList">
     <Checkbox
     className="checkbox"
  checked={isCompleted}
  onChange={() => onToggleComplete(id)}
  icon={<RadioButtonUncheckedIcon />}
  checkedIcon={<CheckCircleIcon />}  
  sx={{
    '&.Mui-checked': {
      color: "#585abd",
    },
  }}
/>


      <div style={{ color: "white" }}>
        {/**if edit === true , input box will appear and it contains the current task text (updateTodo) */}
        {
          edit ? (
            <input
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    updateTask();
                }
              }}
              value={updateTodo}
              onChange={(e) => setUpdateTodo(e.target.value)} //as the user types, the state is updated with setUpdateTodo
              style={{ width: "375px" }}
              type="text"
              className="edit-input"
            />
          ) : (
            <span
              style={{ textDecoration: isCompleted ? "line-through" : "none" }}
            >
              {content}
            </span>
          ) // if edit === false, only the task content is displayed
        }
      </div>
      <div>
        {
          //if edit === true (edit button is clicked), the update button is displayed (✅)
          edit ? (
            <FaCheck
              className="todo-list-icons"
              cursor="pointer"
              onClick={updateTask}
              color="#585abd"
            />
          ) : (
            <GoPencil
              className="todo-list-icons"
              onClick={() => setEdit(true)}
            />
          ) //if edit === false, edit button is shown and editing is enabled with setEdit(true)
        }
        <IoTrashOutline className="todo-list-icons" onClick={removeTask} />{" "}
        {/**if the x icon is clicked , removeTask() function is called and the task is deleted */}
      </div>
    </div>
  );
}

export default Todo;
