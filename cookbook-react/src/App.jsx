import React from 'react';
import './App.css';
import Cookbook from './Components/Cookbook/Cookbook';

function App() {
  return <div className='App'>{<Cookbook recipes={[1, 2, 3, 4, 5]} />}</div>;
}

export default App;
