import React from "react";
import logo from "../assets/images/logo.png";

export default function Home({ setInitGame, minZaps, setMinZaps, decks, setDeckChosen,
    deckChosen }) {

    const [deckSize, setDeckSize] = React.useState();

    const minZapsValue = 1;
    const conditions = minZaps !== "" && !isNaN(minZaps) &&
        minZaps >= minZapsValue && minZaps <= deckSize && deckChosen !== "";
    

    return (
        <div className="home">
            <img src={logo} alt='Logo' />
            <h1>ZapRecall</h1>
            <select name="decks" defaultValue="" onChange={e => {setDeckChosen(e.target.value);
                setDeckSize(decks[e.target.value].cards.length)}} required>
                <option value="" disabled hidden>Escolha seu deck</option>

                {decks.map((deck, index) => <option key={index} value={index}>
                    {deck.deckName} - {deck.cards.length} cards</option>)}

            </select>
            <input placeholder="Digite sua meta de Zaps..."
                disabled={deckChosen !== "" ? false : true}
                onInput={e => {setMinZaps(e.target.value)}} />
            <button onClick={() => {setInitGame(true)}}
                disabled={conditions ? false : true}
                className={conditions ? "button-init" : "button-init-disabled"}>
                Iniciar Recall!</button>
        </div>
    );
}