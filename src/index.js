import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from './TokenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TokenProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </TokenProvider>
);
