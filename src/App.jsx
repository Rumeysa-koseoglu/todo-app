import './App.css'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='app'>
      <div style={{ width: "500px", display:"flex", flexDirection:"column", alignItems:"center",
         justifyContent:"center"}}>
    <CreateTodo/>
    <TodoList/>
      </div>
    </div>
  )
}

export default App
