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
              servings: 4,
              body: [
                new BodySegmentSchema({
                  title: 'Stuff',
                  body: 'at this point, do stuff',
                }),
                new BodySegmentSchema({
                  title: 'more',
                  body: 'domoreplease',
                }),
              ],
            }),
            new RecipeSchema({
              title: 'test',
              description: 'test testest',
              ingredients: ['1 Shaggot', '2 noddles'],
              servings: 2,
              body: [
                new BodySegmentSchema({
                  title: 'Stuff',
                  body: 'at this point, do stuff',
                }),
                new BodySegmentSchema({
                  title: 'more',
                  body: 'domoreplease',
                }),
                new BodySegmentSchema({
                  title: 'more',
                  body: 'domoreplease',
                }),
                new BodySegmentSchema({
                  title: 'more',
                  body: 'domoreplease',
                }),
                new BodySegmentSchema({
                  title: 'more',
                  body: 'domoreplease',
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
