import React, {Component} from 'react';

import OptionAnswer from './OptionAnswer.js'

class OptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      particular: null,
      selected: 'House',
    }

    this.handleSelection = this.handleSelection.bind(this);
    this.handleParticular = this.handleParticular.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleSelection(event) {
    this.setState({selected: event.target.value})

  }

  handleParticular(event) {
    this.setState({particular: event.target.value})
  }

  getOptions() {
    console.log(this.state.selected);
    console.log(this.props.characters.length)
    if (this.props.characters.length === 0) return null;
    console.log(this.props.characters)
    const characteristics = this.props.characters.map((character) => character[this.state.selected.toLowerCase()]);
    console.log(characteristics);
    const unique = characteristics.filter((characteristic, i, array) => (
      array.indexOf(characteristic) === i )
    );
    const options = unique.map((characteristic, i) => (<option key={i} value={characteristic}>{characteristic}</option>));
    console.log(options)
    return options;
  }

  handleSubmit(event) {
    event.preventDefault();
    const universal = this.state.selected.toLowerCase();
    const particular = this.state.particular;
    const answer = this.props.answer;

    this.setState({result: <OptionAnswer universal={universal} particular={particular} answer={answer}/>})
  }



  render() {
    return (
      <div id='option-form' className="ui form">
        <form onSubmit={this.handleSubmit} className='three fields'>
          <select onChange={this.handleSelection} className='ui selection dropdown'>
            <option value="House">House</option>
            <option value="Hair">Hair Colour</option>
            <option value="Gender">Gender</option>
            <option value="Dead">Are They Dead?</option>
          </select>

          <select id="optionSelect" onChange={this.handleParticular}>
          {this.getOptions()}
          </select>


          <input type="submit" value="Check" className='ui positive button fluid'/>
        </form>
        <div className='answer-text'>
        {this.state.result}
        </div>
      </div>
    )
  }
}

export default OptionForm;
