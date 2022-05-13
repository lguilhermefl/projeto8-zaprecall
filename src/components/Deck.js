import React from "react";

import arrow from "../assets/images/setinha.png";

function QuestionOption({ id, flipCard }) {
    return (
        <li className="question-option clickable" onClick={()=> flipCard('question')}>
            <span className="question-number">Pergunta {id}</span>
            <ion-icon name="play-outline"></ion-icon>
        </li>
    );
}

function Question({ question, flipCard }) {
    return (
        <li className="card">
            <span>{question}</span>
            <img className="clickable" src={arrow} alt="arrow" onClick={()=> flipCard('answer')} />
        </li>
    );
}

function Answer({ answer, flipCard, addUserAnswer }) {
    return (
        <li className="card">
            <span>{answer}</span>
            <div className="user-answers">
                <div onClick={()=> {flipCard('answered', "Não lembrei"); addUserAnswer("Não lembrei")}}>
                    <span>Não lembrei</span>
                </div>
                <div onClick={()=> {flipCard('answered', "Quase não lembrei"); addUserAnswer("Quase não lembrei")}}>
                    <span>Quase não lembrei</span>
                </div>
                <div onClick={()=> {flipCard('answered', "Zap!"); addUserAnswer("Zap!")}}>
                    <span>Zap!</span>
                </div>
            </div>
        </li>
    );
}

function QuestionAnswered({ id, icon, style }) {
    return (
        <li className="question-option">
            <span className="question-number answered" style={style}>Pergunta {id}</span>
            <ion-icon name={icon} style={style}></ion-icon>
        </li>
    );
}

function FlashCard({
    id,
    question,
    answer,
    addUserAnswer
}) {
    

    const [card, setCard] = React.useState([<QuestionOption key={id} id={id} flipCard={flipCard} />]);
    const icons = ["close-circle-sharp", "help-circle-sharp","checkmark-circle-sharp"];

    function flipCard(turn, answered) {
        if(turn === 'question') {
            setCard([<Question key={id} question={question} flipCard={flipCard} />]);
        }
        if(turn === 'answer') {
            setCard([<Answer key={id} answer={answer} flipCard={flipCard} addUserAnswer={addUserAnswer} />]);
        }
        if(turn === 'answered') {
            if(answered === "Não lembrei") {
                setCard([<QuestionAnswered key={id} id={id} icon={icons[0]} style={{color: "#FF3030"}} />]);
            }
            if(answered === "Quase não lembrei") {
                setCard([<QuestionAnswered key={id} id={id} icon={icons[1]} style={{color: "#FF922E"}} />]);
            }
            if(answered === "Zap!") {
                setCard([<QuestionAnswered key={id} id={id} icon={icons[2]} style={{color: "#2FBE34"}} />]);
            }
        }
    }

    return(
        <>
            { card }
        </>
    );

}

export default function Deck({ addUserAnswer }) {

    const cards = [{
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
        }
    ];

    return (
        <div className="questions" >
            <ul>
                { cards.sort(() => Math.random() - 0.5).map((card, index) => <FlashCard key={index} id={index + 1} question={card.question} answer={card.answer} addUserAnswer={addUserAnswer} />) }
            </ul>
        </div>
    );
}