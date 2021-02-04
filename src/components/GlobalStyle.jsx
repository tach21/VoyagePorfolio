import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}

body{
    background: #ffffff;
    font-family: 'Inter', sans-serif;
}

button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #D8E2DC;
    background: transparent;
    color: #000;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #D8E2DC;
        color:#000;
    }
    
}
h2{
        font-weight: lighter;
        font-size: 3rem;
        color: #000;
    }
    h3{
        color:#000;
    }
    h4{
        font-weight: bold;
        font-size: 1.5rem;
    }
    span{
        font-weight: bold;
        color:#FF8750;
    }
    a{
        font-size: 1.1rem;
    }
    p{
        padding: 3rem 0rem;
        color:#000;
        font-size: 1.4rem;
        line-height: 150%;
    }


`;

export default GlobalStyle;
