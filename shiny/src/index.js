import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './composants/Navigation';
import GlobalStyle from './composants/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

