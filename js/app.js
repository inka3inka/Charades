import React, {Component} from "react";
import ReactDOM from "react-dom";
import {ButtonsContainer} from "./buttons.js";
import TeamContainer from "./teamsContainer.js";
import BoardContainer from "./boardContainer.js";
import appFunctions from "./functions.js";

appFunctions();


//Main container
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container container">
        <ButtonsContainer/>
        <div className="main-board-container container">
          <div className="teams-container container">
            <TeamContainer class="team-1"/>
            <TeamContainer class="team-3"/>
          </div>
          <BoardContainer/>
          <div className="teams-container container">
            <TeamContainer class="team-2"/>
            <TeamContainer class="team-4"/>
          </div>
        </div>
      </div>
    )
  }
}

//App

class App extends Component{
  render() {
    return (
      <div>
        <MainContainer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);