import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import Bar from  './Bar'
ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  rootElement
);