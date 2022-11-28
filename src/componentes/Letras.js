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
        if (props.jogoComecou) {
          const disabilitarLetra = props.listaLetrasChutadas.includes(letra);

          return (
            <button
              data-test="letter"
              onClick={props.recebeLetraChutada}
              className={disabilitarLetra ? "" : "habilitarLetras"}
              disabled={disabilitarLetra}
            >
              {letra.toUpperCase()}
            </button>
          );
        }

        return (
          <button onClick={props.recebeLetraChutada} disabled>
            {letra.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default Letras;
