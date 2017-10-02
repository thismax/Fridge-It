import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SearchListEntry = ({ recipe }) => {
  let url = (recipe.title).split(' ').join('-');

  return (
    <Card centered raised
          fluid={true}
          href={"https://spoonacular.com/" + url + '-' + recipe.id} 
          target="_blank"
    >
      <Card.Header textAlign={'center'}>
        <h4 style={{color: 'black'}}>{recipe.title}</h4>
      </Card.Header>
      <Image src={recipe.image} height={200} />
    </Card>
  );
};

export default SearchListEntry;