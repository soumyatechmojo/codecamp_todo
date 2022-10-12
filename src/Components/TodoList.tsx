import React from 'react'
import "./style.css"
import {todo} from "../model"
import SingleTodo from './SingleTodo'

interface Props{
  todos: todo[],
  setTodos:React.Dispatch<React.SetStateAction<todo[]>>
}

const TodoList:React.FC<Props> = ( {todos,setTodos} ) => {
  return (
    <div className='todos'>{
      todos.map(todo=> (
        <li><SingleTodo
        todo={todo}
        key={todo.id}
        todos={todos}
        setTodos={setTodos}/>
        </li>
      ))
    }</div>
  )
}

export default TodoList