import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './composants/Navigation';
import GlobalStyle from './composants/GlobalStyle';
import Footer from './composants/Footer';
import { SurveyProvider, ThemeProvider } from './styles/context';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <Navigation />
          <GlobalStyle />
          <App />
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

