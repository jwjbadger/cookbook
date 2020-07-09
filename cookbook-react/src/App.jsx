import React from 'react';
import './App.css';
import Cookbook from './Components/Cookbook/Cookbook';
import RecipeSchema from './Models/Recipe';
import BodySegmentSchema from './Models/BodySegment';

function App() {
  return (
    <div className='App'>
      {
        <Cookbook
          recipes={[
            new RecipeSchema({
              title: 'Hey',
              description: 'Hey Hey Hey Hey',
              ingredients: ['hay', 'hay', 'hay', 'hay'],
              body: [
                new BodySegmentSchema({
                  title: 'Stuff',
                  description: 'at this point, do stuff',
                }),
                new BodySegmentSchema({
                  title: 'more',
                  description: 'domoreplease',
                }),
              ],
            }),
            new RecipeSchema({
              title: 'test',
              description: 'test test',
              ingredients: ['1 Shaggot', '2 noddles'],
              body: [
                new BodySegmentSchema({
                  title: 'Stuff',
                  description: 'at this point, do stuff',
                }),
                new BodySegmentSchema({
                  title: 'more',
                  description: 'domoreplease',
                }),
              ],
            }),
          ]}
        />
      }
    </div>
  );
}

export default App;
