import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1 className={"text-h1 md:text-s1"}>H1</h1>
    <h2 className={"text-h2"}>h2</h2>
    <h3 className={"text-p1"}>h3</h3>
    <h3 className={"text-p2"}>h4</h3>
    <h3 className={"text-s1"}>h5</h3>
    <Testam />
  </React.StrictMode>,
);
