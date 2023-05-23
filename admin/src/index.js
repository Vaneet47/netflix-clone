import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext/authContext.js';
import { MoviesContextProvider } from './context/movieContext/MovieContext.js';
import { ListContextProvider } from './context/listContext/ListContext.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <MoviesContextProvider>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </MoviesContextProvider>
  </AuthContextProvider>
);
