import { useState } from "react";
import { BlueBuzzer, GreenBuzzer, RedBuzzer, SimonContainer, StartButton, YellowBuzzer } from "../styles/simon.css";

export default function Simon() {
    const[sequence, setSequence] = useState([])
    const[current, setCurrent] = useState("blue")
    
    function arrayRandom(liste) {
        return liste[Math.floor(Math.random() * liste.length)];
      }
    function addToSequence() {
        const liste = ["green", "red", "yellow", "blue"];
        const random = arrayRandom(liste);
        console.log(random)
    }
    function startGame() {
        addToSequence()
    }

    return (
        <>
            <SimonContainer>
                <StartButton onClick={startGame}>START</StartButton>
                <GreenBuzzer className={current==="green" ? "active" : ""} />
                <RedBuzzer className={current==="red" ? "active" : ""}  />
                <YellowBuzzer className={current==="yellow" ? "active" : ""}  />
                <BlueBuzzer className={current==="blue" ? "active" : ""}  />
            </SimonContainer>
        </>
    )
}