import React, { useState } from "react";
import WouldRatherDetail from "./WouldRatherDetail";
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations';

const FadeDown = styled.div`
    animation: 4s ${keyframes`${fadeInDownBig}`};
    background: rgb(10, 33, 34);
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 4px 4px black;
    min-height: 490px;
    padding-left: 20px;
    padding-right: 20px;
`;
const BigButton = styled.div`
    background-color: gray;
    border-radius: 50%;
    cursor: pointer;
    height: 150px;  
    margin: 0 auto;  
    margin-top: 100px;
    width: 150px;

    :active {
        background-color: darkgray;
    }
`;
const ButtonText = styled.p`
    font-family: 'Staatliches', cursive;
    font-size: 38px;
    padding-top: 20%;
    text-shadow: 2px 2px #000000;
`;

const WouldRatherButton = (props) => {
    const { level } = props;
    const [index, setIndex] = useState();
    
    const randomInt = (min, max) => {
        const int = Math.floor(Math.random() * (max - min + 1)) + min;
        return int;
    }
    
    const _handleClick = () => {
        const int = randomInt(1,10)
        setIndex(int);
    } 

    return (
        <div>
                <FadeDown>
                    <BigButton onClick={() => _handleClick()}>
                        <ButtonText>I would rather</ButtonText>
                    </BigButton>
                    {!!index ? <WouldRatherDetail level={level} index={index} />: null}
                </FadeDown>
        </div>
    );
}

export default WouldRatherButton;