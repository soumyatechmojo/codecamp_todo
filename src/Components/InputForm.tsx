import React, {useRef} from 'react'

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent<EventTarget>)=>void
}
  
const InputForm:React.FC<Props> = ({todo,setTodo,handleAdd}) => {

  const inputRef = useRef<HTMLInputElement>(null)
  
  return (
  <form className='input' 
    onSubmit={(e)=>{
    handleAdd(e)
    inputRef.current?.blur();
    }}>
    <input type="input"
    ref={inputRef} 
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