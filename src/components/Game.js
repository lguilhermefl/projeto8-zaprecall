import React from "react";

import Flashcards from "./Flashcards";
import logo from "../assets/images/logo.png";
import party from "../assets/images/party.png";
import sad from "../assets/images/sad.png";


function Result({ mistakes, minZaps, deckSize }) {

    const maxMistakes = deckSize - minZaps;

    return (
        <div className="result-message">
            { (mistakes > maxMistakes) ?
                <>
                    <div>
                        <img src={sad} alt="Sad emoji" />
                        <span>Putz!</span>
                    </div>
                    <span>Ainda faltam alguns... Mas não desanime!</span>
                </> :
                <>
                    <div>
                        <img src={party} alt="Party emoji" />
                        <span>Parabéns!</span>
                    </div>
                    <span>Você não esqueceu de nenhum flashcard!</span>
                </>
            }
        </div>
    );
}

export default function Game() {

    const deckReact = 0;

    const decks = [
        [{
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
        }],
    ];

    const [iconByUserAnswer, setIconByUserAnswer] = React.useState([]);
    const [allAnswers, setAllAnswers] = React.useState([]);
    const [minZaps, setMinZaps] = React.useState(decks[deckReact].length);

    const isWrong = answer => answer.includes("Não lembrei") || answer.includes("Quase não lembrei");
    const countMistakes = allAnswers => allAnswers.filter(isWrong).length;
    const isAllAnswered = (allAnswers, deck) => allAnswers.length === deck.length;

    return (
        <div className="game">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h1>ZapRecall</h1>
                </div>
                <Flashcards deck={decks[deckReact]} setIconByUserAnswer={setIconByUserAnswer}
                setAllAnswers={setAllAnswers} allAnswers={allAnswers} />
            </div>
            <div className="result">
                { 
                    isAllAnswered(allAnswers, decks[deckReact]) && 
                    <Result mistakes={countMistakes(allAnswers)} minZaps={minZaps}
                        deckSize={decks[deckReact].length} />
                }
                <span>{iconByUserAnswer.length}/{decks[deckReact].length} CONCLUÍDOS</span>
                <div className="icons-result">{iconByUserAnswer}</div>
            </div>
        </div>
    );
}