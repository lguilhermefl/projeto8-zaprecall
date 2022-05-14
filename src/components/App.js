import React from "react";
import Home from "./Home";
import Game from "./Game";
import "../assets/styles/reset.css";
import "../assets/styles/style.css";

export default function App() {

    const [initGame, setInitGame] = React.useState(false);

    return (
        <>
            { !initGame ?
                <Home setInitGame={setInitGame} /> :
                <Game setInitGame={setInitGame} />
            }
        </>
    );
}