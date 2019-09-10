import React from 'react';

const Card = ({name,special,imgUrl} ) => {
  return(
    <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5'>
      <img alt='Zoro' src={imgUrl} height="300" width ="300"/>
      <div>
        <h2> {name}</h2>
        <h3> {special}</h3>
      </div>

    </div>
  );
}

export default Card;
