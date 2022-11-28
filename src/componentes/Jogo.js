function Jogo(props) {
  if (
    props.palavraSorteada
      .split("")
      .every((i) => props.letrasCorretas.includes(i))
  ) {
    props.setJogoComecou(false);
  }

  return (
    <div className="jogo">
      {props.letrasErradas.length === 0 && !props.chuteErrado && (
        <img alt="" src="./assets/forca0.png" data-test="game-image" />
      )}
      {props.letrasErradas.length === 1 && !props.chuteErrado && (
        <img alt="" src="./assets/forca1.png" data-test="game-image" />
      )}
      {props.letrasErradas.length === 2 && !props.chuteErrado && (
        <img alt="" src="./assets/forca2.png" data-test="game-image" />
      )}
      {props.letrasErradas.length === 3 && !props.chuteErrado && (
        <img alt="" src="./assets/forca3.png" data-test="game-image" />
      )}
      {props.letrasErradas.length === 4 && !props.chuteErrado && (
        <img alt="" src="./assets/forca4.png" data-test="game-image" />
      )}
      {props.letrasErradas.length === 5 && !props.chuteErrado && (
        <img alt="" src="./assets/forca5.png" data-test="game-image" />
      )}
      {(props.letrasErradas.length >= 6 || props.chuteErrado) && (
        <img alt="" src="./assets/forca6.png" data-test="game-image" />
      )}

      <button data-test="choose-word" onClick={props.botaoEscolherPalavra}>
        Escolher Palavra
      </button>
      <p>
        {props.chuteCorreto && (
          <span className="green">{props.palavraSorteada}</span>
        )}
        {!props.chuteCorreto && props.letrasErradas.length >= 6 && (
          <span className="red">{props.palavraSorteada} </span>
        )}
        {props.chuteErrado && (
          <span className="red">{props.palavraSorteada} </span>
        )}
        {!props.chuteCorreto &&
          !props.chuteErrado &&
          props.letrasErradas.length < 6 &&
          props.palavraSorteada.split("").map((letra) => {
            return (
              <span
                data-test="word"
                data-answer={props.palavraSorteada}
                className={
                  props.palavraSorteada
                    .split("")
                    .every((i) => props.letrasCorretas.includes(i))
                    ? "green"
                    : ""
                }
              >
                {props.letrasCorretas.includes(letra) ? (
                  letra
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
