function Botoes({ answer, addUserAnswer }) {
    return(
        <button onClick={() => addUserAnswer(answer)}>{answer}</button>
    );
}



export default function Teste({ addUserAnswer }) {

    const items = [
        {
            answer: "caramba"
        },
        {
            answer: "ai"
        },        
        {
            answer: "putz"
        }
    ]

    return (
        <div>
            { items.map(item => <Botoes addUserAnswer={addUserAnswer} answer={item.answer} />) } 
        </div>
    );
}