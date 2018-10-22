import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    currentFriends: friends,
    allFriends: friends,
    score: 0
  };

  removeOption = id => {

    let n = this.state.currentFriends.length

    let removedFriendArr = this.state.currentFriends.filter(friend => friend.id !== id);

    let score = 13 - this.state.currentFriends.length

    this.setState({ currentFriends: removedFriendArr }, () => {
      
      console.log("score: " + score)

      if (removedFriendArr.length === 0) {
        alert("Wow, top score!")
        this.setState({ currentFriends: friends, allFriends: friends })
      }


      if (removedFriendArr.length === n) {
        alert("You failed")
        this.setState({ currentFriends: friends, allFriends: friends })
      } else {
        this.setState({score: score})
      }

    });


  };



  randomize = () => {

    let array = friends;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.setState({ allFriends: array })


  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}>FriendsGame</Title>
        <div className="container">
        <div className="row">
        <div className="col">
        {this.state.allFriends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            randomize={this.randomize}
            removeOption={this.removeOption}
          />
        ))}
        </div>
        </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
