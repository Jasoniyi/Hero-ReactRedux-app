import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import CharacterList from "./components/CharacterList";
import HeroList from "./components/HeroList";
import SquadStats from "./components/SquadStats";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <div className="App">
          <h2 className="text-bold">SuperSquad</h2>
          <div className="wrapper">
            <div className="col-md-3">
              <CharacterList />
            </div>
            <div className="col-md-4">
              <HeroList />
            </div>
            <div className="col-md-5">
              <SquadStats />
            </div>{" "}
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default App;
