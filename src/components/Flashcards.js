import React from "react";

import arrow from "../assets/images/setinha.png";

const FIVE_DECIMALS = 0.5;
const ONE = 1;
const wrong = 0;
const almost = 1;
const right = 2;

function QuestionOptionAndQuestionAnswered({ id, showAnswered, setShowQuestion, iconAnswered,
    styleAnswered }) {

    return (
        <>
            { !showAnswered ?
                <li className="question-option clickable" onClick={() => setShowQuestion(true)}>
                    <span className="question-number">Pergunta {id}</span>
                    <ion-icon name="play-outline"></ion-icon>
                </li> :
                <li className="question-option">
                    <span className="question-number answered" style={styleAnswered}>
                        Pergunta {id}</span>
                    { iconAnswered }
                </li>

            }
        </>
    );
}

function QuestionAndAnswer({ question, answer, showAnswer, setShowAnswered, setShowQuestion,
    setShowAnswer, setIconAnswered, setStyleAnswered, setIconByUserAnswer, setAllAnswers,
    icons, styles }) {
    
    return (
        <li className="card">
            { !showAnswer ?
                <>
                    <span>{question}</span>
                    <img className="clickable" src={arrow} alt="arrow" onClick={() =>
                        setShowAnswer(true)} />
                </> :
                <>
                    <span>{answer}</span>
                    <div className="user-answers">
                        <div onClick={() => {
                            setShowAnswered(true);
                            setShowQuestion(false);
                            setIconAnswered(icons[wrong]);
                            setStyleAnswered(styles[wrong]);
                            setIconByUserAnswer(iconByUser => [...iconByUser, icons[wrong]]);
                            setAllAnswers(allAnswer => [...allAnswer, "Não lembrei"]);
                            }}>
                            <span>Não lembrei</span>
                        </div>
                        <div onClick={() => {
                            setShowAnswered(true);
                            setShowQuestion(false);
                            setIconAnswered(icons[almost]);
                            setStyleAnswered(styles[almost]);
                            setIconByUserAnswer(iconByUser => [...iconByUser, icons[almost]]);
                            setAllAnswers(allAnswer => [...allAnswer, "Quase não lembrei"]);
                            }}>
                            <span>Quase não lembrei</span>
                        </div>
                        <div onClick={() => {
                            setShowAnswered(true);
                            setShowQuestion(false);
                            setIconAnswered(icons[right]);
                            setStyleAnswered(styles[right]);
                            setIconByUserAnswer(iconByUser => [...iconByUser, icons[right]]);
                            setAllAnswers(allAnswer => [...allAnswer, "Zap!"]);
                            }}>
                            <span>Zap!</span>
                        </div>
                    </div>
                </>
            }

        </li>
    );
}

function Flashcard({ id, question, answer, setIconByUserAnswer, setAllAnswers }) {

    const [showAnswered, setShowAnswered] = React.useState(false);
    const [showQuestion, setShowQuestion] = React.useState(false);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [iconAnswered, setIconAnswered] = React.useState();
    const [styleAnswered, setStyleAnswered] = React.useState();

    const styles = [{color: "#FF3030"}, {color: "#FF922E"}, {color: "#2FBE34"}]

    const icons = [
        <ion-icon key={id} name="close-circle-sharp" style={styles[wrong]}></ion-icon>,
        <ion-icon key={id} name="help-circle-sharp" style={styles[almost]}></ion-icon>,
        <ion-icon key={id} name="checkmark-circle-sharp" style={styles[right]}></ion-icon>
    ];

    return (
        <>
            { !showQuestion ? 
                <QuestionOptionAndQuestionAnswered id={id} showAnswered={showAnswered}
                setShowQuestion={setShowQuestion} iconAnswered={iconAnswered}
                styleAnswered={styleAnswered} /> :
                <QuestionAndAnswer question={question} answer={answer} showAnswer={showAnswer}
                setShowAnswered={setShowAnswered} setShowQuestion={setShowQuestion}
                setShowAnswer={setShowAnswer} setIconAnswered={setIconAnswered}
                setStyleAnswered={setStyleAnswered} setIconByUserAnswer={setIconByUserAnswer}
                setAllAnswers={setAllAnswers} icons={icons} styles={styles} />
            }
        </>
    );

}

export default function Flashcards({ deck, setIconByUserAnswer, setAllAnswers }) {

    return (
        <div className="flashcards" >
            <ul>
                { deck.sort(() => Math.random() - FIVE_DECIMALS).map((card, index) => 
                    <Flashcard key={index} id={index + ONE} question={card.question} 
                    answer={card.answer} setIconByUserAnswer={setIconByUserAnswer}
                    setAllAnswers={setAllAnswers} />)
                }
            </ul>
        </div>
    );
}