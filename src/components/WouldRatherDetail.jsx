import React from "react";
import { iWouldRather } from "../wouldRather";



const WouldRatherDetail = (props) => {
    const { level } = props;
    
    const randomInt = (min, max) => {
        const int = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("int: ", int);
        return int;
    }

    let int = randomInt(0,9);

    return (
        <>
            {level === "HIGH" ? <h2>I would much rather {iWouldRather.high[int]} than listen to Sean today.</h2> : null}
            {level === "MEDIUM" ? <h2>I would much rather {iWouldRather.medium[int]} than listen to Sean today.</h2> : null}
            {level === "LOW" ? <h2>I would much rather {iWouldRather.low[int]} than listen to Sean today.</h2> : null}
            {level === "NONE" ? <h2>I would much rather {iWouldRather.none[int]} than listen to Sean today.</h2> : null}
        </>
    );
}

export default WouldRatherDetail;