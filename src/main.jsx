import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

{/*Added by Suyash*/}
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
{/*Ended by Suyash*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
