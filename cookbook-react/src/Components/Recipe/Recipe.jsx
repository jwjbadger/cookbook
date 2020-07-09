import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
  render() {
    return (
      <div className='Recipe'>
        <h3>
          <b>{this.props.recipe.title}</b>
        </h3>
        <p>
          <i>{this.props.recipe.description}</i>
        </p>
      </div>
    );
  }
}

export default Recipe;
