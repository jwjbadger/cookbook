import React from 'react';
import Recipe from '../Recipe/Recipe';
import RecipeSchema from '../../Models/Recipe';
import BodySegmentSchema from '../../Models/BodySegment';
import { connect } from 'react-redux';
import './Cookbook.css';
import { postRecipe } from '../../Store/actions';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      body: [],
    };
    this.addToIngredients = this.addToIngredients.bind(this);
    this.addToBody = this.addToBody.bind(this);
  }

  addToIngredients(newValue) {
    return this.setState({
      ingredients: [...this.state.ingredients, newValue],
    });
  }

  addToBody(newTitle, newBody) {
    return this.setState({
      body: [...this.state.body, { title: newTitle, body: newBody }],
    });
  }

  render() {
    return (
      <div className='Cookbook'>
        {this.props.cookbook.map((value, index) => (
          <Recipe recipe={value} key={value.title.toString()} />
        ))}

        <div className='Recipe'>
          <div className='Header'>
            <input
              className='slightHeader'
              placeholder='Recipe Title'
              ref='title'
            />
            <br />
            <input
              className='description'
              placeholder='Recipe description'
              ref='description'
            ></input>
            <br />
            By{' '}
            <input className='description' placeholder='Author' ref='author' />
            <br />
            Serves{' '}
            <input className='description' placeholder='0' ref='servings' />
          </div>
          <div className='Ingredients'>
            <ul>
              {this.state.ingredients.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
              <li>
                <input
                  placeholder='New Ingredient'
                  ref='newIngredient'
                  id='newIngredient'
                />
              </li>
              <button
                onMouseUp={() =>
                  this.addToIngredients(this.refs.newIngredient?.value)
                }
              >
                Add
              </button>
            </ul>
          </div>
          <div className='body'>
            <ul>
              {this.state.body.map((value, index) => (
                <li key={index}>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </li>
              ))}
              <li>
                <input
                  className='slightHeader'
                  placeholder='Title'
                  ref='newTitle'
                />
                <br />
                <input placeholder='Body' ref='newBody' />
              </li>
              <li>
                <button
                  onMouseUp={() =>
                    this.addToBody(
                      this.refs.newTitle?.value,
                      this.refs.newBody?.value,
                    )
                  }
                >
                  Add
                </button>
              </li>
            </ul>
            <button
              onClick={() =>
                this.props.submit(
                  new RecipeSchema({
                    _id: null,
                    title: this.refs.title?.value,
                    description: this.refs.description?.value,
                    author: this.refs.author?.value,
                    ingredients: this.state.ingredients,
                    servings: this.refs.servings?.value,
                    body: this.state.body.map(
                      (value) =>
                        new BodySegmentSchema({
                          title: value.title,
                          body: value.body,
                        }),
                    ),
                  }),
                )
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cookbook: state.recipes,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (recipe) => dispatch(postRecipe(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cookbook);
