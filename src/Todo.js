import React, { useState, useEffect } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import axios from 'axios'

// import uuid from 'uuid';

function Todo() {

  // test = 
  const [todos, setTodos] = useState(
    {
      todos:[]
    }
  )

useEffect(() => {
    // code to run on component mount
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos({todos: res.data}))
  }, [])

const markComplete = (id) => {
  
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      completed: !todos.todos.filter((item) => item.id === id)[0].completed
    });

    // Not work update for new todo's  therefore not added to then
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
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      const newList = todos.todos.filter((item) => item.id !== id);
      setTodos({"todos" : newList});
    })
}

const addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title,
      completed:false
    }
  )
    .then(res => setTodos({ "todos" : [...todos.todos, res.data] }) )
  
}
  return (
    <div>
      <AddTodo addTodo={ addTodo } />
      <Todos todos={todos.todos}  markComplete = { markComplete } deleteTodo= { deleteTodo } />
    </div>
  );
}

export default Todo;
