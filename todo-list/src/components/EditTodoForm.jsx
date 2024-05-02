import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {

  const [input, setInput] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(input, task.id); 

    setInput("");
  }

  return (

  <form className='flex mb-4 justify-center w-auto mt-10' action="" onSubmit={handleSubmit}>
      <input value={input} className='text-center w-1/2 px-4 py-2 mr-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500' type="text" onChange={(e) => setInput(e.target.value)} placeholder='Update task' />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Update Task</button>
  </form>

  )
}

export default EditTodoForm

