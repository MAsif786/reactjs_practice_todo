import React, { useState } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
// import logo from './logo.svg';
import uuid from 'uuid';

function Todo() {

  // test = 
  const [todos, setTodos] = useState(
    {
      todos:[
        {
          id : 1,
          title : 'Please Sleep at time',
          "completed":false
        },
        {
          id : 2,
          title : 'Go to sleep',
          "completed":false
        },
        {
          id : 3,
          title : 'I am done.',
          "completed":false
        }
      ]
    }
  )


const markComplete = (id) => {
  
    // console.log(setTodos);
    setTodos({todos : todos.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      // console.log(todo)
      }
      return todo
    })
    })
  
}

const deleteTodo = (id) => {
  
  const newList = todos.todos.filter((item) => item.id !== id);
  setTodos({"todos" : newList});
}

const addTodo = (title) => {
  const newTodo = {
    id :  uuid.v4(),
    title,
    completed : false
  }
  setTodos({ "todos" : [...todos.todos, newTodo] })
}
  return (
    <div>
      <AddTodo addTodo={ addTodo } />
      <Todos todos={todos.todos}  markComplete = { markComplete } deleteTodo= { deleteTodo } />
    </div>
  );
}

export default Todo;
