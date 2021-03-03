import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.peopleList,
      maxLength: 5
    };
  }
  
    peopleList = contacts.slice(0, this.state.maxLength);


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


  // Iteration 1

  addNewRandom = () => {
    let randomNumber = Math.floor(Math.random() * contacts.length);
    console.log(randomNumber);

    let randomPerson = contacts[randomNumber];
    let newArrayPeople = this.state.people.push(randomPerson)

    this.setState({
      maxLength : this.state.maxLength +1
    })
    console.log(randomPerson);
    console.log(this.state.people);
    console.log(newArrayPeople);



    // this.setState({
    //   people: this.state.people.push(randomPerson)
    //  });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomizePeople()}>Randomize!</button>
        <button onClick={() => this.addNewRandom()}>First Five!</button>

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
