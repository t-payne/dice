import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = { num: 2 }

  constructor(props) {
      super(props);
      this.state = { 
        num: props.num,
        isRolling: false
      };
      this.roll = this.roll.bind(this);
      this.endRoll = this.endRoll.bind(this);
  }
  
  genDieValue() {
    return Math.floor(Math.random() * 6) + 6;
  }

  endRoll(e) {
    this.setState({ isRolling: false });
  }

  roll(e) {
    this.setState({ isRolling: true });
    setTimeout(this.endRoll, 1000);
  }

  duplicate = (x, n) => Array.from(new Array(n), () => x);

  render() {
      return(
        <div>
          <div>
            {this.duplicate(<Die/>, this.props.num)}
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