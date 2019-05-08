import React, { Component } from 'react'

class GuessForm extends Component {

  component(props) {
    super(props)
    this.state={
      name: ''
    }
    // TODO: Binds
    this.createNamesArray = this.createNamesArray.bind(this)
    this.slectName = this.selectName.bind(this)

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
    if (name == this.props.answer.name) {
      return true
    } else {
      return false
    }
    this.setState({name: ''})
  }

  render() {
    const namesArray = createNamesArray()
    return(
      <form onSubmit={this.handleSubmit}>
        <select name='characters' onChange={this.selectName}>
          {namesArray.map((name) => <option>{name}</option>)};
        </select>
        <input type='submit' value='Submit Event'/>
      </form>


    )
  }

}
