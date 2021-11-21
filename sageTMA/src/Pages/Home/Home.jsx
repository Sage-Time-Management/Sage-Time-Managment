import React from "react";

import "./Home.css"
import Countdown from "../../Components/Countdown/Countdown";
import TaskDrawer from "../../Components/TaskDrawer/TaskDrawer";
import SettingsDrawer from "../../Components/SettingsDrawer/SettingsDrawer";

const Home = () => {
    return (
        <>
            <Countdown/>
            <TaskDrawer/>
            <SettingsDrawer/>
        </>
    );
};

export default Home;