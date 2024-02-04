import { useEffect, useState } from "react";
import { BlueBuzzer, GreenBuzzer, RedBuzzer, SimonContainer, BuzzerButton, YellowBuzzer, HighScore } from "../styles/simon.css";

export default function Simon() {
    const[sequence, setSequence] = useState([])
    const[mySequence, setMySequence] = useState([])
    const[current, setCurrent] = useState("")
    const[button, setButton] = useState("START")
    const record = JSON.parse(localStorage.getItem('record')) || 0;
    
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
                setButton("ROUND " + (i - 1))
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
                if(sequence.length > record) {
                    localStorage.setItem('record', JSON.stringify(sequence.length))
                }
                setSequence([])
                setMySequence([])
                setButton("LOSE, TRY AGAIN?")
                setTimeout(() => {
                    setButton("START")
                }, 1000)
            }
            else if(mySequence.length === sequence.length) {
                setTimeout(() => {
                    setMySequence([])
                    setCurrent("")
                    addToSequence()
                }, 1000)
            }
        }
    }, [mySequence])

    return (
        <>
                <HighScore>HIGH SCORE : {record}</HighScore>
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