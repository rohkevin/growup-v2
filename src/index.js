import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppProvider } from './context'
import { AuthProvider } from './AuthContext'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
