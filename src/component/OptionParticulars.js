import React from 'react';

const OptionParticulars = (props) => {

  const selection = props.selected;

  let options;

  switch (selection) {
    case 'House':
      options = (
      <select>
        <option value='Baratheon'>Baratheon</option>
        <option value='Bolton'>Bolton</option>
        <option value='Greyjoy'>Greyjoy</option>
        <option value='Lannister'>Lannister</option>
        <option value='Mormont'>Mormont</option>
        <option value='Stark'>Stark</option>
        <option value='Tyrell'>Tyrell</option>
        <option value='Wildling'>Wildling</option>
      </select>
    )
      break;
    case 'Hair':
      options = (
      <select>
        <option value="Black">Black</option>
        <option value="Blonde">Blonde</option>
        <option value="Brown">Brown</option>
        <option value="Red">Red</option>
        <option value="White">White</option>
      </select>
      )
      break;
    case 'Gender':
      options = (
        <select>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      )
      break;
    case 'Dead':
      options = (
        <select>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      )
      break;
    default:
      console.log('SOMETHING HAS GONE WRONG!!!');
      options = (
      <select>
        <option value='Baratheon'>Baratheon</option>
        <option value='Bolton'>Bolton</option>
        <option value='Greyjoy'>Greyjoy</option>
        <option value='Lannister'>Lannister</option>
        <option value='Mormont'>Mormont</option>
        <option value='Stark'>Stark</option>
        <option value='Tyrell'>Tyrell</option>
        <option value='Wildling'>Wildling</option>
      </select>
  )
  }

  return options;

}

export default OptionParticulars;
