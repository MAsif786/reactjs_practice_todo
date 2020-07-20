import React, { useState } from 'react';
import Todos from './components/Todos'
import logo from './logo.svg';
import './App.css';

function App() {


  // test = 
  const [todos, setTodos] = useState(
    {
      todos:[
        {
          id : 1,
          title : 'Please Sleep at time'
        },
        {
          id : 2,
          title : 'Go to sleep'
        },
        {
          id : 3,
          title : 'I am done.'
        }
      ]
    }
  )

  return (

    <div className="App">
      <Todos todos={todos.todos} />
    </div>
  );
}

export default App;
