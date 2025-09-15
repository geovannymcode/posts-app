import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

//export default App;


function Saludo(){
  return <h1>¡Saludo Geovanny!</h1>
}
*/

/*
function Contador(){
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <h1>Contador: {numero}</h1>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
    </div>
  );  
}

export default Contador;


function MiComponente(){
  const [datos, setDatos] = useState ([]);

  useEffect(() => {
    console.log('Componente montado');

  }, []);

  return <div>Mi Componente</div>
}

export default MiComponente;
*/

// src/App.js
import React from 'react';
import PostsList from './components/PostsList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header de la aplicación */}
      <header className="app-header">
        <h1>🚀 Mi Primera App React</h1>
        <p>Consumiendo API de JSONPlaceholder</p>
      </header>

      {/* Contenido principal */}
      <main className="app-main">
        <PostsList />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Hecho con ❤️ en React | 
          API: <a 
            href="https://jsonplaceholder.typicode.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            JSONPlaceholder
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;