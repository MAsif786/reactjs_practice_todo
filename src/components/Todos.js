import React from 'react';
import TodoItem from './TodoItem'

function Todos(props) {

  console.log(props.todos)
  return (
  	props.todos.map((todo) => (
  		<TodoItem key={ todo.id } todo={ todo } />
  		))
  );
}


export default Todos;
