import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  //we define a state called todos, initially  it is an empty array
  const [todos, setTodos] = useState([]);

  //we define a function to add a new task
  const addTask = (newTodo) => {
    //with spread operator we add a new one to the end of the current tasks
    setTodos([...todos, newTodo]);
  };

  const removeTask = (todoId) => {
    //filter(), checks each element one by one and adds only those that meet the condition to the new list
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  //function update a task
  const updateTask = (updatedTodo) => { //we get the new todo with 'updatedTodo' parameter
    const newTodo = todos.map((todo) => {//map(), checks each task in the array
      if(todo.id !== updatedTodo.id) { //if the id does not match , leaves it as it is
        return todo;
      }
      return updatedTodo; // if the id matches , it replaces it with the updated version
    })

    setTodos([...newTodo]);// as a result we write the new task array to the state with setTodos
  }



console.log(todos);

  return ( //we start to return the interface (UI)
    <div className="app">
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/**we call CreateTodo component and send it the AddTask function */}
        <CreateTodo onAddTask={addTask} /> {/**addTask function will be run when we want to add a new task */}
        <TodoList todos={todos} onRemoveTask = {removeTask} onUpdateTask = {updateTask} /> {/**we send task list(todos), delete function (onRemoveTask), and update function (onUpdateTask) using props */}
      </div>
    </div>
  );
}

export default App;
