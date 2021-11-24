import React, { Children, useState } from "react";
import { Button } from 'antd';
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons"
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Countdown.css";

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Time's Up!</div>;
    }

    function MakeTwoDigits(num) {
        if (num >= 0 && num <= 9) {
            return "0" + num;
        } else {
            return "" + num;
        }
    }

    const hours = Math.floor(remainingTime / 3600)
    const minutes = MakeTwoDigits(Math.floor((remainingTime % 3600) / 60))
    const seconds = MakeTwoDigits(remainingTime % 60)

    return (
        <div className="timer">
            {/* <div className="text">Remaining</div> */}
            <div className="value">{`${minutes}:${seconds}`}</div>
            {/* <div className="text">seconds</div> */}
        </div>
    );
};

const Countdown = (props) => {
    const [key, setKey] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const changeKey = () => {
        setKey(prevKey => prevKey + 1)
    }

    if (props.count > key){
        console.log(key)
        changeKey()
    }

    const handleComplete = () =>{
        //props.deleteCurrentTodo();
    }

    return (
        <>
            <h1>CURRENT ACTIVITY: <br /> {props.todos[0][0]}</h1>
            <div className="timer-wrapper">
                <Button type="primary" shape="circle" icon={<PauseOutlined />} style={{ backgroundColor: "#ffffff", borderColor: "#ffffff", color: "#202020" }} onClick={() => setIsPlaying(false)} />
                <CountdownCircleTimer
                    key={key}
                    size={300}
                    strokeWidth={24}
                    isPlaying={isPlaying}
                    trailColor={'#2a2a2a'}
                    duration={props.todos[0][2]}
                    colors={"#ffffff"}
                    onComplete={() => handleComplete()}
                >
                    {renderTime}
                </CountdownCircleTimer>
                <Button type="primary" shape="circle" icon={<CaretRightOutlined />} style={{ backgroundColor: "#ffffff", borderColor: "#ffffff", color: "#202020" }} onClick={() => setIsPlaying(true)} />
            </div>
            <p className="Description">{props.todos[0][1]}</p>
        </>
    );
};

export default Countdown;