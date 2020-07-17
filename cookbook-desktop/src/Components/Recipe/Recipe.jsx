import React from 'react';
import './Recipe.css';
import { connect } from 'react-redux';
import { putRecipe } from '../../Store/actions';
import RecipeSchema from '../../Models/Recipe';
import BodySegmentSchema from '../../Models/BodySegment';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editing) {
      let ingredients = [];
      let body = [];

      let bodyRef = Array.from(this.refs.body.children);

      for (let value of this.refs.ingredients.children) {
        ingredients.push(value.children[0].value);
      }
      for (let value of bodyRef.slice(0, bodyRef.length - 1)) {
        body.push(
          new BodySegmentSchema({
            title: value.children[0].value,
            body: value.children[2].value,
          }),
        );
      }

      this.props.putRecipe(
        new RecipeSchema({
          _id: this.props.recipe._id,
          title: this.refs.title.value,
          description: this.refs.description.value,
          author: this.refs.author.value,
          ingredients: ingredients,
          servings: this.refs.servings.value,
          body: body,
        }),
      );
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
          <ul ref='ingredients'>
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
        <div ref='body' className='body'>
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
          <button onMouseUp={this.handleEdit}>
            {this.state.editing ? 'Submit' : 'Edit'}
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    putRecipe: (recipe) => dispatch(putRecipe(recipe)),
  };
};

export default connect(null, mapDispatchToProps)(Recipe);
