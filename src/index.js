import React from 'react';
import { hydrate, render } from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
