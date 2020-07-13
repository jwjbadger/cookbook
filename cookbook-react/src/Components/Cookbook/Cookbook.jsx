import React from 'react';
import Recipe from '../Recipe/Recipe';
import { connect } from 'react-redux';
import './Cookbook.css';

class Cookbook extends React.Component {
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
                <input placeholder='Recipe Title'></input>
              </b>
            </h3>
            <p>
              <i>
                <input placeholder='Recipe description'></input>
              </i>
              <br />
              <i>
                By <input placeholder='Author'></input>
              </i>
              <br />
              <i>
                Serves <input placeholder='0'></input>
              </i>
            </p>
          </div>
          <div className='Ingredients'>
            <ul>{/* list */}</ul>
          </div>
          <div className='body'>{/* list */}</div>
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
