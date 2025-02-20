import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from "react-router-dom";  // Import HashRouter

import './index.css'
import App from './App.jsx'

import PULSE from './app/Pulse.jsx'

import { Provider } from 'react-redux';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PULSE />
      </Provider>
    </HashRouter>
  </StrictMode>,
)
