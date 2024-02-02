import { useEffect, useState } from "react";
import { BlueBuzzer, GreenBuzzer, RedBuzzer, SimonContainer, BuzzerButton, YellowBuzzer } from "../styles/simon.css";

export default function Simon() {
    const[sequence, setSequence] = useState([])
    const[mySequence, setMySequence] = useState([])
    const[current, setCurrent] = useState("")
    const[button, setButton] = useState("START")
    
    function addToSequence() {
        const liste = ["green", "red", "yellow", "blue"];
        
        function arrayRandom(liste) {
            return liste[Math.floor(Math.random() * liste.length)];
        }
        const random = arrayRandom(liste);
        console.log(random)
        setSequence(prevSeq => [...prevSeq, random])
    }

    function startGame() {
        if(sequence.length === 0) {
            addToSequence()
        }
    }

    function playSequence() {
        let i = 0;
        const interval = setInterval(() => {
            setCurrent(sequence[i])
            i++
            if(i < sequence.length + 1) {
                setTimeout(() => {
                    setCurrent("")
                }, 400)
            }
            else {
                clearInterval(interval)
                setCurrent("")
                setButton("Tour " + (i - 1))
            }
        }, 800)
    }

    function handleBuzzerClick(color) {
        setCurrent(color)
        setTimeout(() => {
            setCurrent("")
        }, 400)
        setMySequence(prevSeq => [...prevSeq, color])
    }

    useEffect(() => {
        if(sequence.length > 0) {
            playSequence()
        }
    }, [sequence])

    useEffect(() => {
        if(mySequence.length > 0) {
            if(mySequence[mySequence.length - 1] !== sequence[mySequence.length - 1]) {
                setSequence([])
                setMySequence([])
                setButton("LOSE, RESTART?")
            }
            else if(mySequence.length === sequence.length) {
                setMySequence([])
                addToSequence()
            }
        }
    }, [mySequence])

    return (
        <>
            <SimonContainer>
                <BuzzerButton onClick={startGame}>{button}</BuzzerButton>
                <GreenBuzzer className={current==="green" ? "active" : ""} onClick={() => handleBuzzerClick("green")} />
                <RedBuzzer className={current==="red" ? "active" : ""} onClick={() => handleBuzzerClick("red")} />
                <YellowBuzzer className={current==="yellow" ? "active" : ""} onClick={() => handleBuzzerClick("yellow")} />
                <BlueBuzzer className={current==="blue" ? "active" : ""} onClick={() => handleBuzzerClick("blue")} />
            </SimonContainer>
        </>
    )
}