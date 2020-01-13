import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = { num: 2 }

  constructor(props) {
      super(props);
  
      let dice = [];
      for (let i = 0; i < props.num; i++) {
        dice.push(<Die key={i}/>);
      }

      this.state = { 
        num: props.num,
        isRolling: false,
        dice: dice
      };
  
      this.roll = this.roll.bind(this);
      this.endRoll = this.endRoll.bind(this);
  }
  
  genDieValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  endRoll(e) {
    this.setState({ isRolling: false });
  }

  roll(e) {
    var words = ['','one ','two ','three ','four ', 'five ','six '];    
    this.setState({ isRolling: true });
    this.state.dice.map(die => die.props.numStr);
    setTimeout(this.endRoll, 1000);
  }
  
  render() {
    
      return(
        <div>
          <div>
            {this.state.dice}
          </div>
          <div>
            <button onClick={this.roll}>
                  { this.state.isRolling ? "Rolling..." : "Roll" }
            </button>
          </div>
        </div>
      )
  }
}

export default RollDice;