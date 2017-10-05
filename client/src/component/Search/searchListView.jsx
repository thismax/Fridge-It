import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Message } from 'semantic-ui-react';

import SearchListEntry from './searchListEntry.jsx';
import * as searchActions from '../../actions/searchActions.js';

class SearchListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipeList, recipeFetched, recipeFetching, onRecipeListPage, actions, ingredients, ingredientsFetched } = this.props;
    const ingredientList = ingredients.map(ingredient => {
      return ingredient.name;
    });

    // DO NOT UNCOMMENT FOR REST OF THE DAY! IT WORKS THOUGH!
    if(ingredientsFetched && !recipeFetched) {
      ingredientList.length > 0 ? actions.fetchRecipes(ingredientList) : null;
    }

    if(ingredientList.length === 0) {
      return (
        <div>
          <h2 className='ui dividing header'>Recommended Recipes</h2>
          <div style={{textAlign: 'center'}}>
            <Message>
              <Message.Header content={'No Recipes to Show'} />
            <p>Add ingredients to the Fridge if you'd like to see some recipes!</p>
            </Message>
          </div>
        </div>
      )
    } else {
      let top3 = [];
      for(let i = 0; i < 3; i++) {
        top3.push(recipeList[i]);
      };

      return (
        <div>
          <h2 className='ui dividing header'>Recommended Recipes</h2>
          <div className="row">
            {top3.map(recipe => {
              return <SearchListEntry {...actions} key={recipe.id} recipe={recipe} />
            })}
          </div>
        </div>
      );
    }
  }
};

const mapState = (store) => {
  return {
    ingredients: store.items.items,
    ingredientsFetched: store.items.fetched,
    recipeList: store.search.recipes,
    recipeFetched: store.search.fetched,
    recipeFetching: store.search.fetching,
    recipeError: store.search.error,
    fridgePosted: store.fridge.posted
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  }
};

export default connect(mapState, mapDispatch)(SearchListView);