import React from 'react'
import PropTypes from 'prop-types'


function TodoItem(props) {

	const { id, title, completed } = props.todo;

	const getStyle = (completed) =>{
 			
 			return {
 				padding: "10px 20px", 
 				backgroundColor : "#f4f4f4",
 				borderBottom : "1px solid #ccc",
 				textDecoration: completed ? "line-through" : "none"
 			}
 		}

 	const btnStyle ={

 			backgroundColor:"#ff0000",
 			color: "#fff",
 			border: 'none',
 			padding: '5px 10px',
 			borderRadius: '50%',
 			cursor: "pointer",
 			float: "right"

 	}


	return (
		<div style={ getStyle(completed) }>
			<p>
				<input type="checkbox" onChange={ props.markComplete.bind(this, id) } /> {' '}
				{ title }
				<button style={ btnStyle } onClick={ props.deleteTodo.bind(this, id) } >
					&times;
				</button>
			</p>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}



export default TodoItem
