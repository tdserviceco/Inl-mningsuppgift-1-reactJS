import React, { Component } from 'react';

class Titles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  listTitle = (title) => {
    return title.map((index, key) => <option value={index} key={key}>{index}</option>)
  }
  render() {
    return (
      <>
        {this.listTitle(this.props.titles)}
      </>
    );
  }
}

export default Titles;