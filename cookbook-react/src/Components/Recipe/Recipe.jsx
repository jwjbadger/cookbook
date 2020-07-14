import React from 'react';
import './Recipe.css';
import { connect } from 'react-redux';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editing) {
      return this.setState({ editing: false });
    }
    return this.setState({ editing: true });
  }

  render() {
    return (
      <div className='Recipe'>
        <div className='Header'>
          <input
            className='slightHeader'
            ref='title'
            defaultValue={this.props.recipe.title}
            disabled={!this.state.editing}
          />
          <br />
          <input
            className='description'
            ref='description'
            disabled={!this.state.editing}
            defaultValue={this.props.recipe.description}
          />
          <br />
          <i>
            By{' '}
            <input
              className='description'
              ref='author'
              disabled={!this.state.editing}
              defaultValue={this.props.recipe.author}
            />
          </i>
          <br />
          <i>
            Serves{' '}
            <input
              className='description'
              ref='servings'
              disabled={!this.state.editing}
              defaultValue={this.props.recipe.servings}
            />
          </i>
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
              <input
                className='slightHeader bodyHeader'
                disabled={!this.state.editing}
                defaultValue={value.title}
              />
              <br />
              <input disabled={!this.state.editing} defaultValue={value.body} />
            </div>
          ))}
          <button onClick={this.handleEdit}>
            {this.state.editing ? 'Submit' : 'Edit'}
          </button>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submit: (recipe) => dispatch(putRecipe(recipe)),
//   };
// };

export default /* connect(mapDispatchToProps)*/ Recipe;
