import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CounterComponent from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterComponent />
  </React.StrictMode>
);
