import React from 'react'
import { todo } from '../model'
import {AiFillEdit , AiFillDelete} from "react-icons/ai"
import { MdDone } from "react-icons/md"
import './style.css'

type Props = {
    todo: todo,
    todos: todo[],
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>

}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form className='todo_form'>
    <span className='todo_form--text'>
        {todo.todo}

        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            
            <span className="icon">
                <AiFillDelete />
            </span>
            
            <span className="icon">
                <MdDone />
            </span>
        </div>
    </span>
    </form>
  )
}

export default SingleTodo