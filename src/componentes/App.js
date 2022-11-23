// - [ ]  Chute (input e botão de chute)

import { useState } from "react";
import palavras from "../palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  return (
    <div className="App">
      <Jogo />
      <Letras />
      <Chute />
    </div>
  );
}

export default App;
