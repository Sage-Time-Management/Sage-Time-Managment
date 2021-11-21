import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import './SettingsDrawer.css'

const SettingsDrawer = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer} className="SettingsButton" style={{ backgroundColor: "#ffffff", borderColor: "#ffffff"}}>
                {visible ? <LeftOutlined style={{ color: "#202020"}} /> : <RightOutlined style={{ color: "#202020"}}/>}
            </Button>
            <Drawer title="Settings" placement="left" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default SettingsDrawer;