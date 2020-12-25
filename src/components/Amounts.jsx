import React, { Component } from 'react';

class Amounts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount : '',
    }
  }

  listAmount = (amount) => {
    let array = [];
    for(let i = 1; i <= amount; i++ ) {
     array.push(i)
    }
    return array.map((index,key) => <option value={index} key={key}>{index}</option>)
  }

  render() {
    return (
      <>
        {this.listAmount(this.props.amount)}
      </>
    );
  }
}

export default Amounts;