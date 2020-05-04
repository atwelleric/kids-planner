import React from 'react';
import ToDoList from './ToDoList';
import './ToDos.css';

// Hou comment: as an extra challenge, consider refactoring this component to use hooks
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
	saveData = () => {
		// Hou comment: localStorage is a nice workaround in the absence of a database!
		localStorage.setItem(this.state.todo, JSON.stringify(this.state.todo));
	};
	retrieveData = () => {
		let retrievedData = localStorage.getItem(this.state.todo);
		let parsedData = retrievedData
			? JSON.parse(retrievedData)
			: this.state.todo;
		this.setState({
			todo: parsedData,
		});
	};
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
		// if (newTodo.text.length > 0) might be better here, since null and undefined would also pass the conditional on line 43
		if (newTodo.text !== '') {
			// Hou comment: great job with using spread operator to create a shallow copy of state!
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

	markDone = (key) => {
		const filteredTodos = this.state.todo.filter((todo) => todo.key !== key);
		this.setState({
			todo: filteredTodos,
		});
		this.saveData();
	};
	render() {
		// Hou comment: make sure to remove all console.log's from your codebase
		console.log(this.state.todo);
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
				<ToDoList
					todo={this.state.todo}
					markDone={this.markDone}
					save={this.saveData}
					load={this.retrieveData}
				/>
			</div>
		);
	}
}

export default ToDos;
