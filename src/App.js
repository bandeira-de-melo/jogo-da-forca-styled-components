import React, { useState } from "react";
import styled from "styled-components";
import { Jogo } from "./components/Jogo";

import image0 from "./assets/forca0.png";
import { Letras } from "./components/Letras";

import palavras from "./palavras";

const AppStyles = styled.div`
  background-color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [palavra, setPalavra] = useState("");
  const [estadoBotoes, setEstadoBotoes] = useState(true);
  return (
    <AppStyles>
      <Jogo
        images={image0}
        buttonText="Escolher Palavra"
        setEstadoBotoes={setEstadoBotoes}
        palavra={palavra}
        setPalavra={setPalavra}
        palavras={palavras}
      />
      <Letras estadobtn={estadoBotoes} />
    </AppStyles>
  );
}

export default App;
