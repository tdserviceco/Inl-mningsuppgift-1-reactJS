import React, { Component } from 'react';
import Game from './components/Game';
class App extends Component {
  constructor() {
    super();
    this.state = {
      cpuScore: 0,
      p1Score: 0,
      roll: 0,
      disableButton: false
    }
  }

  updateAll = () => {
    // Check if roll is over 3 if not continue the game till we reach to roll 3
    if (this.state.roll >= 2) {
      this.setState((prevState) => ({
        disableButton: true
      }))
      const { p1Score, cpuScore } = this.state
      if (p1Score > cpuScore) {
        alert("You won!")
      }
      else if (p1Score === cpuScore) {
        alert("Tie!!")
      }
      else {
        alert("CPU Won!!!")
      }
      return;
    }
    else {
      this.setState((prevState) => ({
        //Update P1score
        p1Score: prevState.p1Score + Math.floor(Math.random() * (6 - 1) + 1),
        //Update CPUscore
        cpuScore: prevState.cpuScore + Math.floor(Math.random() * (6 - 1) + 1),
        //Update X rolls
        roll: prevState.roll + 1,
      }));
    }
  }

  render() {
    const { roll, p1Score, cpuScore, disableButton } = this.state
    return (
      <main>
        <Game disableButton={disableButton} cpuScore={cpuScore} p1Score={p1Score} roll={roll} updateAll={this.updateAll} />
      </main>
    );
  }
}

export default App;