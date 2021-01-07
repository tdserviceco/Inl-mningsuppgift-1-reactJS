import React from 'react';

function PlayButton(props) {

  return (
    <div className="table-structure">
      <div className="table-header">
        <h3>P1 Score: {props.p1Score}</h3>
        <h3>CPU Score: {props.cpuScore}</h3>
      </div>
      <button type="button" disabled={props.disableButton} onClick={props.updateAll}>
        Roll {props.roll + 1}
      </button>

    </div>
  )
}
export default PlayButton;