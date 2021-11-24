import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import { RightOutlined, UnorderedListOutlined } from '@ant-design/icons';

import './TaskDrawer.css'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../ToDoList/ToDoList';

const TaskDrawer = (props) => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };


    return (
        <>
            <Button type="primary" onClick={showDrawer} className="TaskButton" style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}>
                {visible ? <RightOutlined style={{ color: "#202020" }} /> : <UnorderedListOutlined style={{ color: "#202020" }} />}
            </Button>
            <Drawer title="Tasks" placement="right" onClose={onClose} visible={visible}>
                <TodoList todos={props.todos} deleteTodo={props.deleteTodo} />
                <TodoForm addTodo={props.addTodo} />
            </Drawer>
        </>
    );
};

export default TaskDrawer;