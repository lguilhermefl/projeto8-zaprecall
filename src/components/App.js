import React from "react";
import Home from "./Home";
import Game from "./Game";
import "../assets/styles/reset.css";
import "../assets/styles/style.css";

export default function App() {

    const [initGame, setInitGame] = React.useState(false);
    const [minZaps, setMinZaps] = React.useState("");

    return (
        <>
            { !initGame ?
                <Home setInitGame={setInitGame} minZaps={minZaps} setMinZaps={setMinZaps} /> :
                <Game setInitGame={setInitGame} minZaps={minZaps} setMinZaps={setMinZaps} />
            }
        </>
    );
}