import React from 'react';

const AnswerView = (props) => {

  const name = this.props.name
  const answer = this.props.answer;

  if (name == answer) {
      return <div>Yes! That's the correct answer!</div>
  } else {
      return <div>No, that's wrong, try again</div>
  }

}

export default AnswerView;
