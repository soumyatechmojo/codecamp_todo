import React from 'react'
import "./style.css"
import {todo} from "../model"

interface Props{
  todos: todo[],
  setTodos:React.Dispatch<React.SetStateAction<todo[]>>
}

const TodoList:React.FC<Props> = ( {todos,setTodos} ) => {
  return (
    <div className='todos'>{
      todos.map(todo=> (
        <li>{todo.todo}</li>
      ))
    }</div>
  )
}

export default TodoList