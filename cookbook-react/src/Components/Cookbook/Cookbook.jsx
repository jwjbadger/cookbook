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
