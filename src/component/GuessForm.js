import React, { Component } from 'react'
import AnswerView from './AnswerView'

class GuessForm extends Component {

  constructor(props) {
    super(props)
    this.state={
      name: ''
    };
    // TODO: Binds
    this.selectName = this.selectName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  createNamesArray() {
    const namesArray = []
    this.props.characters.forEach((character) => {
      namesArray.push(character.name);
    })
    return namesArray;
  }

  selectName(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const answer = this.props.answer.name;
    this.setState({result: <AnswerView answer={answer} name={name}/>})
  }

  render() {
    const namesArray = this.createNamesArray()


    return(
      <form onSubmit={this.handleSubmit}>
        <select name='characters' onChange={this.selectName}>
          {namesArray.map((name, index) => <option key={index}>{name}</option>)};
        </select>
        <input type='submit' value='Submit Event'/>
        <div>
          {this.state.result}
        </div>
      </form>
    )
  }

}

export default GuessForm;
