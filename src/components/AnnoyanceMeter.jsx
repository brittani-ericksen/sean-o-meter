import React, { useState } from 'react';
import { connect } from "react-redux";
import { setLevel } from "../redux/actions";
import WouldRatherButton from "./WouldRatherButton";
import WouldRatherDetail from "./WouldRatherDetail";
import styled from "styled-components";

const RageContainer = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    display: inline-block;
    margin: 0 auto;
`
const LevelOne = styled.div`
    background: linear-gradient(0deg, green, yellow);
    height: 75px;
    width: 100px;
`
const LevelTwo = styled.div`
    background: linear-gradient(0deg, yellow, orange);
    height: 75px;
    width: 100px;
`
const LevelThree = styled.div`
    background: linear-gradient(0deg, orange, red);
    height: 75px;
    width: 100px;
`
const LevelFour = styled.div`
    background: linear-gradient(0deg, red, rgb(80, 0, 0));
    height: 75px;
    width: 100px;
`

const AnnoyanceMeter = ({ setLevel, level }) => {

    return (
        <>
            <h1>How insufferable is Sean today?</h1>
            <RageContainer>
                HIGH
                <LevelFour onClick={()=> setLevel("HIGH")}/>
                <LevelThree onClick={() => setLevel("MEDIUM")}/>
                <LevelTwo onClick={() => setLevel("LOW")}/>
                <LevelOne onClick={() => setLevel("NONE")}/>
                LOW
            </RageContainer>
            {level === "HIGH" ? <p>He must be telling stories about mouse dining again...</p> : null}
            {level === "MEDIUM" ? <p>One dad joke too many for someone without kids.</p> : null}
            {level === "LOW" ? <p>Another 80's style powerpoint?</p> : null}
            {level === "NONE" ? <p>Impossible!</p> : null}
            <WouldRatherDetail level={level} />
        </>
    );
}

const mapStateToProps = state => {
    const { level } = state;
    return level;
}

export default connect(mapStateToProps, { setLevel })(AnnoyanceMeter);