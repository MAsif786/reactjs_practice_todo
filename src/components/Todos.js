import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function Todos(props) {

  // console.log(props)
  return (
  	props.todos.map((todo) => (
  		<TodoItem key={ todo.id }
  		 todo={ todo } markComplete = { props.markComplete } deleteTodo = { props.deleteTodo } />
  		))
  );
}


Todos.propTypes = {
	todo: PropTypes.object.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	markComplete: PropTypes.func.isRequired
}

export default Todos;
