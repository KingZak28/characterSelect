import React from 'react';
import Card from './Card';
const CardList = ({characters}) =>{
  return(
    <div>
      { characters.map((user, i)=> {
          return(
          <Card
            key = {i}
            name={characters[i].name}
            special = {characters[i].special}
            imgUrl = {characters[i].imgUrl}
           /> //You should include a key prop to minimize DOM work when doing loops.
        );
      })
    }
    </div>
);
}

export default CardList;
