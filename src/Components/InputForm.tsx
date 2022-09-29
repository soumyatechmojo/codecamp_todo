import React from 'react'

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: ()=>void
}
  
const InputForm:React.FC<Props> = ({todo,setTodo}) => {
  return (
    <form className='input'>
        <input type="input" 
        value={todo}
        onChange={
          (e)=>setTodo(e.target.value)
        }
        placeholder='Enter a Task' className='input_box' />
        
        <button className='input_submit' type='submit'>
            Go
        </button>

    </form>
  )
}

export default InputForm