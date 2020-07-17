import React from 'react';
import './App.css';
import Cookbook from './Components/Cookbook/Cookbook';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Cookbook />
    </div>
  );
}

export default App;
