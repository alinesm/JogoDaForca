import React from "react";
// Letras (conjunto de botões com as letras)
const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Letras(props) {
  return (
    <div className="letras">
      {alfabeto.map((letra) => {
        if (props.hasGameStarted) {
          const disabilitarLetra = props.letrasChutadas.includes(letra);

          return (
            <button
              onClick={props.recebeLetraChutada}
              className={disabilitarLetra ? "" : "habilitarLetras"}
              disabled={disabilitarLetra}
            >
              {letra.toUpperCase()}
            </button>
          );
        }
        return (
          <button onClick={props.recebeLetraChutada} className="" disabled>
            {letra.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default Letras;
