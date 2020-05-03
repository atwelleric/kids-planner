import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './ToDos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToDoList(props) {
	const todo = props.todo;
	const todoList = todo.map((todo) => {
		return (
			<div className='list' key={todo.key}>
				<p>
					{todo.text}
					<span className='checkMark'>
						<FontAwesomeIcon
							icon={faCheck}
							onClick={() => props.markDone(todo.key)}
						/>
					</span>
				</p>
			</div>
		);
	});
	return <div>{todoList}</div>;
}

export default ToDoList;
