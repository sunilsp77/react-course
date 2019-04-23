import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    //The below statement is an alternative for the above statement
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    // slice without an argument returns a copy of the array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 },
//     ],
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hello I m REACT</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

export default App;
