import React, { Component } from 'react';
import Game from './components/Game';
class App extends Component {
  constructor() {
    super();
    this.state = {
      cpuScore: 0,
      p1Score: 0,
      roll: 1,
      disableButton: false,
      currentDiceP1: 0,
      currentDiceCPU: 0,
    }
  }

  updateAll = () => {
    let randomP1 = Math.floor(Math.random() * (6 - 1) + 1)
    let randomCPU = Math.floor(Math.random() * (6 - 1) + 1)

    // Check if roll is over 3 if not continue the game till we reach to roll 3
    if (this.state.roll >= 4) {
      this.setState((prevState) => ({
        disableButton: true,
        roll: 'is over'
      }))
      const { p1Score, cpuScore } = this.state

      if (p1Score > cpuScore) {
        console.log(p1Score + " vs " + cpuScore)
        alert("You won!")
      }
      else if (p1Score === cpuScore) {
        console.log(p1Score + " vs " + cpuScore)
        alert("Tie!!")
      }
      else {
        console.log(p1Score + " vs " + cpuScore)
        alert("CPU Won!!!")

      }
    }
    else {

      this.setState((prevState) => ({

        //Update Dice layout
        currentDiceP1: randomP1,
        currentDiceCPU: randomCPU,
        //Update P1score
        p1Score: prevState.p1Score + randomP1,
        //Update CPUscore
        cpuScore: prevState.cpuScore + randomCPU,
        //Update X rolls
        roll: prevState.roll + 1,
      }));
    }
  }

  render() {
    const { roll, p1Score, cpuScore, disableButton, currentDiceP1, currentDiceCPU, randomDice } = this.state
    return (
      <main>
        <Game currentDiceCPU={currentDiceCPU} currentDiceP1={currentDiceP1} randomDice={randomDice} disableButton={disableButton} cpuScore={cpuScore} p1Score={p1Score} roll={roll} updateAll={this.updateAll} />
      </main>
    );
  }
}

export default App;