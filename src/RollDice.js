import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = { 
    sides: ['one','two','three','four','five','six'],
    num: 2
  }

  constructor(props) {
      super(props);

      this.state = {
        sides: props.sides,
        isRolling: false,
        dice: new Array(props.num).fill(0)
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
    this.setState({ isRolling: true });
    let newvals = this.state.dice.map(() => this.genDieValue());
    this.setState({ dice: newvals });
    setTimeout(this.endRoll, 1000);
  }
  
  render() {
      return(
        <div className='RollDice'>
          <div className='RollDice-containter'>
            { this.state.dice.map(v => <Die face={this.state.sides[v]}/>) }
          </div>
          <div>
            <button onClick={this.roll} disabled={this.state.isRolling}>
                  { this.state.isRolling ? "Rolling..." : "Roll" }
            </button>
          </div>
        </div>
      )
  }
}

export default RollDice;