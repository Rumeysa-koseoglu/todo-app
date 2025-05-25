import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  //we define a state called todos, initially  it is an empty array
  const [todos, setTodos] = useState([]);

  //we define a function to add a new task
  const AddTask = (newTodo) => {
    //with spread operator we add a new one to the end of the current tasks
    setTodos([...todos, newTodo]);
  };

  const removeTask = (todoId) => {
    //filter(), checks each element one by one and adds only those that meet the condition to the new list
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }



console.log(todos);

  return (
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
        <CreateTodo onAddTask={AddTask} />
        <TodoList todos={todos} onRemoveTask = {removeTask} /> {/**we make a props to todo.jsx to apply the removeTask function when the xmark is clicked */}
      </div>
    </div>
  );
}

export default App;
