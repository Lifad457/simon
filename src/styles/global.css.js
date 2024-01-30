import { createGlobalStyle } from 'styled-components';
import BG from "../assets/images/bg.jpg";

export const GlobalStyles = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --primary-color: #000;
        --secondary-color: #fff;
        --tertiary-color: #3d3c3c;
        --yellow-color: rgb(214, 211, 12);
        --blue-color: rgb(35, 88, 235);
        --red-color: rgb(230, 18, 36);
        --green-color: rgb(27, 189, 13);


        /*
        ****variables in css of the component*****
        --inner: var(--secondary-color);
        --outer: var(--yellow-color);

        *****variables for glow effect*****
        --_inner-glow: var(--inner, red);
        --_outer-glow: var(--outer, yellow);

        --buzzer-shadow: ${`
            0 0 0.45rem var(--_inner-glow),
            0 0 0.625rem var(--_inner-glow),
            0 0 2.625rem var(--_outer-glow),
            0 0 3.8rem var(--_outer-glow),
            0 0 4.2rem var(--_outer-glow);
        `}; */
    }

    body {
        background-image: url(${BG});
        background-size: cover;
    }
`
