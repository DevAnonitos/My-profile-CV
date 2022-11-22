import React from 'react';
import ReactDOM from 'react-dom/client';

//react router dom
import {BrowserRouter} from 'react-router-dom';

// components style
import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';

// render components to HTML 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strict mode
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
