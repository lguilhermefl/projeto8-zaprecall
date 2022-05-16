import React from "react";
import Home from "./Home";
import Game from "./Game";
import "../assets/styles/reset.css";
import "../assets/styles/style.css";

export default function App() {

    const decks = [
        {
            deckName: "React",
            cards: [{
                question: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScript"
            },
            {
                question: "O React é __",
                answer: "Uma biblioteca JavaScript para construção de interfaces"
            },
            {
                question: "Componentes devem iniciar com __",
                answer: "Letra maiúscula"
            },
            {
                question: "Podemos colocar __ dentro do JSX",
                answer: "Expressões"
            },
            {
                question: "O ReactDOM nos ajuda __",
                answer: "Interagindo com a DOM para colocar componentes React na mesma"
            },
            {
                question: "Usamos o npm para __",
                answer: "Gerenciar os pacotes necessários e suas dependências"
            },
            {
                question: "Usamos props para __",
                answer: "Passar diferentes informações para componentes"
            },
            {
                question: "Usamos estado (state) para __",
                answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
            }]
        },
        {
            deckName: "Javascript",
            cards: [{
                question: "O que o operador typeof faz?",
                answer: "Retorna o tipo de dado de um operando em formato de string"
            },
            {
                question: "Quais os tipos de erros padrões no Javascript?",
                answer: "EvalError, ReferenceError, RangeError, SyntaxError, TypeError, URIError e InternalError"
            },
            {
                question: "O que é um callback?",
                answer: "É uma função passada como argumento que é executada só após a execução de outra função"
            },
            {
                question: "O que o operador typeof faz?",
                answer: "Retorna o tipo de dado de um operando em formato de string"
            },
            {
                question: "Os tipos de variáveis no Javascript são __",
                answer: "var, const e let"
            },]
        },
        {
            deckName: "CSS",
            cards: [{
                question: "Quais são os elementos CSS?",
                answer: "HTML, #id e .classe"
            },
            {
                question: "O que significa CSS?",
                answer: "Cascading Style Sheets"
            },
            {
                question: "Qual a propriedade usada para alterar a cor de um texto?",
                answer: "Propriedade color"
            },
            {
                question: "Como é a sintaxe do CSS?",
                answer: "seletor {propriedade: valor;}"
            },
            {
                question: "Podemos adicionar estilização no HTML com a tag __",
                answer: "<style>"
            },
            {
                question: "Qual propriedade define a largura de um elemento?",
                answer: "Propriedade width"
            }]
        }
    ];

    const [initGame, setInitGame] = React.useState(false);
    const [minZaps, setMinZaps] = React.useState("");
    const [deckChosen, setDeckChosen] = React.useState(0);

    const FIVE_DECIMALS = 0.5;
    const shuffle = decks => decks.map(deck =>
        deck.cards.sort(() => Math.random() - FIVE_DECIMALS));

    const shuffledDecks = shuffle(decks);

    return (
        <>
            { !initGame ?
                <Home setInitGame={setInitGame} minZaps={minZaps} setMinZaps={setMinZaps}
                    decks={decks} setDeckChosen={setDeckChosen} deckChosen={deckChosen} /> :
                <Game setInitGame={setInitGame} minZaps={minZaps} setMinZaps={setMinZaps}
                    decks={shuffledDecks} deckChosen={deckChosen} setDeckChosen={setDeckChosen} />
            }
        </>
    );
}