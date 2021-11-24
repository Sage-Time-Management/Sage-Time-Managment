import React from "react";

const Todo = props => (
    <li onClick={() => props.deleteTodo(props.todo)}>{props.todo[0]}</li>
);

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo}
                    deleteTodo={props.deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;