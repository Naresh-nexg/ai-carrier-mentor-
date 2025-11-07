import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
// Cleaned up the import statement
import { LocalizationProvider } from './src/hooks/useLocalization';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* Corrected: Use standard JSX component composition instead of the 'children' prop */}
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </React.StrictMode>
);