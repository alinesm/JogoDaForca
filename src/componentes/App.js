// - [ ]  Chute (input e botão de chute)

import { useState } from "react";
import palavras from "../palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const [erro, setErro] = useState(0);
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [habilitarInput, setHabilitarInput] = useState(false);
  const [botaoChutar, setBotaoChutar] = useState(false);
  const [habilitarLetras, setHabilitarLetras] = useState(false);

  const arrayPalavras = palavras;

  function escolherPalavra() {
    setPalavraSorteada(
      arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)]
    );
    setHabilitarInput(true);
    setBotaoChutar(true);
    setHabilitarLetras(true);
  }

  return (
    <div className="App">
      <Jogo
        escolherPalavra={escolherPalavra}
        palavraSorteada={palavraSorteada}
      />
      <Letras habilitarLetras={habilitarLetras} />
      <Chute habilitarInput={habilitarInput} botaoChutar={botaoChutar} />
    </div>
  );
}

export default App;
