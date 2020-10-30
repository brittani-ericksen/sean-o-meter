import React from "react";
import { iWouldRather } from "../wouldRather";
import styled from "styled-components";

const Detail = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
`;

const WouldRatherDetail = (props) => {
    const { level, index } = props;

    return (
        <>
            <Detail>
                {level === "HIGH" ? <p>{iWouldRather.high[index]} than listen to Sean.</p> : null}
                
                {level === "MEDIUM" ? <p>{iWouldRather.medium[index]} than listen to Sean.</p> : null}
                
                {level === "LOW" ? <p>{iWouldRather.low[index]} than listen to Sean.</p> : null}
                
                {level === "NONE" ? <p>{iWouldRather.none[index]} than listen to Sean.</p> : null}
            </Detail>
        </>
    );
}

export default WouldRatherDetail;