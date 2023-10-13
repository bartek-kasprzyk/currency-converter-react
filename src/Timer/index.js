import { useState, useEffect } from "react";
import { Clock } from "./styled";

const Timer = () => {
    const [date, setDate] = useState(new Date());
    const localeDate1 = date.toLocaleDateString(undefined, { weekday: "long" });
    const localeDate2 = date.toLocaleDateString(undefined, { day: "numeric", month: "long" }) + ", " + date.toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric", second: "numeric" });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Clock>
            <span>
                Dzisiaj jest {localeDate1}
            </span>
            <span>
                {localeDate2}
            </span>
        </Clock>
    );
};

export default Timer;