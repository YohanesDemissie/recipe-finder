import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions';

class RecipeItem extends Component {
  constructor() {
    super();

    this.state = { //setting up a boolean for true or false of favorite clicked. setting default as false
      favorited: false,
    }
  }

  favorite(recipe) {
    this.props.favoriteRecipe(recipe); //switch boolean state to 'true' on click rendered on button tag below
    this.setState({favorited: true});
  }

  render() {
    let { recipe } = this.props
    return(
      <div className="recipe-item">
      {
        this.state.favorited //if the state of favorited becomes true (ie when the star button is clicked)...
          ?
            <div
              className="star">&#9733;</div> // ...the star icon is filled through the unicode of a colored store '&#9733;'
            : //...otherwise, the star button is transparent by default (false) with the given unicode '&#9734;'
            <div
              className="star"
              onClick={() => this.favorite(recipe)}
            >
              &#9734;
            </div>
      }
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
          <img
            src={recipe.thumbnail}
            alt={recipe.title}
            className="recipe-img"
          />
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe})(RecipeItem)