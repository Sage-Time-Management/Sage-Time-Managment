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
        this.state = { todoInput: "", todoDesc: "", todoTime: "" };
    }

    handleSubmit = event => {
        event.preventDefault();
        taskMins = moment.duration(this.state.todoTime).get('minutes')
        taskSec = moment.duration(this.state.todoTime).get('seconds')
        taskTime = taskSec + (taskMins*60)
        this.props.addTodo([this.state.todoInput, this.state.todoDesc, taskTime]);
        console.log([this.state.todoInput, this.state.todoDesc, taskTime])
        this.state.todoInput = "";
        this.state.todoDesc = "";
        this.state.todoTime = "";
    };

    handleChange = event => {
        this.setState({ todoInput: event.target.value });
    };

    handleDescChange = event => {
        this.setState({ todoDesc: event.target.value });
    };

    onTimeChange = time => {
        this.setState({ todoTime: time })
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <Input
                    type="text"
                    placeholder="Activity Name"
                    value={this.state.todoInput}
                    onChange={event => this.handleChange(event)}
                />
                <Input
                    type="text"
                    placeholder="Activity Description"
                    value={this.state.todoDesc}
                    onChange={event => this.handleDescChange(event)}
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