import React from 'react';
function Dice(props) {
  return (
    <div className="dices">
      <span className={`dice dice-1 ${props.displayCurrentDiceP1 === 1 ? '' : 'hide'}`} title="Dice 1"></span>
      <span className={`dice dice-2 ${props.displayCurrentDiceP1 === 2 ? '' : 'hide'}`} title="Dice 2"></span>
      <span className={`dice dice-3 ${props.displayCurrentDiceP1 === 3 ? '' : 'hide'}`} title="Dice 3"></span>
      <span className={`dice dice-4 ${props.displayCurrentDiceP1 === 4 ? '' : 'hide'}`} title="Dice 4"></span>
      <span className={`dice dice-5 ${props.displayCurrentDiceP1 === 5 ? '' : 'hide'}`} title="Dice 5"></span>
      <span className={`dice dice-6 ${props.displayCurrentDiceP1 === 6 ? '' : 'hide'}`} title="Dice 6"></span>
    </div>
  );
}

export default Dice;