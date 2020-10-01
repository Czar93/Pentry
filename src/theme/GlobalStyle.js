import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        padding: 0;
        margin: 0;
        margin-top: 80px;
        background-color: ${(props) => props ? props.theme.color.lightgray : 'white'};
    }
`

export default GlobalStyle;