import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
  render() {
    return (
      <div className='Recipe'>
        <div className='Header'>
          <h3>
            <b>{this.props.recipe.title}</b>
          </h3>
          <p>
            <i>{this.props.recipe.description}</i>
          </p>
        </div>
        <div className='Ingredients'>
          <ul>
            {this.props.recipe.ingredients.map((value, index) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Recipe;
