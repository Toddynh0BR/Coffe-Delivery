import { createRoot } from 'react-dom/client';
import GlobalStyle from './style/global';
import { StrictMode } from 'react';

import { Routes } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GlobalStyle/>
    <Routes />
  </StrictMode>,
)
