import styled from "styled-components";

export const SimonContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    background-color: #141414;
    height: 70dvh;
    width: 70dvh;
    border-radius: 50%;
    box-shadow: ${`
            0 0 0.45rem #646464,
            0 0 0.625rem #646464,
            0 0 2.625rem  #3b3b3b,
            0 0 3.8rem  #3b3b3b,
            0 0 4.2rem  #3b3b3b;
        `};

    &:after {
        content: "";
        position: absolute;
        top: calc(50% - 20%)    ;
        left: calc(50% - 20%);
        height: 40%;
        width: 40%;
        border-radius: 50%;
        background-color: #0f0f0f;
        box-shadow: inset 0 0 1.5rem #646464,
                    inset 0 0 3rem #3b3b3b;
        z-index: 99;
    }

    &:before {
        content: "";
        position: absolute;
        top: calc(50% - 22.5%)    ;
        left: calc(50% - 22.5%);
        height: 45%;
        width: 45%;
        border-radius: 50%;
        background-color: #141414;
        z-index:1;
    }
`
export const Buzzer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 46%;
    width: 46%;
    border-top-left-radius: 100%;
    margin: 1.25rem;
`
export const GreenBuzzer = styled(Buzzer)`
    position: absolute;
    background-color: var(--green-color);
`
export const RedBuzzer = styled(Buzzer)`
    position: absolute;
    left: 50%;
    background-color: var(--red-color);
    transform: rotate(90deg);
`
export const YellowBuzzer = styled(Buzzer)`
    position: absolute;
    top: 50%;
    background-color: var(--yellow-color);
    transform: rotate(270deg);
`
export const BlueBuzzer = styled(Buzzer)`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: var(--blue-color);
    transform: rotate(180deg);
`