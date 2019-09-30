import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import friends from "./cards.json";
import "./App.css";

class App extends React.Component {
  state={
    friends: friends,
    score: 0,
    highscore:0,

  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  clickCount = id => {
    // eslint-disable-next-line array-callback-return
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (

     
      <Wrapper>
      <Navbar score={this.state.score} highscore={this.state.highscore}/>
      <Header />
      <div className="container outer-box ">
      {
        this.state.friends.map((friend) => 
        <FriendCard
        // name={friend.name}
        image={friend.image}
        // occupation={friend.occupation}
        // location={friend.location}
        clickCount={this.clickCount}
        key={friend.id}
        id={friend.id}
      />
      )}
      </div>
     
    </Wrapper>
   );
  }
}




export default App;
