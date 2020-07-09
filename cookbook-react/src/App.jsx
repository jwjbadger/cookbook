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
              description:
                'test testest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testt',
              ingredients: ['1 Shaggot', '2 noddles'],
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
