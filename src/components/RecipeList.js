import React, { Component } from 'react'
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return(
      <div>
        {
          this.props.recipes.map((recipe, index) => { // adds a unique key/id for each index of the array of recipes 
            return (
              <RecipeItem key={index} recipe={recipe}/>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);