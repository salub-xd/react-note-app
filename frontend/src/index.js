import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserState from './context/userContext/UserState';
import NoteState from './context/noteContext/NoteState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserState>
    <NoteState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NoteState>
  </UserState>
);
