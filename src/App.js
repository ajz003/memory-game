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
    score: 0,
    topScore: 0
  };

  removeOption = id => {
    let n = this.state.currentFriends.length;
    let removedFriendArr = this.state.currentFriends.filter(
      friend => friend.id !== id
    );
    let score = 13 - this.state.currentFriends.length;

    this.setState({ currentFriends: removedFriendArr }, () => {
      if (removedFriendArr.length === 0) {
        alert("Wow, top score!");
        this.setState({
          currentFriends: friends,
          allFriends: friends,
          topScore: 12
        });
      }

      if (removedFriendArr.length === n) {
        alert("You failed");
        if (this.state.score > this.state.topScore) {
          this.setState({ topScore: this.state.score });
        }
        this.setState({
          currentFriends: friends,
          allFriends: friends,
          score: 0
        });
      } else {
        this.setState({ score: score });
      }
    });
  };

  randomize = () => {
    let array = friends;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.setState({ allFriends: array });
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} topScore={this.state.topScore}>
          FriendsGame
        </Title>
        <div className="row">
          {this.state.allFriends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              randomize={this.randomize}
              removeOption={this.removeOption}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;