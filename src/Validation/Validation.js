import React from 'react';

const validation = props => {
  let text = 'Text long enough';
  if (props.len <= 5) {
    text = 'Text too short';
  }
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default validation;
