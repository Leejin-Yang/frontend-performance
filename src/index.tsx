import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
