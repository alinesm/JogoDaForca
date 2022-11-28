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
  const [letrasChutadas, setLetrasChutadas] = useState([]);
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [valorInput, setValorInput] = useState("");
  const [chuteCorreto, setChuteCorreto] = useState(false);
  const [chuteFeitoErrado, setChuteFeitoErrado] = useState(false);
  const [corPalavra, setCorPalavra] = useState("");
  const [hasGameStarted, setHasGameStarted] = useState(false);

  function pegarInput(e) {
    setValorInput(e.target.value);
  }

  const arrayPalavras = palavras;

  function escolherPalavra() {
    setHasGameStarted(true);
    setLetrasChutadas([]);
    setLetrasErradas([]);
    setChuteCorreto(false);
    setChuteFeitoErrado(false);
    setValorInput("");
    setPalavraSorteada(
      arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)]
    );
    setHabilitarInput(true);
    setBotaoChutar(true);
    setHabilitarLetras(true);
    setLetrasCorretas([]);
    // setPalavraSorteada([]);
  }

  function recebeLetraChutada(event) {
    const letraClicada = event.target.innerHTML.toLowerCase();
    setLetraChutada(letraClicada);
    setLetrasChutadas((estado) => [...estado, letraClicada]);
    console.log(palavraSorteada);
    if (palavraSorteada.includes(letraClicada)) {
      console.log("clicada", letraClicada);
      if (!letrasCorretas.includes(letraClicada)) {
        const letrasAtuais = [...letrasCorretas, letraClicada];
        setLetrasCorretas(letrasAtuais);
        console.log("letras corretas", letrasAtuais);
      }
    } else if (!letrasErradas.includes(letraClicada)) {
      const letrasAtuais = [...letrasErradas, letraClicada];
      setLetrasErradas(letrasAtuais);
      console.log("letras erradas", letrasAtuais);
      if (letrasAtuais.length >= 6) {
        setHasGameStarted(false);
        setTimeout(() => alert("acabou"), 1000);
      }
    }
  }

  function cliqueNoChute() {
    console.log(valorInput);
    if (palavraSorteada.toLowerCase() === valorInput.toLowerCase()) {
      console.log("iguais");
      setChuteCorreto(true);
      setHasGameStarted(false);
    } else {
      console.log("diff");
      setChuteFeitoErrado(true);
      setChuteCorreto(false);
      setHasGameStarted(false);
    }
  }

  return (
    <div className="App">
      <Jogo
        escolherPalavra={escolherPalavra}
        palavraSorteada={palavraSorteada}
        letrasCorretas={letrasCorretas}
        letrasErradas={letrasErradas}
        valorInput={valorInput}
        setHasGameStarted={setHasGameStarted}
        chuteCorreto={chuteCorreto}
        chuteFeitoErrado={chuteFeitoErrado}
      />
      <Letras
        habilitarLetras={habilitarLetras}
        letraChutada={letraChutada}
        setLetraChutada={setLetraChutada}
        recebeLetraChutada={recebeLetraChutada}
        letrasChutadas={letrasChutadas}
        hasGameStarted={hasGameStarted}
      />
      <Chute
        pegarInput={pegarInput}
        valorInput={valorInput}
        cliqueNoChute={cliqueNoChute}
        habilitarInput={habilitarInput}
        botaoChutar={botaoChutar}
        chuteCorreto={chuteCorreto}
        corPalavra={corPalavra}
        hasGameStarted={hasGameStarted}
      />
    </div>
  );
}

export default App;
