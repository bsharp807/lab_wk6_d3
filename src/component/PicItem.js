import React from 'react';

const PicItem = (props) => {
  const image = `/images/${props.image}`
  return (
    <div className= "pic-item">
      <img src={image} />
      <p>{props.name}</p>
    </div>
  )
}

export default PicItem;
