import React from "react";
import 'antd/dist/antd.css';
import { Input, TimePicker } from 'antd';
import moment from 'moment';

const format = 'mm:ss';

var taskMins = ""
var taskSec = ""
var taskTime = ""

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoInput: "", todoTime: "" };
    }

    handleSubmit = event => {
        event.preventDefault();
        taskMins = moment.duration(this.state.todoTime).get('minutes')
        taskSec = moment.duration(this.state.todoTime).get('seconds')
        taskTime = taskSec + (taskMins*60)
        console.log(taskTime)
        this.props.addTodo([this.state.todoInput, taskTime]);
        console.log([this.state.todoInput, taskTime])
        this.state.todoInput = "";
        this.state.todoTime = "";
    };

    handleChange = event => {
        this.setState({ todoInput: event.target.value });
    };

    // handleTimeChange = event => {
    //     this.setState({ todoTime: event.target.value });
    // }

    onTimeChange = time => {
        this.setState({ todoTime: time })
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <Input
                    type="text"
                    placeholder="Add todo"
                    value={this.state.todoInput}
                    onChange={event => this.handleChange(event)}
                />
                <TimePicker
                    type="text"
                    value={this.state.todoTime}
                    onChange={this.onTimeChange}
                    defaultValue={moment('2:00', format)}
                    format={format}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TodoForm;