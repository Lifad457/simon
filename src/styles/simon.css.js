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
        top: calc(50% - 20%);
        left: calc(50% - 20%);
        height: 40%;
        width: 40%;
        border-radius: 50%;
        background-color: #0f0f0f;
        box-shadow: inset 0 0 1.5rem #646464,
                    inset 0 0 3rem #3b3b3b;
        z-index: 5;
    }

    &:before {
        content: "";
        position: absolute;
        top: calc(50% - 22.5%);
        left: calc(50% - 22.5%);
        height: 45%;
        width: 45%;
        border-radius: 50%;
        background-color: #141414;
        z-index:1;
    }

    .active {
        box-shadow: 
            0 0 2rem var(--_inner-glow),
            0 0 4rem var(--_inner-glow),
            inset 0 0 5rem var(--_outer-glow),
            inset 0 0 15rem var(--_inner-glow);
    }
`
export const Buzzer = styled.div`
    position: absolute;
    margin: 2.5%;
    height: 45%;
    width: 45%;
    border-top-left-radius: 100%;
    --_inner-glow: var(--inner, black);
    --_outer-glow: var(--outer, white);
    --outer: var(--secondary-color);
    cursor: pointer;
`
export const GreenBuzzer = styled(Buzzer)`
    background-color: var(--green-color);
    --inner: var(--green-glow-color);
`
export const RedBuzzer = styled(Buzzer)`
    left: 50%;
    background-color: var(--red-color);
    transform: rotate(90deg);
    --inner: var(--red-glow-color);
`
export const YellowBuzzer = styled(Buzzer)`
    top: 50%;
    background-color: var(--yellow-color);
    transform: rotate(270deg);
    --inner: var(--yellow-glow-color);
`
export const BlueBuzzer = styled(Buzzer)`
    top: 50%;
    left: 50%;
    background-color: var(--blue-color);
    transform: rotate(180deg);
    --inner: var(--blue-glow-color);
`
export const BuzzerButton = styled.div`
    display: flex;
    padding: .5em .6em;
    color: antiquewhite;
    text-align: center;
    font-family: 'Black Ops One', system-ui;
    font-size: calc(100dvh / 22);
    /* position: absolute;
    top: 38%;
    left: 50%;
    transform: translateX(-50%); */
    cursor: pointer;
    z-index: 10;
`

/**element central a faire a la place du pseudo after pour gerer le jeu**/