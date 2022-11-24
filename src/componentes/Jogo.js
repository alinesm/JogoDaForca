import React from "react";
// Jogo (imagem da forca, botão de iniciar, palavra do jogo)
// Input e letras passam a ficar habilitadas
//  A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada
// Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar
// Aparece a palavra a ser adivinhada na tela, com um underline ( `_` ) para cada letra que a palavra possui
// Se você transformar a palavra em um array, será muito mais fácil de fazer as operações e comparações que irão acontecer no jogo 😉

function Jogo(props) {
  return (
    <div className="jogo">
      <img alt="" src="./assets/forca0.png" />
      <button onClick={props.escolherPalavra}>Escolher Palavra</button>
      <p>
        {props.palavraSorteada.split("").map((l) => {
          return (
            <span>
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
