import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    profile: {},
  }

  fetchProfile = () => {
    fetch(`https://api.github.com/users/yakuana`)
      // format the data.
      .then(response => {
        return response.json();
      })

      // set the state using the formatted data 
      .then(userProfile => this.setState({ profile: userProfile }))

      // check for unsuccessful fetch
      .catch(error => {
        console.log("The API is currently down.", error);
      });
  };

  render() {

    this.fetchProfile(); 

    return (
      <div className="App">
        <h1>Hello!</h1>
      </div>
    )
  } 
}

export default App;
