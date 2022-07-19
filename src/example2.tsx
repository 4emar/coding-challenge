import {FC, useEffect, useState} from "react";

const Component: FC = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsElapsed(secondsElapsed + 1);
        }, 1000);
        //added a clearInterval call to prevent memory leak, leading to errors
        return () => clearInterval(interval);
    }, [secondsElapsed, setSecondsElapsed]);

    return (
        <span>
            Seconds elapsed: {secondsElapsed}
    </span>
    );
};