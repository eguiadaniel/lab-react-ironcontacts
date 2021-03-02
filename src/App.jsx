import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  randomizePeople = () => {
    this.setState({
      people: (this.state.people = contacts)
    });

    let randomNumber = Math.floor(
      Math.random() * (contacts.length - 5 - 0) + 0
    );

    const randomPeople = contacts.slice(randomNumber, randomNumber + 5);
    console.log(randomPeople);

    this.setState({
      people: (this.state.people = randomPeople)
    });

    console.log(this.state.people);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <button onClick={() => this.randomizePeople()}>Randomize!</button>
        {/* <p>{this.state.people}</p> */}

        <ul>
          {this.state.people.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
