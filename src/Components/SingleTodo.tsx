import React, {useState, useRef, useEffect} from 'react'
import { todo } from '../model'
import {AiFillEdit , AiFillDelete} from "react-icons/ai"
import { MdDone } from "react-icons/md"
import './style.css'
import TodoList from './TodoList'

type Props = {
    todo: todo,
    todos: todo[],
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>

}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    
    const handledone = (id:number)=>
        setTodos(todos.map((todo)=>
        todo.id === id ? {...todo, isDone : !todo.isDone}:todo
        )
    );

    const handledelete = (id:number)=>{
        setTodos(todos.filter((todo)=>
        todo.id !== id
        ))
    }

    const handleEdit = (e:React.FormEvent, id:number)=>{
        e.preventDefault();
        setTodos(
            todos.map((todo)=>
            (todo.id===id?{...todo, todo:editTodo}:todo)
            )
        );
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();       
    }, [edit])
    
    
    
  return (
    <form className='todo_form' onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
            edit ? (
                <input value={editTodo}
                ref={inputRef}
                onChange={(e)=>setEditTodo(e.target.value)} 
                className='todo_form--text'/>
                ):todo.isDone?
                (
                    <s className='todo_form--text'>{todo.todo}</s>
                ):(
                    <span className='todo_form--text'>{todo.todo}</span>
                )
        }

        <div>
            <span className="icon" 
                onClick={()=>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                }}
            >
                <AiFillEdit />
            </span>
            
            <span className="icon" onClick={() =>handledelete(todo.id)}>
                <AiFillDelete />
            </span>
            
            <span className="icon" onClick={() =>handledone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo