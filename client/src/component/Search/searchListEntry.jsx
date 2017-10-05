import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SearchListEntry = ({ recipe }) => {
  let url = (recipe.title).split(' ').join('-');

  return (
    <a className="card"
          href={"https://spoonacular.com/" + url + '-' + recipe.id} 
          target="_blank"
    >
      <div >
        <h4 style={{color: 'black'}}>{recipe.title}</h4>
      </div>
      <img src={recipe.image} height={200} />
    </a>
  );
};

export default SearchListEntry;