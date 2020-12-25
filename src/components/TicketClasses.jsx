import React, { Component } from 'react';

class TicketClasses extends Component {
  constructor(props) {
    super(props)
  }

  ticketClass = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ticket-class-flex">
        <label htmlFor="second-class">
          <input defaultChecked name="ticket-class" id="second-class" type="radio" value="2:a klass" onClick={this.ticketClass} />
          2:a klass
        </label>
        <label htmlFor="first-class">
          <input id="first-class" name="ticket-class" type="radio" value="1:a klass" onClick={this.ticketClass} />
          1:a klass
        </label>
      </div>
    );
  }
}

export default TicketClasses;