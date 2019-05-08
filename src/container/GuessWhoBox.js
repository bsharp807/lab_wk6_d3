import React, {Component} from 'react';
import PicsView from '../component/PicsView.js';
import OptionForm from '../component/OptionForm.js';
import GuessForm from '../component/GuessForm.js';

class GuessWhoBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: [
        { id: 1,
          name: 'Jon Snow',
          house: 'Targaryen',
          hair: 'black',
          gender: 'male',
          dead: false,
          image: 'JonSnow.jpeg'
        },
        { id: 2,
          name: 'Tyrion Lannister',
          house: 'Lannister',
          hair: 'blonde',
          gender: 'male',
          dead: false,
          image: 'TyrionLannister.jpeg'
        },
        { id: 3,
          name: 'Danaerys Targaryen',
          house: 'Targaryen',
          hair: 'white',
          gender: 'female',
          dead: false,
          image: 'DanaerysTargaryen.jpeg',
        }
      ]
    }
  }

  render() {
    return (
      <div className="guess-who-box">
        <h1>Guess The Game of Thrones Character!</h1>
        <h3>*accurate as at S8E3</h3>
        <PicsView />
        <OptionForm />
        <GuessForm />
      </div>
    )
  }

}

export default GuessWhoBox;
