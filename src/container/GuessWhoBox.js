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
          hair: 'Black',
          gender: 'Male',
          dead: false,
          image: 'JonSnow.jpeg'
        },
        { id: 2,
          name: 'Tyrion Lannister',
          house: 'Lannister',
          hair: 'Blonde',
          gender: 'Male',
          dead: false,
          image: 'TyrionLannister.jpeg'
        },
        { id: 3,
          name: 'Danaerys Targaryen',
          house: 'Targaryen',
          hair: 'White',
          gender: 'Female',
          dead: false,
          image: 'DanaerysTargaryen.jpeg',
        },
        { id: 4,
          name: 'Eddard Stark',
          house: 'Stark',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'NedStark.jpeg',
        },
        { id: 5,
          name: 'Jaime Lannister',
          house: 'Lannister',
          hair: 'Blonde',
          gender: 'Male',
          dead: false,
          image: 'JaimeLannister.jpeg',
        },
        { id: 6,
          name: 'Cersei Lannister',
          house: 'Lannister',
          hair: 'Blonde',
          gender: 'Female',
          dead: false,
          image: 'CerseiLannister.jpeg',
        },
        { id: 7,
          name: 'Jorah Mormont',
          house: 'Mormont',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'JorahMormont.jpeg',
        },
        { id: 8,
          name: 'Renly Baratheon',
          house: 'Baratheon',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'RenlyBaratheon.jpeg',
        },
        { id: 9,
          name: 'Margaery Tyrell',
          house: 'Tyrell',
          hair: 'Brown',
          gender: 'Female',
          dead: false,
          image: 'MargaeryTyrell.jpeg',
        },
        { id: 10,
          name: 'Loras Tyrell',
          house: 'Tyrell',
          hair: 'Blonde',
          gender: 'Male',
          dead: false,
          image: 'LorasTyrell.jpeg',
        },
        { id: 11,
          name: 'Theon Greyjoy',
          house: 'Greyjoy',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'TheonGreyjoy.jpeg',
        },
        { id: 12,
          name: 'Balon Greyjoy',
          house: 'Greyjoy',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'BalonGreyjoy.jpeg',
        },
        { id: 13,
          name: 'Roose Bolton',
          house: 'Bolton',
          hair: 'Black',
          gender: 'Male',
          dead: false,
          image: 'RooseBolton.jpeg',
        },
        { id: 14,
          name: 'Ramsey Bolton',
          house: 'Bolton',
          hair: 'Black',
          gender: 'Male',
          dead: false,
          image: 'RamseyBolton.jpeg',
        },
        { id: 15,
          name: 'Viserys Targaryen',
          house: 'Targaryen',
          hair: 'White',
          gender: 'Male',
          dead: false,
          image: 'ViserysTargaryen.jpeg',
        },
        { id: 16,
          name: 'Stannis Baratheon',
          house: 'Baratheon',
          hair: 'Grey',
          gender: 'Male',
          dead: false,
          image: 'StannisBaratheon.jpeg',
        },
        { id: 17,
          name: 'Arya Stark',
          house: 'Stark',
          hair: 'Brown',
          gender: 'Female',
          dead: false,
          image: 'AryaStark.jpeg',
        },
        { id: 18,
          name: 'Catelyn Stark',
          house: 'Stark',
          hair: 'Brown',
          gender: 'Female',
          dead: false,
          image: 'CatelynStark.jpeg',
        },
        { id: 19,
          name: 'Sansa Stark',
          house: 'Stark',
          hair: 'Red',
          gender: 'Female',
          dead: false,
          image: 'SansaStark.jpeg',
        },
        { id: 20,
          name: 'Benjen Stark',
          house: 'Stark',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'BenjenStark.jpeg',
        },
        { id: 21,
          name: 'Lyanna Mormont',
          house: 'Mormont',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'LyannaMormont.jpeg',
        },
        { id: 22,
          name: 'Jeor Mormont',
          house: 'Mormont',
          hair: 'Brown',
          gender: 'Male',
          dead: false,
          image: 'Jeor Mormont.jpeg',
        },
        { id: 23,
          name: 'Tormund Giantsbane',
          house: 'Wildling',
          hair: 'Red',
          gender: 'Male',
          dead: false,
          image: 'Tormund.jpeg',
        },
        { id: 24,
          name: 'Mance Rayder',
          house: 'Wildling',
          hair: 'Black',
          gender: 'Male',
          dead: false,
          image: 'Mance Rayder.jpeg',
        },
        { id: 25,
          name: 'Ygritte',
          house: 'Wildling',
          hair: 'Red',
          gender: 'Female',
          dead: false,
          image: 'Ygritte.jpeg',
        }
      ],
      answer: ''
    }
  }

  render() {
    this.randomAnswer();
    return (
      <div className="guess-who-box">
        <h1>Guess The Game of Thrones Character!</h1>
        <h3>*accurate as at S8E3</h3>
        <PicsView characters={this.state.characters}/>
        <OptionForm answer={this.state.answer} />
        <GuessForm answer={this.state.answer} characters={this.state.characters}/>
      </div>
    )
  }

  randomAnswer() {
    const characters = this.state.characters;
    this.setState({answer: this.rand(characters)})
  }

  rand(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

export default GuessWhoBox;
