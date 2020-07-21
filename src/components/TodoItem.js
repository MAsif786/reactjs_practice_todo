import React from 'react'
import PropTypes from 'prop-types'


function getStyle(completed){
 			
 			return { 
 				backgroundColor : "#f4f4f4",
 				borderBottom : "1px solid #ccc",
 				textDecoration: completed ? "line-through" : "none"
 			}
 		} 

function TodoItem(props) {

	const { id, title, completed } = props.todo;

	return (
		<div style={ getStyle(completed) }>
			<p>
				<input type="checkbox" onChange={ () => markComplete() } /> {' '}
				{ title }
			</p>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}


function markComplete() {
	alert("")
	console.log("todo")
}


export default TodoItem
