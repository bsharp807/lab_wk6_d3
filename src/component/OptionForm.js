import React, {Component} from 'react';

class OptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      universal: '',
      particular: ''
    }
  }

  render() {
    return (
      <div className="option-form">
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
}

export default OptionForm
