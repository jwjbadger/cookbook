import React from 'react';
import './App.css';
import Cookbook from './Components/Cookbook/Cookbook';
import RecipeSchema from './Models/Recipe';

function App() {
  return (
    <div className='App'>
      {
        <Cookbook
          recipes={[
            new RecipeSchema({
              title: 'Hey',
              description: 'Hey Hey Hey',
              body: 'How are you',
            }),
            new RecipeSchema({
              title: 'test',
              description: 'test test',
              body: 'test double test recipe',
            }),
          ]}
        />
      }
    </div>
  );
}

export default App;
