import React from "react";
import styled from "styled-components";
import palavras from "../palavras";

const JogoStyles = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 400px;
  margin-left: 53px;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 59px;
`;

const StartButton = styled.div`
  margin-top: 30px;
  margin-right: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 8px;
  background-color: #27ae60;
  color: #fff;
  font-size: 20px;
`;
const PalavraContainer = styled.div`
  display: flex;
  width: fit-content;
`;

const CaixaLetra = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 2px solid black;
    margin: 0 1px;
`

export const Jogo = ({
  images,
  buttonText,
  setEstadoBotoes,
  palavra,
  setPalavra,
  palavras,
}) => {
    
    
    function startGame(listaPalavras) {
    const sorteio = (listaPalavras) => listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    const palavraSorteada = sorteio(listaPalavras);
    const letrasPalavra = [...palavraSorteada]
    

    setEstadoBotoes(false);
  }

  return (
    <JogoStyles>
      <TopContainer>
        <Image src={images} />
        <>
          <StartButton onClick={() => startGame(palavras)}>
            {buttonText}
          </StartButton>
          <PalavraContainer>
            {letrasPalavra? {letrasPalavra.map(letra =>  <CaixaLetra>{letra}</CaixaLetra>}}
          </PalavraContainer>
        </>
      </TopContainer>
    </JogoStyles>
  );
};
