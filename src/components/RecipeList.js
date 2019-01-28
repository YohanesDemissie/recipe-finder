import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return(
      <div>
        <h4><Link to="/favorites">Favorites</Link></h4>
        {
          this.props.recipes.map((recipe, index) => { // adds a unique key/id for each index of the array of recipes 
            return (
              <div>
                <RecipeItem
                  index={index}
                  recipe={recipe}
                  favoriteButton={true}
                />
              </div>
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