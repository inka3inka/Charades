import React, {Component} from "react";
import ReactDOM from "react-dom";
import {ButtonsContainer} from "./buttons.js";
import TeamContainer from "./teamsContainer.js";
import BoardContainer from "./boardContainer.js";


//React Context

const PasswordsContext = React.createContext();

//Main container
class MainContainer extends Component {

  state = {
    passwords: []
  };

  //Fetch API

  componentDidMount() {
    fetch("http://qb.net.pl/upload/answers.json", {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(response => this.setState({
        passwords: response
      }));
  }


  render() {
    const {passwords} = this.state;

    return (
      <PasswordsContext.Provider value={passwords}>
      <div className="main-container container">
        <ButtonsContainer/>
        <div className="main-board-container container">
          <div className="teams-container container">
            <TeamContainer class="team-1" />
          </div>
          <BoardContainer/>
          <div className="teams-container container">
            <TeamContainer class="team-2"/>
          </div>
        </div>
      </div>
      </PasswordsContext.Provider>
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