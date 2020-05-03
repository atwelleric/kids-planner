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
	saveData = () => {
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

	markDone = (key) => {
		const filteredTodos = this.state.todo.filter((todo) => todo.key !== key);
		this.setState({
			todo: filteredTodos,
		});
		this.saveData();
	};
	render() {
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
