import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext/authContext.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
