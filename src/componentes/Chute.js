import React from "react";

function Chute(props) {
  const habilitarInput = props.hasGameStarted && props.habilitarInput;

  const habilitarBotao = props.hasGameStarted && props.habilitarInput;
  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      {habilitarInput ? (
        <input
          onChange={props.pegarInput}
          value={props.valorInput}
          type="text"
        />
      ) : (
        <input type="text" disabled="disabled" />
      )}
      <button
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
