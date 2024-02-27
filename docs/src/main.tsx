import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { RCProvider } from "react-codesign";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RCProvider>
      <App />
    </RCProvider>
  </React.StrictMode>,
)
