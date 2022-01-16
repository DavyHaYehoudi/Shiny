import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../styles/context';



const StyledGlobalStyle = createGlobalStyle`

    body{
      font-family: 'Roboto', 'Trebuchet MS', Helvetica, sans-serif;
      font-size:1.4rem;
      background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
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
        font-size:1.4rem;
        margin:30px;
      }
      
    button:hover{
        opacity: .9;
      }
    `

    function GlobalStyle() {
      const { theme } = useContext(ThemeContext)
  
      return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
  }


export default GlobalStyle;