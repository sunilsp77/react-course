import React from 'react';
import './Cockpit.css';

const cockpit = props => {
  const classes = [];
  if (props.persons.length <= 2) {
    classes.push('red'); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push('bold'); // classes = ['red', 'bold']
  }
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };
  if (props.showPersons) {
    style.backgroundColor = 'red';
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
