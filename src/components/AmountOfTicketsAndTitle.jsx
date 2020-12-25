import React, { Component } from 'react';
import AmountsOfTickets from './Amounts';
import Title from './Titles';
class AmountOfTicketsAndTitle extends Component {
  constructor() {
    super();
  }

  selectTickets = (e) => {
    console.log(e.target.value);
  }

  selectTitle = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ticket-and-title-flex">
        <label htmlFor="tickets">
          Antal biljetter
        <select onChange={this.selectTickets} >
            <AmountsOfTickets amount={10} />
          </select>
        </label>

        <label htmlFor="title">
          Titel
        <select onChange={this.selectTitle} >
            <Title titles={['Mr', 'Ms', 'Sir', 'Lady']} />
          </select>
        </label>
      </div>
    );
  }
}

export default AmountOfTicketsAndTitle;