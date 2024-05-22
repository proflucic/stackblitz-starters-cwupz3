import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Header from './Header';
import News from './News';
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Header />
    <App />
    <News />
  </StrictMode>
);
