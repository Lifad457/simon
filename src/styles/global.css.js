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
        --yellow-color: rgb(255, 255, 0);
        --blue-color: rgb(0, 0, 255);
        --red-color: rgb(255, 0, 0);
        --green-color: rgb(0, 255, 0);
        --yellow-glow-color: rgb(255, 255, 50);
        --blue-glow-color: rgb(50, 50, 255);
        --red-glow-color: rgb(255, 50, 100);
        --green-glow-color: rgb(50, 255, 50);
    }

    body {
        background-image: url(${BG});
        background-size: cover;
    }
`
