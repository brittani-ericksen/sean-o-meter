import React, { useState } from 'react';
import { connect } from "react-redux";
import { setLevel } from "../redux/actions";
import styled from "styled-components";

const RageContainer = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 auto;
    width: 150px;
`
const LevelOne = styled.div`
    background: linear-gradient(0deg, green, yellow);
    border-radius: 0px 0px 10px 10px;
    height: 50px;
    width: 150px;
`
const LevelTwo = styled.div`
    background: linear-gradient(0deg, yellow, orange);
    height: 50px;
    width: 150px;
`
const LevelThree = styled.div`
    background: linear-gradient(0deg, orange, red);
    height: 50px;
    width: 150px;
`
const LevelFour = styled.div`
    background: linear-gradient(0deg, red, darkred);
    border-radius: 10px 10px 0px 0px;
    height: 50px;
    width: 150px;
`

const AnnoyanceMeter = ({ setLevel, level }) => {

    return (
        <>
            <h1>How annoying is Sean today?</h1>
            <RageContainer>
                <LevelFour onClick={()=> setLevel("HIGH")}/>
                <LevelThree onClick={() => setLevel("MEDIUM")}/>
                <LevelTwo onClick={() => setLevel("LOW")}/>
                <LevelOne onClick={() => setLevel("NONE")}/>
            </RageContainer>
            <p>Annoyance Level: {level}.</p>
        </>
    );
}

const mapStateToProps = state => {
    const { level } = state;
    return level;
}

export default connect(mapStateToProps, { setLevel })(AnnoyanceMeter);