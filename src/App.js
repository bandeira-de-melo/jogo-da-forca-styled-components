import React, { useState } from "react";
import styled from "styled-components";
import { Jogo } from "./components/Jogo";

import image0 from "./assets/forca0.png"

const AppStyles = styled.div`
  background-color: #fff;
  width: 100%;
  height: auto;
`

const App = ()=>(
  <AppStyles>
    <Jogo images={image0}/>    
  </AppStyles>
)

export default App;
