import React,{useState} from 'react';
import "./App.css"
import Form from './Components/InputForm'
import TodoList from './Components/TodoList';
import { todo } from "./model"

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<todo[]>([])
  
  const handleAdd = (e:React.FormEvent<EventTarget>) =>{
    e.preventDefault();
    if (todo){
      setTodos( [...todos, {id:Date.now(), todo, isDone:false}] );
    }
  }
  return (
    <div className="App">          
      <span className='heading'>DAILYTASK</span>
      <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos= {setTodos} />
    </div>
  );
}
export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               