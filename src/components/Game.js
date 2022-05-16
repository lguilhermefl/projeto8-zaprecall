import React from "react";

import Flashcards from "./Flashcards";
import logo from "../assets/images/logo.png";
import party from "../assets/images/party.png";
import sad from "../assets/images/sad.png";


function Result({ allAnswers, minZaps, deckSize }) {

    const isWrong = answer => answer.includes("Não lembrei") || answer.includes("Quase não lembrei");
    const countMistakes = allAnswers => allAnswers.filter(isWrong).length;

    const mistakes = countMistakes(allAnswers);
    const maxMistakes = deckSize - minZaps;

    return (
        <div className="result-message">
            {(mistakes > maxMistakes) ?
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
                    <span>Você atingiu sua meta de {minZaps} zaps!</span>
                </>
            }
        </div>
    );
}

function ButtonRestart({ setInitGame, setMinZaps, setDeckChosen }) {

    const restart = () => {setInitGame(false); setMinZaps(""); setDeckChosen("")};

    return (
        <button onClick={restart}
            className="button-restart">REINICIAR RECALL</button>
    );
}

export default function Game({ setInitGame, minZaps, setMinZaps, decks, deckChosen,
    setDeckChosen }) {

    const [iconByUserAnswer, setIconByUserAnswer] = React.useState([]);
    const [allAnswers, setAllAnswers] = React.useState([]);

    const isAllAnswered = (allAnswers, deck) => allAnswers.length === deck.length;

    return (
        <div className="game">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h1>ZapRecall</h1>
                </div>
                <Flashcards deck={decks[deckChosen]} setIconByUserAnswer={setIconByUserAnswer}
                    setAllAnswers={setAllAnswers} allAnswers={allAnswers} />
            </div>
            <div className="result">
                {
                    isAllAnswered(allAnswers, decks[deckChosen]) &&
                    <Result allAnswers={allAnswers} minZaps={minZaps}
                        deckSize={decks[deckChosen].length} />
                }
                <span>{iconByUserAnswer.length}/{decks[deckChosen].length} CONCLUÍDOS</span>
                <div className="icons-result">{iconByUserAnswer}</div>
                {
                    isAllAnswered(allAnswers, decks[deckChosen]) &&
                    <ButtonRestart setInitGame={setInitGame} setMinZaps={setMinZaps}
                        setDeckChosen={setDeckChosen} />
                }
            </div>
        </div>
    );
}