import { useState } from "react";
import palavras from "../palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [habilitarInput, setHabilitarInput] = useState(false);
  const [listaLetrasChutadas, setListaLetrasChutadas] = useState([]);
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [valorInput, setValorInput] = useState("");
  const [chuteCorreto, setChuteCorreto] = useState(false);
  const [chuteErrado, setChuteErrado] = useState(false);
  const [jogoComecou, setJogoComecou] = useState(false);

  function pegarInput(e) {
    setValorInput(e.target.value);
  }

  const arrayPalavras = palavras;

  function botaoEscolherPalavra() {
    setPalavraSorteada(
      arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)]
    );
    setJogoComecou(true);
    setListaLetrasChutadas([]);
    setLetrasErradas([]);
    setChuteCorreto(false);
    setChuteErrado(false);
    setValorInput("");
    setHabilitarInput(true);
    setLetrasCorretas([]);
  }

  function recebeLetraChutada(event) {
    const letraClicada = event.target.innerHTML.toLowerCase();
    setListaLetrasChutadas((estado) => [...estado, letraClicada]);
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
        setJogoComecou(false);
      }
    }
  }

  function cliqueNoChute() {
    console.log(valorInput);
    if (palavraSorteada.toLowerCase() === valorInput.toLowerCase()) {
      console.log("iguais");
      setChuteCorreto(true);
      setJogoComecou(false);
    } else {
      console.log("diferentes");
      setChuteErrado(true);
      setChuteCorreto(false);
      setJogoComecou(false);
    }
  }

  return (
    <div className="App">
      <Jogo
        botaoEscolherPalavra={botaoEscolherPalavra}
        palavraSorteada={palavraSorteada}
        letrasCorretas={letrasCorretas}
        letrasErradas={letrasErradas}
        setJogoComecou={setJogoComecou}
        chuteCorreto={chuteCorreto}
        chuteErrado={chuteErrado}
      />
      <Letras
        recebeLetraChutada={recebeLetraChutada}
        listaLetrasChutadas={listaLetrasChutadas}
        jogoComecou={jogoComecou}
      />
      <Chute
        pegarInput={pegarInput}
        valorInput={valorInput}
        cliqueNoChute={cliqueNoChute}
        habilitarInput={habilitarInput}
        chuteCorreto={chuteCorreto}
        jogoComecou={jogoComecou}
      />
    </div>
  );
}

export default App;
