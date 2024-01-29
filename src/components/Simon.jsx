import { BlueBuzzer, GreenBuzzer, RedBuzzer, SimonContainer, YellowBuzzer } from "../styles/simon.css";

export default function Simon() {
    return (
        <SimonContainer>
            <GreenBuzzer />
            <RedBuzzer />
            <YellowBuzzer />
            <BlueBuzzer />
        </SimonContainer>
    )
}