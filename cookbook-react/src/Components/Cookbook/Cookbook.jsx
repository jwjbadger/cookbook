import React from 'react';
import Recipe from '../Recipe/Recipe';
import { connect } from 'react-redux';
import './Cookbook.css';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ['test', 'hey'],
      body: [
        { title: 'test', body: 'hey hey hey' },
        { title: 'double test', body: 'hey hey hey' },
      ],
    };
    this.addToIngredients = this.addToIngredients.bind(this);
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
            <h3>
              <b>
                <input placeholder='Recipe Title' ref='title' />
              </b>
            </h3>
            <p>
              <i>
                <input
                  placeholder='Recipe description'
                  ref='description'
                ></input>
              </i>
              <br />
              <i>
                By <input placeholder='Author' ref='author' />
              </i>
              <br />
              <i>
                Serves <input placeholder='0' ref='servings' />
              </i>
            </p>
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
                <input placeholder='Title' ref='newTitle' />
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cookbook: state.recipes,
});

// Does nothing right now, but may be needed in future
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

export default connect(mapStateToProps /* mapDispatchToProps */)(Cookbook);
