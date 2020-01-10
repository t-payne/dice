import React from 'react';
import './Die.css';

class Die extends React.Component {
  static defaultProps = { num: 1 }

  render() {
      return(
        <div>
          <i class="fas fa-dice-one"></i>
        </div>
      )
  }
}

export default Die;