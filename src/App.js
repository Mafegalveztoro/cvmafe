//=====IMPORTACION DE LIBRERIAS======
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, UNSAFE_useRouteId } from "react-router-dom"

//=====IMPORTACION DE IMAGENES======
import logo from './logo.svg';

//=====IMPORTACIOIN DE ESTILOS======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//=====IMPORTACION DE COMPONENTES "PADRES"======
import Headermafe from ".components/header";
import Footermafe from ".components/footer";
import User from './components/users';

function App() {

  const animal = {
    name: 'maria',
    slogan: 'diana maria toro cruz',
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/" className='btn btn-warning'>Inicio</Link>
          <Link to="/users" className='btn btn-warning'>Usuarios</Link>
          <Link to="/footer" className='btn btn-warning'>Footer</Link>
          <Link to="/header" className='btn btn-warning'>Header</Link>

          <switch>
            <Route exac path='/users' Component={User}></Route>
            <Route exac path='/footer'>
              <Footermafe>
                animal = {animal}
              </Footermafe>
            </Route>
            <Route exac path='/header'>
              <Headermafe></Headermafe>
            </Route>
            <Route  exac path='/'>
              Inicio
            </Route>
          </switch>
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
