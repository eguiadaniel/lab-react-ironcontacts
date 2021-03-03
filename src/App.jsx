import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: contacts.slice(0, 5),
      maxLength: 5
    };
  }

  // peopleList = [];
  // for (let i = 0 ; i < max; i++) {
  //   this.peopleList.push(contacts[i])
  //   }

  // firstArray()
  // peopleList = contacts.slice(0, this.maxLength);

  // Iteration 0 - My own test

  randomizePeople = () => {
    this.setState({
      people: (this.state.people = contacts)
    });

    let randomNumber = Math.floor(
      Math.random() * (contacts.length - 5 - 0) + 0
    );

    const randomPeople = contacts.slice(randomNumber, randomNumber + 5);

    this.setState({
      people: (this.state.people = randomPeople)
    });
  };

  // Iteration 2
  // Add New Random contact
  addNewRandom = () => {
    const copyPeople = [...this.state.people];
    let randomNumber = Math.floor(Math.random() * contacts.length);
    console.log(randomNumber);

    let randomPerson = contacts[randomNumber];
    if (!copyPeople.includes(randomPerson)) copyPeople.push(randomPerson);

    this.setState({
      people: copyPeople
    });

    console.log(randomPerson);
    console.log(this.state.people);

    // this.setState({
    //   people: this.state.people.push(randomPerson)
    //  });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomizePeople()}>Randomize!</button>
        <button onClick={() => this.addNewRandom()}>New Random!</button>

        <table className="center">
          <thead>
            <tr>
              <th>name</th>
              <th>picture</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img className="photo" src={item.pictureUrl} alt="" />
                  </td>
                  <td>
                    <h2>{item.name}</h2>
                  </td>
                  <td>{item.popularity.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <ul>
          {this.state.people.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;
