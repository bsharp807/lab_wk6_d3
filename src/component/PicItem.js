import React from 'react';
import './main.css'

const PicItem = (props) => {
  const image = `/images/${props.image}`
  return (
    <div className= "pic-item">
      <img src={image} className='pic'/>
      <p>{props.name}</p>
    </div>
  )
}

export default PicItem;
