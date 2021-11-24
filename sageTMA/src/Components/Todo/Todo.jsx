import React from "react";
import TodoList from "../ToDoList/ToDoList";
import TodoForm from "../TodoForm/TodoForm";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["Enter your tasks below."],
        };
    }

    addTodo = todo => {
        this.setState(prevState => ({
            todos: [...prevState.todos, todo],
        }));
    };

    deleteTodo = value => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo !== value),
        }));
    };

    render() {
        return (
            <div className="Todo">
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <TodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}
export default Todo;