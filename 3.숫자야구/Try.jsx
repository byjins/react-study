import React from 'react';

const Try = (props) => {
  return (
    <li>
      <div>{props.tryInfo.tries}</div>
      <div>{props.tryInfo.result}</div>
    </li>
  );
};

export default Try;
