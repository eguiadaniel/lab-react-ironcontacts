import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // people: contacts.slice(0, 5),
      people: this.peopleListVariable,
      maxLength: 5
    };
  }
  
  // Variable not being passed to this.state.people
  maxLength = 5;
  peopleListVariable = contacts.slice(0, this.maxLength);

  // This method is not called, how could it be done?
  peopleListMethod = () => { this.setState({
    people: (this.state.people = contacts
      .slice(0, this.state.maxLength))
    });
  };


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

  sortByName = () => {
    // sort by Name
    this.setState({
      people: this.state.people.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    });
  };

  sortByPopularity = () => {
    // sort by popularity
    this.setState({
      people: this.state.people.sort(function (a, b) {
        return b.popularity - a.popularity;
      })
    });
  };

  deleteContact = (e) => {
    console.log(this.state.people);
    console.log(e);
    // const newList = this.state.list.splice(this.state.list.indexOf(value), 1);
    // function ActionLink() {
    // function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // }
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomizePeople()}>Randomize!</button>
        <button onClick={() => this.addNewRandom()}>New Random!</button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by Popularity
        </button>

        <table className="center">
          <thead>
            <tr>
              <th>name</th>
              <th>picture</th>
              <th>popularity</th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((item) => {
              return (
                <tr id={item.id} key={item.id}>
                  <td>
                    <img className="photo" src={item.pictureUrl} alt="" />
                  </td>
                  <td>
                    <h2>{item.name}</h2>
                  </td>
                  <td>{item.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => this.deleteContact()}>Delete</button>
                  </td>
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
