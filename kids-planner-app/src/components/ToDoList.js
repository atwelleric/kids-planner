import React from 'react';

function ToDoList (props) {
    const todo = props.todo;
    const todoList = todo.map(todo => {
        return <div className="list" key={todo.key}>
            <p>{todo.text}</p>
        </div>
    })
    return (
    <div>{todoList}</div>
    )

}

export default ToDoList;