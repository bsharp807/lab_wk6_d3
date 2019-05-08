import React, {Component} from 'react';
import OptionParticulars from './OptionParticulars.js';

class OptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      universal: '',
      particular: '',
      selected: 'House'
    }

    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelection(event) {
    this.setState({selected: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
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
          <OptionParticulars selected={this.state.selected}/>
        </form>
      </div>
    )
  }
}

export default OptionForm;
