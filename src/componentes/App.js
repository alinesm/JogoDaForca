//clicar em uma letra
// cehcar se ela letra faz parte da palavra
// - se sim, preencher
// - se nao,
//- vai pro proxima figura
//- coloca a letra em cinza
//- incremneta numero de erros
//- se o numero de erros for igual numero maximo OU a pessoa chutar errado
//-boneco estara completo
//- todas letras desabilitadas
// - completa a palavra e fica na cor vermelha
// se completar o nome antes do numero total de erros, a palavra fica verde e teclado desabilitao

import { useState } from "react";
import palavras from "../palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [habilitarInput, setHabilitarInput] = useState(false);
  const [botaoChutar, setBotaoChutar] = useState(false);
  const [habilitarLetras, setHabilitarLetras] = useState(false);
  const [letraChutada, setLetraChutada] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);

  const arrayPalavras = palavras;

  function escolherPalavra() {
    setPalavraSorteada(
      arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)]
    );
    setHabilitarInput(true);
    setBotaoChutar(true);
    setHabilitarLetras(true);
    // setLetrasCorretas([]);
  }

  function recebeLetraChutada(event) {
    const letraClicada = event.target.innerHTML.toLowerCase();
    setLetraChutada(letraClicada);
    console.log(palavraSorteada);
    if (palavraSorteada.includes(letraClicada)) {
      console.log("clicada", letraClicada);
      if (!letrasCorretas.includes(letraClicada)) {
        const letrasAtuais = [...letrasCorretas, letraClicada];
        setLetrasCorretas(letrasAtuais);
        console.log("letras corretas", letrasAtuais);
      }
    } else {
      const letrasAtuais = [...letrasErradas, letraClicada];
      setLetrasErradas(letrasAtuais);
      console.log("letras erradas", letrasAtuais);
    }
  }

  return (
    <div className="App">
      <Jogo
        escolherPalavra={escolherPalavra}
        palavraSorteada={palavraSorteada}
        letrasCorretas={letrasCorretas}
      />
      <Letras
        habilitarLetras={habilitarLetras}
        letraChutada={letraChutada}
        setLetraChutada={setLetraChutada}
        recebeLetraChutada={recebeLetraChutada}
      />
      <Chute habilitarInput={habilitarInput} botaoChutar={botaoChutar} />
    </div>
  );
}

export default App;
