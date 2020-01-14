import React from 'react';
import './App.css';
import RollDice from './RollDice.js';

function App() {
  return (
    <div className="App">
      <RollDice num={5} />
    </div>
  );
}

export default App;
