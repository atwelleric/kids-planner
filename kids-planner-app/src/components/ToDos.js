import React from 'react';
import ToDoList from './ToDoList';
import './ToDos.css';

class ToDos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: [],
			currentTodos: {
				text: '',
				key: '',
			},
		};
	}
	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			currentTodos: {
				text: event.target.value,
				key: Math.random(),
			},
		});
	};

	addItem = (event) => {
		event.preventDefault();
		const newTodo = this.state.currentTodos;
		if (newTodo.text !== '') {
			const newTodos = [...this.state.todo, newTodo];
			this.setState({
				todo: newTodos,
				currentTodos: {
					text: '',
					key: '',
				},
			});
		}
	};
	render() {
		return (
			<div className='todo-div'>
				<header>
					<form id='todo-form' onSubmit={this.addItem}>
						<input
							type='text'
							placeholder="Today's Tasks"
							value={this.state.currentTodos.text}
							onChange={this.handleChange}
						/>

						<button type='submit'>Submit</button>
					</form>
				</header>
				<ToDoList todo={this.state.todo} />
			</div>
		);
	}
}

export default ToDos;
