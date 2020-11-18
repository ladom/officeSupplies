import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import props from './main.props';

ReactDOM.render(
  <React.StrictMode>
    <App {...props} />
  </React.StrictMode>,
  document.getElementById('root')
);
