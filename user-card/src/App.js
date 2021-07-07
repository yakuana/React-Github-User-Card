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
        console.log("The user's API is currently down.", error);
      });
  };

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/yakuana/followers`)
    // format the data.
    .then(response => {
      return response.json();
    })

    // set the state using the formatted data 
    .then(followersArray => this.setState({ followers: followersArray}))

    // check for unsuccessful fetch
    .catch(error => {
      console.log("The followers' API is currently down.", error);
    });
  }

  componentDidMount() {
    this.fetchProfile(); 
    this.fetchFollowers(); 
  }


  render() {

    return (
      <div className="app-container">
        <h1 className="heading">Welcome to {this.state.profile.login}'s GitHub</h1>
          <div className="users">
            <ProfileCard profile={this.state.profile}/>
            {this.state.followers.map((follower) => {
              console.log(follower); 
              return <ProfileCard profile={follower} key={follower.id}/>} 
            )}
          </div>
      </div>
    )
  } 
}

export default App;
