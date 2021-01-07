import React from 'react';
function Dice(props) {
  return (
    <div className="dices">
      <span className={`dice dice-1 ${props.displayCurrentDiceCPU === 1 ? '' : 'hide'}`} title="Dice 1"></span>
      <span className={`dice dice-2 ${props.displayCurrentDiceCPU === 2 ? '' : 'hide'}`} title="Dice 2"></span>
      <span className={`dice dice-3 ${props.displayCurrentDiceCPU === 3 ? '' : 'hide'}`} title="Dice 3"></span>
      <span className={`dice dice-4 ${props.displayCurrentDiceCPU === 4 ? '' : 'hide'}`} title="Dice 4"></span>
      <span className={`dice dice-5 ${props.displayCurrentDiceCPU === 5 ? '' : 'hide'}`} title="Dice 5"></span>
      <span className={`dice dice-6 ${props.displayCurrentDiceCPU === 6 ? '' : 'hide'}`} title="Dice 6"></span>
    </div>
  );
}

export default Dice;