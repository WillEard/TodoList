import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(input); 

    setInput("");
  }

  return (

  <form className='ml-[70px] flex mb-4 max-w-md mx-auto mt-10' onSubmit={handleSubmit}>
      <input value={input} className='text-center w-1/2 px-4 py-2 mr-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500' type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter a task' required/>

      <button className=' bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded' type="submit">Add Task</button>
  </form>

  )
}

export default TodoForm

