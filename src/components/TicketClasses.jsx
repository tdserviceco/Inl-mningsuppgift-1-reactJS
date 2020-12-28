import React from 'react';

function TicketClasses() {
  return (
    <div className="ticket-class-flex">
    <label htmlFor="second-class">
      <input defaultChecked name="ticket-class" id="second-class" type="radio" value="2:a klass" />
      2:a klass
    </label>
    <label htmlFor="first-class">
      <input id="first-class" name="ticket-class" type="radio" value="1:a klass" />
      1:a klass
    </label>
  </div>
  );
}

export default TicketClasses;