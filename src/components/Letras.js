import React from "react";
import styled from "styled-components";


const LetrasWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    width: 664px;
    height: auto;
    background-color: #fff;
`
const ButtonLetra = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 3px;
    box-shadow: none;
    border: none;
    background-color: #9FAAB5;
    text-transform: uppercase;
    
`


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export const Letras = ({estadobtn})=> {
    let lettersButtons="";
    
    function disableButton(letra){
        console.log(letra)
        console.log(lettersButtons)
        //criar uma copia da array original com os botões clicados desabilitados
        
    }

    
    return (
        <LetrasWrapper> 
                 {

            lettersButtons = alfabeto.map((letra, index) => {
                return <ButtonLetra disabled={estadobtn} onClick={()=> disableButton(letra)} key={index}> {letra} </ButtonLetra>    
            }
        )
    }

        </LetrasWrapper>       
    )
    
}
    



