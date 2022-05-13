import logo from "../assets/images/logo.png";

export default function Home({ setInitGame }) {

    return (
        <div className="home">
            <img src={logo} alt='Logo' />
            <h1>ZapRecall</h1>
            <button onClick={() => setInitGame(true)}>Iniciar Recall!</button>
        </div>
    );
}