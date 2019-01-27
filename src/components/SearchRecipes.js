import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions'

class SearchRecipes extends Component{
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    }
  }
  search() {
    let { ingredients, dish } = this.state //optional es6 deconstruction. But currently prefer the straightforward approach
    const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`
    console.log('state', this.state, 'url', url);

    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
        .then(json => {
          this.props.setRecipes(json.results)
        });
  }
  render() {
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {''}
          <FormControl
          type="text"
          placeholder="garlic, chicken"
          onChange={event => this.setState({ ingredients: event.target.value})}
        />
        </FormGroup>
        {''}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {''}
          <FormControl
          type="text"
          placeholder="chicken noodle soup"
          onChange={event => this.setState({ dish: event.target.value})}
        />
        </FormGroup>
        {''}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { setRecipes })(SearchRecipes); //null for mapStateToPropsPart since most of that is already handled