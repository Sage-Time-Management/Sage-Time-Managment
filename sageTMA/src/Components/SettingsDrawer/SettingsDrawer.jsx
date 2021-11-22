import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Select } from 'antd';
import { LeftOutlined, SettingOutlined } from '@ant-design/icons';

import './SettingsDrawer.css'

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

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
            <Button type="primary" onClick={showDrawer} className="SettingsButton" style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}>
                {visible ? <LeftOutlined style={{ color: "#202020" }} /> : <SettingOutlined style={{ color: "#202020" }} />}
            </Button>
            <Drawer title="Settings" placement="left" onClose={onClose} visible={visible}>
                <p>Themes:</p>
                <Select defaultValue="Dark" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="Dark">Dark</Option>
                    <Option value="Light">Light</Option>
                    <Option value="Nebula">Nebula</Option>
                </Select>
                <p>Alarm Sound:</p>
                <Select defaultValue="Bell" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="Bell">Bell</Option>
                    <Option value="Siren">Siren</Option>
                </Select>
                <p>Notifications:</p>
                <Select defaultValue="Enabled" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="Enabled">Enabled</Option>
                    <Option value="Disabled">Disabled</Option>
                </Select>
            </Drawer>
        </>
    );
};

export default SettingsDrawer;