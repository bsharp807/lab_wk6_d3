import React from 'react';
import PicItem from './PicItem.js';

const PicsView = (props) => {

  const pictures = props.characters.map((character) => {
    return <PicItem name={character.name} image={character.image}>
  });

  return (
    <div className= "pics-view">
      {pictures}
    </div>
  )

}

export default PicsView;
