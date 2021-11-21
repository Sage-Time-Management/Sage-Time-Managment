import React from "react";
import { PlayCircleFilled, PauseCircleFilled } from "@ant-design/icons"
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

const Countdown = () => {
    return (
        <>
            <div className="timer-wrapper">
            <PauseCircleFilled style={{ color: "#ffffff", fontSize: "300%" }} />
                <CountdownCircleTimer
                    size={300}
                    strokeWidth={24}
                    isPlaying
                    trailColor={'#2a2a2a'}
                    duration={10}
                    colors={"#ffffff"}
                // onComplete={() => [true, 1000]}
                >
                    {renderTime}
                </CountdownCircleTimer>
                <PlayCircleFilled style={{ color: "#ffffff", fontSize: "300%" }} />
            </div>
        </>
    );
};

export default Countdown;