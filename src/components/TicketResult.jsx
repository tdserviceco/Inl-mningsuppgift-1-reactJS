import React, { Component } from 'react';

class TicketResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const result = this.props.result;
    console.log(this.props.result)
    return (
      <div className="result-flex">
        <h3>{result[0].title}: {result[0].firstname} {result[0].lastname}</h3>
        <h4>Till: {result[0].to}</h4>
        <h4>Från: {result[0].from}</h4>
        <h4>Avgång: {result[0].timeDepart}</h4>
        <h4>Ankomst: {result[0].timeArrive}</h4>
        <h5>Biljettklass: {result[0].ticketClass}</h5>
        <h5>Antal biljetter: {result[0].tickets}</h5>
      </div>
    );
  }
}

export default TicketResult;