import React, { Component }  from 'react';
import { Provider }          from 'react-redux'

import routes                from './routes';
import { createGlobalStyle } from 'styled-components';
import store                 from './store';

import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        {routes}
      </Provider>
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
