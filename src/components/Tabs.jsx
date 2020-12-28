import React from 'react';

function Tabs(props) {
  return (
    <div className="tabs">
      <div className="tab-header">
        <h1 className="tab-title">
          åka tåg
    </h1>
      </div>
      <div className="tabs-flex">
        <div className="tab-left">
          <h3 className="tab-text">{props.from}</h3>
          <h5 className="depart-time">{props.departTime}</h5>
        </div>

        <div className="tab-right">
          <h3 className="tab-text">{props.to}</h3>
          <h5 className="arrive-time">{props.arriveTime}</h5>
        </div>
      </div>
    </div>
  );
}

export default Tabs;