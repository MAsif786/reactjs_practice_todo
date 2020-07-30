import React from 'react'

export class AddTodo extends React.Component {

	state = {
		title : ""
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value })
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: "flex" }}>
				<input 
					type = "text"
					name = "title"
					style = {{ flex: 10, padding : "5px" }}
					placeholder = "Add Todo..."
					value = { this.state.title }
					onChange = { this.onChange }
				/>

				<input
					
					type = "submit"
					value = "Add"
					className = "btn"
					style = {{
					 flex: 1,
					 display: "inline-block",
					 background:"#555", color:"#fff",
					 border:"none", padding:"7px 20px"
					}}
				/>
			</form>
		)
	}
}

export default AddTodo