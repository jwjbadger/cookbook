import React from 'react';
import Recipe from '../Recipe/Recipe';
import './Cookbook.css';

class Cookbook extends React.Component {
  render() {
    return (
      <div className='Cookbook'>
        {this.props.recipes.map((value, index) => (
          <Recipe recipe={value} />
        ))}
      </div>
    );
  }
}

export default Cookbook;
