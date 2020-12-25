import React, { Component, useEffect } from 'react';
import AcceptCondition from './components/AcceptCondition';
import AmountOfTicketsAndTitle from './components/AmountOfTicketsAndTitle';
import NameField from './components/NameField';
import TicketClasses from './components/TicketClasses';
import Tabs from './components/Tabs';
import TicketResult from './components/TicketResult';
class App extends Component {
  constructor() {
    super();
    this.state = {
      ticketInformation: [{}],
      hideMain: false,
      showResult: false
    }
  }

  saveInformation = (e) => {
    e.preventDefault();
    let ticketClass;
    if (e.target[0].value === '2:a klass' && e.target[0].checked) {
      ticketClass = e.target[0].value;
    }
    else if (e.target[1].value === '1:a klass' && e.target[1].checked) {
      ticketClass = e.target[1].value;
    }
    this.setState({
      ticketInformation: [{
        'timeDepart': '10:30',
        'from': 'Göteborg',
        'to': 'Stockholm',
        'timeArrive': '14:45',
        'ticketClass': ticketClass,
        'firstname': e.target[4].value,
        'lastname': e.target[5].value,
        'tickets': e.target[2].value,
        'title': e.target[3].value,
      }],
      hideMain: true,
      showResult: true
    })
  }

  render() {
    const { showResult, ticketInformation, hideMain } = this.state;
    return (
      <>
        <main className={`${hideMain ? 'hide' : ''}`}>
          <form onSubmit={this.saveInformation}>
            <Tabs from="göteborg" to="stockholm" arriveTime="14:45" departTime="10:30" />
            <TicketClasses />
            <AmountOfTicketsAndTitle />
            <NameField />
            <AcceptCondition />
          </form>
        </main>
        {showResult &&
          <div className={`result-field`}>
            <TicketResult result={ticketInformation} />
          </div>
        }
      </>
    );
  }
}

export default App;