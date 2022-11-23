import React from "react";
import styled from "styled-components";


const JogoStyles = styled.div`
    width: 100%;
`

const StartButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 60px;
    border-radius: 8px;
    background-color: #27AE60;
    color: #fff;
    font-size: 20px;
`

const Image = styled.img`
    width: 400px;
`


export const Jogo = (props) => (
    <JogoStyles>
        <Image src={props.images} />
        <StartButton>Escolher Palavra</StartButton>
    </JogoStyles>
)