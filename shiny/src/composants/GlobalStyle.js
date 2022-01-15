import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body{
      font-size:1.4rem
    }

    div{
        font-family: 'Roboto', 'Trebuchet MS', Helvetica, sans-serif;
    }

    ul {
        list-style: none;
      }
      
    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
      }

    a:visited {
        color: black;
      }
      
    button{
        cursor: pointer;
        background:#5843E4;
        color:white;
        padding:10px 30px;
        border-radius:2rem;
        font-size:1.4rem
      }
      
    button:hover{
        opacity: .9;
      }
    `


export default GlobalStyle;