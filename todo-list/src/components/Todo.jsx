import React, {useState} from 'react'
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


const ToDo = ({task, deleteTodo, editTodo}) => {

  const [isActive, setActive] = useState(false);

  const toggleComplete = () => {
    setActive(!isActive);
  }

  return (
    <div className='max-w-md mx-auto mt-5 bg-white rounded'>
      <div className="p-3 flex items-center justify-between  cursor-pointer">
          <div onClick={() => toggleComplete()} className="flex items-center">
              <div className="ml-2 flex flex-col">
                  <p className={isActive ? 'line-through': ''} >{task.task}</p>
              </div>
          </div>
          <div className='flex items-end px-4 space-x-2'>
            <FaPen className='hover:text-gray-500' onClick={() => editTodo(task.id)}/>
            <FaTrash className='hover:text-gray-500' onClick={() => deleteTodo(task.id)} />
          </div>
      </div>
    </div>
  )
}

export default ToDo
