import React, {Component} from 'react';

class OptionParticulars extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.defaultOption = 'Baratheon'
  }

  updateDefaultOption(particular) {
    this.defaultOption = particular;
  }

  render() {

    const selection = this.props.selected;
    console.log(selection);
    let options;

    switch (selection) {
      case 'House':
      this.updateDefaultOption('Baratheon');
        options = (
        <select onChange={this.props.change} value='Baratheon'>
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
        this.updateDefaultOption('Black');
        options = (
        <select onChange={this.props.change} value='Black'>
          <option value="Black">Black</option>
          <option value="Blonde">Blonde</option>
          <option value="Brown">Brown</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
        </select>
        )
        break;
      case 'Gender':
      this.updateDefaultOption('Female');
        options = (
          <select onChange={this.props.change} value='Female'>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        )
        break;
      case 'Dead':
      this.updateDefaultOption(true);
        options = (
          <select onChange={this.props.change} value={true}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        )
        break;
      default:
        console.log('SOMETHING HAS GONE WRONG!!!');
        options = (
        <select onChange={this.props.change}>
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

}
export default OptionParticulars;
