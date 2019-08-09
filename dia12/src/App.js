import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { MainContainer } from './containers/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
