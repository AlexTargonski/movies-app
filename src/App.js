import React, { Component }  from 'react';

import routes                from './routes';
import { createGlobalStyle } from 'styled-components';
import Header                from './layouts/Header';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        {routes}
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    padding     : 0;
    margin      : 0;
    font-family : 'Raleway', sans-serif;
  }
`;

export default App;
