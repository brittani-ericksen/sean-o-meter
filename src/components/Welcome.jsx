import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
    font-family: 'Pacifico', cursive;
    font-size: 100px;
    text-shadow: 5px 5px #000000;
`;
const EnterButton = styled.div`
    background-color: white;
    border-radius: 30px;
    box-shadow: 4px 4px black;
    cursor: pointer;
    height: 100px;  
    margin: 0 auto;  
    width: 250px;

    :active {
        background-color: darkgray;
    }
`;
const ButtonText = styled.p`
    color: gray;
    font-family: 'Staatliches', cursive;
    font-size: 42px;
    padding-top: 22px;
    text-shadow: 2px 2px #000000;
`;

const Welcome = () =>  {

    return(
        <>
            <Heading>Sean-o-Meter</Heading>
            <a href={`/meter`}>
                <EnterButton>
                    <ButtonText>Click Here</ButtonText>
                </EnterButton>
            </a>
        </>
    )
}
export default Welcome;