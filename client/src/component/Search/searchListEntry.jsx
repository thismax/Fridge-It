import React from 'react';

const SearchListEntry = ({ recipe }) => {
  let url = (recipe.title).split(' ').join('-');

  return (
    <div className="col">
    <a className="card"
          href={"https://spoonacular.com/" + url + '-' + recipe.id} 
          target="_blank"
    >
      <div >
        <h4 className="recipe-title">{recipe.title}</h4>
      </div>
      <img className="related-recipes-image" src={recipe.image} />
    </a>
    </div>
  );
};

export default SearchListEntry;