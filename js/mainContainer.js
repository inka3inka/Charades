import React, {Component} from "react";
import {ButtonsContainer} from "./buttons.js";
import TeamContainer from "./teamsContainer.js";
import BoardContainer from "./boardContainer.js";
import {PasswordsContext} from "./context"

//Main container

export class MainContainer extends Component {

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

  //Pick up random password

  randomer = (elements) => {
    elements = this.state.passwords;
    const randomNumber = Math.floor(Math.random() * elements.length);

    //Remove selected password from passwords

    const passwords = [...this.state.passwords];
    const currentPasswords = passwords.filter(element => element !== passwords[randomNumber]);

    //Set new state of passwords

    this.setState({
        passwords: currentPasswords
      },

      //Disable button when the passwords array is empty

      () => {if (this.state.passwords.length < 1) {
        this.setState({disabled: true})}
      });

    //Test
    console.log(this.state.passwords)
  };

  //App's state

  state = {
    passwords: [],
    randomer: this.randomer,
    disabled: false
  };


  render() {

    return (
      <PasswordsContext.Provider value={this.state}>
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