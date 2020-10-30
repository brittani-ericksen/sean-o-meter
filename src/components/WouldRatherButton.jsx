import React, { useState } from "react";
import WouldRatherDetail from "./WouldRatherDetail";
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from 'react-animations';

const FadeDown = styled.div`
    animation: 3s ${keyframes`${fadeInDownBig}`};
    background: rgb(10, 33, 34);
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 2px 3px 5px black;
    min-height: 490px;
    padding-left: 20px;
    padding-right: 20px;
`;
const BigButton = styled.div`
    background-color: gray;
    border-radius: 30px;
    box-shadow: 2px 2px black;
    cursor: pointer;
    height: 110px;  
    margin: 0 auto;  
    margin-top: 100px;
    width: 200px;

    :active {
        background-color: darkgray;
    }
`;
const ButtonText = styled.h2`
    font-family: 'Staatliches', cursive;
    font-size: 38px;
    padding-top: 10px;
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