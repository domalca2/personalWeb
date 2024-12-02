import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Opcional si mantienes el CSS inicial
import App from './App';
import './styles.css';
import { ThemeProvider } from "./contexts/ThemeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
