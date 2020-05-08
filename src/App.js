import React from 'react';
import logo from './logo.svg';
import './App.css';

function Publicidad(props){
 return <div className="publicidad" width="100%" > 
          <img className="publicidad"src="" alt="" width="100%"/>
        </div>
}
function Targets(props){
  return <div className="targets">

         </div>
}

const publicidad = <Publicidad />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav> 
          <ul>
            <li className="tittle">G<span className="Tdiferent">A</span>C</li>
            <input type="search" className="search"/>
            <li>Categoría</li>
          </ul>
        </nav>
        
        <Publicidad />
        <div className="BoxTargets">
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        </div>
        
      </header>
    </div>
  );
}

export default App;
