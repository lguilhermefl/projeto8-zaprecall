import logo from "../assets/images/logo.png";

export default function Home({ setInitGame, minZaps, setMinZaps }) {

    const deckSize = 8;
    const minZapsInitial = 1;
    const conditions = minZaps !== "" && !isNaN(minZaps) &&
        minZaps >= minZapsInitial && minZaps <= deckSize;

    return (
        <div className="home">
            <img src={logo} alt='Logo' />
            <h1>ZapRecall</h1>
            <input className="input-min-zaps" placeholder="Digite sua meta de Zaps..."
                onInput={e => setMinZaps(e.target.value)} />
            <button onClick={() => { setInitGame(true) }}
                disabled={conditions ? false : true}
                className={conditions ? "button-init" : "button-init-disabled"}>
                Iniciar Recall!</button>
        </div>
    );
}