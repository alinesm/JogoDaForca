import React from "react";
// Jogo (imagem da forca, botão de iniciar, palavra do jogo)
// Input e letras passam a ficar habilitadas
//  A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada
// Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar
// Aparece a palavra a ser adivinhada na tela, com um underline ( `_` ) para cada letra que a palavra possui
// Se você transformar a palavra em um array, será muito mais fácil de fazer as operações e comparações que irão acontecer no jogo 😉

function Jogo(props) {
  // if (props.letrasErradas.length >= 6 || !props.chuteCorreto) {
  //   console.log("red");
  // }
  if (
    props.palavraSorteada
      .split("")
      .every((i) => props.letrasCorretas.includes(i))
  ) {
    props.setHasGameStarted(false);
  }

  return (
    <div className="jogo">
      {props.letrasErradas.length === 0 && !props.chuteFeitoErrado && (
        <img alt="" src="./assets/forca0.png" />
      )}
      {props.letrasErradas.length === 1 && !props.chuteFeitoErrado && (
        <img alt="" src="./assets/forca1.png" />
      )}
      {props.letrasErradas.length === 2 && !props.chuteFeitoErrado && (
        <img alt="" src="./assets/forca2.png" />
      )}
      {props.letrasErradas.length === 3 && !props.chuteFeitoErrado && (
        <img alt="" src="./assets/forca3.png" />
      )}
      {props.letrasErradas.length === 4 && !props.chuteFeitoErrado && (
        <img alt="" src="./assets/forca4.png" />
      )}
      {props.letrasErradas.length === 5 && !props.chuteFeitoErrado && (
        <img alt="" src="./assets/forca5.png" />
      )}
      {(props.letrasErradas.length >= 6 || props.chuteFeitoErrado) && (
        <img alt="" src="./assets/forca6.png" />
      )}

      <button onClick={props.escolherPalavra}>Escolher Palavra</button>
      <p>
        {props.chuteCorreto && (
          <span className="green">{props.palavraSorteada}</span>
        )}
        {!props.chuteCorreto && props.letrasErradas.length >= 6 && (
          <span className="red">{props.palavraSorteada} </span>
        )}
        {props.chuteFeitoErrado && (
          <span className="red">{props.palavraSorteada} </span>
        )}
        {!props.chuteCorreto &&
          !props.chuteFeitoErrado &&
          props.letrasErradas.length < 6 &&
          props.palavraSorteada.split("").map((l) => {
            return (
              <span
                className={
                  props.palavraSorteada
                    .split("")
                    .every((i) => props.letrasCorretas.includes(i))
                    ? "green"
                    : ""
                }
              >
                {props.letrasCorretas.includes(l) ? (
                  l
                ) : (
                  <>
                    <span>&nbsp;_&nbsp;</span>
                  </>
                )}
              </span>
            );
          })}
      </p>
    </div>
  );
}

export default Jogo;
