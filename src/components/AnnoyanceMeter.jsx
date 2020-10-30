import React from 'react';
import { connect } from "react-redux";
import { setLevel } from "../redux/actions";
import WouldRatherButton from "./WouldRatherButton";
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations';
import "./AnnoyanceMeter.css";

const Wrapper = styled.div`
    margin-left: 4rem;
    margin-right: 4rem;
`;
const Heading = styled.h1`
    font-family: 'Pacifico', cursive;
    font-size: 50px;
    text-shadow: 5px 5px #000000;
`;
const FadeDown = styled.div`
    animation: 3s ${keyframes`${fadeInDownBig}`};
    background: rgb(10, 33, 34);
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 4px 4px black;
    font-family: 'Montserrat', sans-serif;
    min-height: 490px;
    padding: 10px;
`;
const LevelContainer = styled.div`
    cursor: pointer;
    display: inline-block;
    font-size: 30px;
    margin: 0 auto;
`
const LevelFour = styled.div`
    background: linear-gradient(0deg, red, rgb(80, 0, 0));
    border-radius: 20px 20px 0 0;
    box-shadow: 4px 4px black;
    color: black;
    font-family: 'Staatliches', cursive;
    font-size: 20px;
    height: 75px;
    width: 120px;

    :hover {
        border: 1px dotted white;
    }
    
`
const LevelThree = styled.div`
    background: linear-gradient(0deg, orange, red);
    box-shadow: 4px 4px black;
    color: black;
    font-family: 'Staatliches', cursive;
    font-size: 20px;
    height: 75px;
    width: 120px;

    :hover {
        border: 1px dotted white;
    }
`
const LevelTwo = styled.div`
    background: linear-gradient(0deg, yellow, orange);
    box-shadow: 4px 4px black;
    color: black;
    font-family: 'Staatliches', cursive;
    font-size: 20px;
    height: 75px;
    width: 120px;

    :hover {
        border: 1px dotted white;
    }
`
const LevelOne = styled.div`
    background: linear-gradient(0deg, green, yellow);
    border-radius: 0 0 20px 20px;
    box-shadow: 4px 4px black;
    color: black;    
    font-family: 'Staatliches', cursive;
    font-size: 20px;
    height: 75px;
    width: 120px;

    :hover {
        border: 1px dotted white;
    }
`
const SnarkyComment = styled.p`
    font-size: 20px;
`;

const AnnoyanceMeter = ({ setLevel, level }) => {

    return (
        <>
            <Wrapper>
                <Heading>How annoying is Sean today?</Heading>
                    <div className="row">
                        <div className="column">
                            <FadeDown>
                                <LevelContainer>
                                    🤬
                                    <LevelFour onClick={()=> setLevel("HIGH")}><br/>the worst</LevelFour>
                                    <LevelThree onClick={() => setLevel("MEDIUM")}><br/>horrible</LevelThree>
                                    <LevelTwo onClick={() => setLevel("LOW")}><br/>pretty bad</LevelTwo>
                                    <LevelOne onClick={() => setLevel("NONE")}><br/>not at all</LevelOne>
                                    😇
                                </LevelContainer>
                                <SnarkyComment>
                                    {level === "HIGH" ? <p>The worst? If I hear one more story about mousedining.com...</p> : null}
                                    {level === "MEDIUM" ? <p>Horrible? Must've been one dad joke too many.</p> : null}
                                    {level === "LOW" ? <p>Pretty bad? Another 80's style powerpoint?</p> : null}
                                    {level === "NONE" ? <p>Not at all???? Are you sure you have the right person?</p> : null}
                                </SnarkyComment>
                            </FadeDown>
                        </div>
                        <div className="column">
                            {!!level ? <WouldRatherButton level={level} /> : null}
                        </div>
                    </div>
            </Wrapper>
        </>
    );
}

const mapStateToProps = state => {
    const { level } = state;
    return level;
}

export default connect(mapStateToProps, { setLevel })(AnnoyanceMeter);