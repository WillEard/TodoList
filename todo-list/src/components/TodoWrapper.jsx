import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import ToDo from './Todo';
import EditTodoForm from './EditTodoForm';
import Navbar from './Navbar';
uuidv4();  

const TodoWrapper = () => {

  const [todos, setTodos] = useState ([{

  }]);

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])

    console.log(todos);
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }


  return (
    <>
    <Navbar />
    <div className='max-w-md text-black font-bold text-center mx-auto my-10'>
      <h1 className='text-3xl text-bold text-white'>Create a list below</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : ( 
              <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
        
      ))} 
    </div>
    </>
  )
}

export default TodoWrapper
