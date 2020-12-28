import React from 'react';

function Titles(props) {
  const listTitle = (title) => {
    return title.map((index, key) => <option value={index} key={key}>{index}</option>)
  }
  return (
    <>
      {listTitle(props.titles)}
    </>
  );
}

export default Titles;