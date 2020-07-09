import React from 'react';
import Recipe from '../Recipe/Recipe';

class Cookbook extends React.Component {
  render() {
    return (
      <div className='Cookbook'>
        {this.props.recipes.map((value, index) => (
          <Recipe value={value} />
        ))}
      </div>
    );
  }
}

export default Cookbook;
