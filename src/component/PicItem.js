import React from 'react';

const PicItem = (props) => {
  return (
    <div className= "pic-item">
      <img src={`/images/${props.image}`}>
      <p>{props.name}</p>
    </div>
  )
}
