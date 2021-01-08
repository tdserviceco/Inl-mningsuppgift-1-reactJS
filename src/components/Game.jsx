import React from 'react';
import DiceP1 from './DiceP1';
import DiceCPU from './DiceCPU';
function PlayButton(props) {
  const refreshPage = () => {
    return window.location.reload();
  }
  console.log(props.hide)
  return (
    <div className="table-structure">
      <div className="table-header">
        <h3>P1 Score: {props.p1Score}</h3>
        <h3>CPU Score: {props.cpuScore}</h3>
      </div>
      <div className="table-dice">
        <DiceP1 displayCurrentDiceP1={props.currentDiceP1} />
        <DiceCPU displayCurrentDiceCPU={props.currentDiceCPU} />

      </div>
      <button type="button" disabled={props.disableButton} onClick={props.updateAll}>
        Roll {props.roll}
      </button>
      <button className={props.hide ? 'hide' : 'reset'} type="button" onClick={refreshPage}>Reset game</button>
    </div>
  )
}
export default PlayButton;