import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import './TaskDrawer.css'

const TaskDrawer = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer} className="TaskButton" style={{ backgroundColor: "#ffffff", borderColor: "#ffffff"}}>
                {visible ? <RightOutlined style={{ color: "#202020"}}/> : <LeftOutlined style={{ color: "#202020"}}/>}
            </Button>
            <Drawer title="Tasks" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default TaskDrawer;