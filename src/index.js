import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './components/Header';
import Homepage from './pages/Homepage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Homepage/>
    <App />
  </React.StrictMode>
);



