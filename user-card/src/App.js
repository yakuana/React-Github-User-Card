import React, { Component } from 'react';
import './App.css';

import ProfileCard from "./components/ProfileCard.js"; 

class App extends Component {

  state = {
    profile: {},
    followers: [], 
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

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/yakuana/followers`)
    // format the data.
    .then(response => {
      return response.json();
    })

    // set the state using the formatted data this.setState({ followers: followersArray })
    .then(followersArray => this.setState({ followers: followersArray}))

    // check for unsuccessful fetch
    .catch(error => {
      console.log("The API is currently down.", error);
    });
  }

  componentDidMount() {
    this.fetchProfile(); 
    this.fetchFollowers(); 
  }


  render() {

    

    // console.log("current state:", this.state)

    return (
      <div className="App">
        <h1>Hello!</h1>
        <ProfileCard profile={this.state.profile}/>

        {this.state.followers.map((follower) => (
          <ProfileCard profile={follower}/>
        ))}
      </div>
    )
  } 
}

export default App;
