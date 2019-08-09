import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaPeliculas from './components/ListaPeliculas';

function App() {
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header 
        titulo='Neflis'
      />
      <ListaPeliculas/>
      <Footer
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
