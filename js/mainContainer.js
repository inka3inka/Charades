import React, {Component} from "react";
import {ButtonsContainer} from "./buttons.js";
import TeamContainer from "./teamsContainer.js";
import BoardContainer from "./boardContainer.js";
import {PasswordsContext} from "./context";
import {EnterName} from "./enterNames";

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
      }))
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
    console.log(this.state.passwords);
  };

  // Load a Team's name

  handleNameChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    },
      //Validation

      () => {
      if (this.state.team1.length > 0 && this.state.team2.length > 0 && this.state.team1 !== this.state.team2){
        this.setState({
          disabledBtnEnterNames: false
        })
      }
    })
    console.log(this.state.team1, this.state.team2)
  }

  //App's state

  state = {
    passwords: [],
    randomer: this.randomer,
    disabled: false,
    team1: "",
    team2: "",
    handleNameChange: this.handleNameChange,
    disabledBtnEnterNames: true
  };


  render() {

    return (
      <PasswordsContext.Provider value={this.state}>
        <div className="main-container container">
          <ButtonsContainer/>
          <div className="main-board-container container">
            <EnterName />
            <div className="teams-container container">
              <TeamContainer class="team-1" teamName={this.state.team1}/>
            </div>
            <BoardContainer />
            <div className="teams-container container">
              <TeamContainer class="team-2" teamName={this.state.team2}/>
            </div>
          </div>
        </div>
      </PasswordsContext.Provider>
    )
  }
}