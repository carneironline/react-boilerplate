import { createGlobalStyle } from 'styled-components'
import imgBackground from '../assets/images/background.svg'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    html, body, #root {
        background: #191920 url(${imgBackground}) no-repeat;
        min-height:100%;
    }

    body, input, button {
        font-family: Robot, sans-serif;
        font-size:14px;
    }

    button {
        cursor: pointer;
    }
`
