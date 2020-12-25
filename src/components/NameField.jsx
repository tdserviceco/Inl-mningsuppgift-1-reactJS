import React, { Component } from 'react';

class NameField extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  changeFirstNameField = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  changeLastNameField = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div className="names-flex">
        <label htmlFor="first-name">
          Förnamn
      <input name="first-name" id="first-name" type="text" value={firstName} onChange={this.changeFirstNameField} />
        </label>
        <label htmlFor="last-name">
          Efternamn
      <input name="last-name" id="last-name" type="text" value={lastName} onChange={this.changeLastNameField} />
        </label>
      </div>
    );
  }
}

export default NameField;