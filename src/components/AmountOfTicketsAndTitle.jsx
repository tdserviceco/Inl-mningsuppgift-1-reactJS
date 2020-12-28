import React from 'react';
import AmountsOfTickets from './Amounts';
import Title from './Titles';

function AmountOfTicketsAndTitle() {
  return (
    <div className="ticket-and-title-flex">
      <label htmlFor="tickets">
        Antal biljetter
        <select>
          <AmountsOfTickets amount={10} />
        </select>
      </label>

      <label htmlFor="title">
        Titel
        <select>
          <Title titles={['Mr', 'Ms', 'Sir', 'Lady']} />
        </select>
      </label>
    </div>
  );
}

export default AmountOfTicketsAndTitle;