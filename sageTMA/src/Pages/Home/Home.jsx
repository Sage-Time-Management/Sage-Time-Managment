import React from "react";

import "./Home.css"
import Countdown from "../../Components/Countdown/Countdown";
import TaskDrawer from "../../Components/TaskDrawer/TaskDrawer";
import SettingsDrawer from "../../Components/SettingsDrawer/SettingsDrawer";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [['Example Activity', 'All of the wonderful information about your activity goes here.', 1]],
            count: 0
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
        this.state.count = this.state.count + 1
        console.log(this.state.count)
    };

    deleteCurrentTodo = () => {
        this.setState(this.state.todos.shift())
        this.state.count = this.state.count + 1
        console.log(this.state.count)
    }


    render() {
        return (
            <>
                <h2 style={{color: 'white', fontSize: '50px', paddingLeft: '20px'}}>CHRONOS</h2>
                <Countdown todos={this.state.todos} deleteCurrentTodo={this.deleteCurrentTodo} count={this.state.count}/>
                <TaskDrawer addTodo={this.addTodo} todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <SettingsDrawer />
            </>
        );
    }
}

export default Home;