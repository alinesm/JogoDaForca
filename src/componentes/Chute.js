import React from "react";

function Chute(props) {
  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      {props.habilitarInput ? (
        <input type="text" />
      ) : (
        <input type="text" disabled="disabled" />
      )}

      <button
        className={
          props.botaoChutar ? "chutarHabilitado" : "chutarDesabilitado"
        }
      >
        Chutar
      </button>
    </div>
  );
}

export default Chute;
