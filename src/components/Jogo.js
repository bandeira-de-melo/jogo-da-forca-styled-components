import React from "react";
import styled from "styled-components";


const JogoStyles = styled.div`
    width: 100%;
`
const Image = styled.img`
    width: 400px;
    margin-left: 53px;
`

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 59px;
`

const StartButton = styled.div`
    margin-top: 30px;
    margin-right: 56px;
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


export const Jogo = ({images, buttonText}) => (
    <JogoStyles>
        <TopContainer>
            <Image src={images} />
            <StartButton>{buttonText}</StartButton>
        </TopContainer>
    </JogoStyles>
)

