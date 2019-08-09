import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaPeliculas from './components/ListaPeliculas';

function App() {
  const fecha = new Date().getFullYear();
  return (
    
    <div>
      <Header
        titulo = "Netflix"
      />
      <ListaPeliculas/>
      <Footer
        fecha = {fecha}
      />
    </div>
    // React.createElement(
    //   "h1",
    //   { type: "Title", value: "Titulo" },
    //   "Hola"
    // )
  );
}

export default App;
