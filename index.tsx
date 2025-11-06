import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LocalizationProvider } from './hooks/useLocalization';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* Fix for error on line 15: Property 'children' is missing in type '{}' but required in type '{ children: ReactNode; }'. */}
    {/* This is a workaround for a TypeScript issue with JSX components defined in .ts files. */}
    <LocalizationProvider children={<App />} />
  </React.StrictMode>
);