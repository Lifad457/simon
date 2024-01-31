import { useState } from "react";
import { BlueBuzzer, GreenBuzzer, RedBuzzer, SimonContainer, StartButton, YellowBuzzer } from "../styles/simon.css";

export default function Simon() {
    const[sequence, setSequence] = useState([])
    
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
                <GreenBuzzer className="" />
                <RedBuzzer className="" />
                <YellowBuzzer className="" />
                <BlueBuzzer className="" />
            </SimonContainer>
        </>
    )
}