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
            <br />
            <i>By {this.props.recipe.author}</i>
            <br />
            <i>Serves {this.props.recipe.servings}</i>
          </p>
        </div>
        <div className='Ingredients'>
          <ul>
            {this.props.recipe.ingredients.map((value, index) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
        <div className='body'>
          {this.props.recipe.body.map((value, index) => (
            <div>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recipe;
