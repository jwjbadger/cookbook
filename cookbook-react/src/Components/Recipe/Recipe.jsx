import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: true };
  }

  render() {
    return (
      <div className='Recipe'>
        <div className='Header'>
          <h3>
            <b>
              <input
                defaultValue={this.props.recipe.title}
                disabled={!this.state.editing}
              />
            </b>
          </h3>
          <p>
            <input
              disabled={!this.state.editing}
              defaultValue={this.props.recipe.description}
            />
            <br />
            <i>
              By{' '}
              <input
                disabled={!this.state.editing}
                defaultValue={this.props.recipe.author}
              />
            </i>
            <br />
            <i>
              Serves{' '}
              <input
                disabled={!this.state.editing}
                defaultValue={this.props.recipe.servings}
              />
            </i>
          </p>
        </div>
        <div className='Ingredients'>
          <ul>
            {this.props.recipe.ingredients.map((value, index) => (
              <li key={index}>
                <input
                  className='Ingredient'
                  disabled={!this.state.editing}
                  defaultValue={value}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='body'>
          {this.props.recipe.body.map((value, index) => (
            <div key={index}>
              <h3>
                <input
                  disabled={!this.state.editing}
                  defaultValue={value.title}
                />
              </h3>
              <input disabled={!this.state.editing} defaultValue={value.body} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recipe;
