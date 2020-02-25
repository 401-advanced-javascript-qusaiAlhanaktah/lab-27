/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

// eslint-disable-next-line no-unused-vars
class Main extends React.Component {
  render() {
    return <App />;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);


