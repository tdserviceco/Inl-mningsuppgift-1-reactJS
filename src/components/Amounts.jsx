import React from 'react';

function Amounts(props) {

  const listAmount = (amount) => {
    let array = [];
    for (let i = 1; i <= amount; i++) {
      array.push(i)
    }
    return array.map((index, key) => <option value={index} key={key}>{index}</option>)
  }

  return (
    <>
      {listAmount(props.amount)}
    </>
  );
}

export default Amounts;