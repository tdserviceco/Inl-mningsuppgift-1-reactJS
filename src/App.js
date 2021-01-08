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
      hide: true
    }
  }

  updateAll = () => {
    let randomP1 = Math.floor(Math.random() * (6 - 1) + 1)
    let randomCPU = Math.floor(Math.random() * (6 - 1) + 1)

    // Check if roll is over 3 if not continue the game till we reach to roll 3
    if (this.state.roll === 3) {
      this.setState((prevState) => ({
        disableButton: true,
        hide: false,
        roll: 'is over',
        p1Score: prevState.p1Score + randomP1,
        //Update CPUscore
        cpuScore: prevState.cpuScore + randomCPU,
      }))

      setTimeout(() => {
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
      }, 1000)

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
    const { roll, p1Score, cpuScore, disableButton, currentDiceP1, currentDiceCPU, randomDice, hide } = this.state
    return (
      <main>
        <Game hide={hide} currentDiceCPU={currentDiceCPU} currentDiceP1={currentDiceP1} randomDice={randomDice} disableButton={disableButton} cpuScore={cpuScore} p1Score={p1Score} roll={roll} updateAll={this.updateAll} />
      </main>
    );
  }
}

export default App;