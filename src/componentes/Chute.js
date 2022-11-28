function Chute(props) {
  const habilitarInput = props.jogoComecou && props.habilitarInput;
  const habilitarBotao = props.jogoComecou && props.habilitarInput;

  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      {habilitarInput ? (
        <input
          data-test="guess-input"
          onChange={props.pegarInput}
          value={props.valorInput}
          type="text"
        />
      ) : (
        <input data-test="guess-input" type="text" disabled="disabled" />
      )}
      <button
        data-test="guess-button"
        onClick={props.cliqueNoChute}
        className={!habilitarBotao ? "" : "chutarHabilitado"}
        disabled={!habilitarBotao}
      >
        Chutar
      </button>
    </div>
  );
}

export default Chute;
