//=====IMPORTACION DE LIBRERIAS======
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//=====IMPORTACION DE IMAGENES======
import logo from './logo.svg';

//=====IMPORTACIOIN DE ESTILOS======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//=====IMPORTACION DE COMPONENTES "PADRES"======
import Headermafe from ".components/header";
import Footermafe from ".components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/">Inicio</Link>
          <Link to="/">Usuarios</Link>
          <Link to="/">Footer</Link>
          <Link to="/">Header</Link>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <Headermafe></Headermafe>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footermafe></Footermafe>
      </header>
    </div>
  );
}

export default App;
