import React from 'react';

class Recipe extends React.Component {
  render() {
    return (
      <div class='Recipe'>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Recipe;
