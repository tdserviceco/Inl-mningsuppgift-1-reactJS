import React, { Component } from 'react';
class AcceptCondition extends Component {
  constructor() {
    super()
    this.state = {
      operation: 'off',
      disabled: true
    }
  }
  
  activateButton = (e) => {
    if (e.target.value === 'off') {
      this.setState({
        disabled: false,
        operation: 'on'
      })
    }
    else {
      this.setState({
        disabled: true,
        operation: 'off'
      })
    }
  }
  render() {

    return (
      <div className="accept-condition-flex">
        <div className="acceptance">
          <input type="checkbox" value={this.state.operation} onChange={this.activateButton} /> Godkänner villkoren
          </div>
        <input type="submit" className={`btn booking ${this.state.disabled ? 'btn-disabled' : ''}`
        } disabled={this.state.disabled} readOnly value="Boka Biljetter"></input>
      </div>
    );
  }
}

export default AcceptCondition;