import React, {Component} from 'react';
import OptionParticulars from './OptionParticulars.js';

class OptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      particular: 'Baratheon',
      selected: 'House',
    }

    this.handleSelection = this.handleSelection.bind(this);
    this.handleParticular = this.handleParticular.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelection(event) {
    this.setState({selected: event.target.value})
    const defaultOption = this.setDefaultOption(event.target.value);
    this.setState({particular: defaultOption});
  }

  handleParticular(event) {
    this.setState({particular: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  setDefaultOption(value) {
    switch (value) {
      case 'House':
        return 'Baratheon';
        break;
      case 'Hair':
        return 'Black';
        break;
      case 'Gender':
        return 'Female';
        break;
      case 'Dead':
        return true;
        break;
      default:
        return 'Baratheon';
    }
  }


  render() {
    return (
      <div className="option-form">
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleSelection}>
            <option value="House">House</option>
            <option value="Hair">Hair Colour</option>
            <option value="Gender">Gender</option>
            <option value="Dead">Are They Dead?</option>
          </select>
           <OptionParticulars selected={this.state.selected} change={this.handleParticular} />
          <input type="submit" value="Check" />
        </form>
      </div>
    )
  }
}

export default OptionForm;
