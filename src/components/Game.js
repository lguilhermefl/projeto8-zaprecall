import React from "react";

import Deck from "./Deck";
import logo from "../assets/images/logo.png";

export default function Game() {

    const [userAnswer, setUserAnswer] = React.useState([1]);

    function addUserAnswer(userAn) {
        const newArr = [ ...userAnswer, userAn];
        setUserAnswer(newArr);
    }

    return (
        <div className="game">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h1>ZapRecall</h1>
                </div>
                <Deck addUserAnswer={addUserAnswer} />
            </div>
            <div className="result">
                <span>0/4 CONCLUÍDOS</span>
            </div>
        </div>
    );
}