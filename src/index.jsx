import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalProvider from './state/GlobalProvider'
import {BrowserRouter} from 'react-router-dom'
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
