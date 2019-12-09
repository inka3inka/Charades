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
    const currentPassword = passwords[randomNumber];
    const currentPasswords = passwords.filter(element => element !== passwords[randomNumber]);

    //Set new state of passwords and current Password for guessing

    this.setState({
        passwords: currentPasswords,
        currentPassword: currentPassword
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
    }, console.log(this.state.team1, this.state.team2))
  }

  handleActivityTeam = () => {

  }

  handlePointsGuessed = () => {
    const password = this.state.currentPassword;
    if (this.state.teamActive === 1 && this.state.usedPasswords.indexOf(password) === -1) {
      this.setState({
        guessedTeam1: this.state.guessedTeam1.concat(password),
        usedPasswords: this.state.usedPasswords.concat(password)
      })
    }
    else if (this.state.teamActive === 2 && this.state.usedPasswords.indexOf(password) !== -1) {
      this.setState({
        guessedTeam2: this.state.guessedTeam2.concat(password),
        usedPasswords: this.state.usedPasswords.concat(password)
      })
    }
    console.log(this.state.guessedTeam1);
    console.log(this.state.guessedTeam2);
  }

  handlePointsMissed = () => {
    const password = this.state.currentPassword;
    if (this.state.teamActive === 1 && this.state.usedPasswords.indexOf(password) === -1) {
        this.setState({
          missedTeam1: this.state.missedTeam1.concat(password),
          usedPasswords: this.state.usedPasswords.concat(password)
        })

    }
    else if (this.state.teamActive === 2 && this.state.usedPasswords.indexOf(password) !== -1) {
      this.setState({
        missedTeam2: this.state.missedTeam2.concat(password),
        usedPasswords: this.state.usedPasswords.concat(password)
      })
    }

    console.log(this.state.missedTeam1);
    console.log(this.state.missedTeam2);
  }


  //App's state

  state = {
    passwords: [],
    currentPassword: '',
    usedPasswords: [],
    randomer: this.randomer,
    disabled: false,
    team1: "",
    team2: "",
    handleNameChange: this.handleNameChange,
    disabledBtnEnterNames: true,
    teamActive: 1,
    guessedTeam1: [],
    guessedTeam2: [],
    missedTeam1: [],
    missedTeam2: [],
    handlePointsGuessed: this.handlePointsGuessed,
    handlePointsMissed: this.handlePointsMissed
  };


  render() {

    return (
      <PasswordsContext.Provider value={this.state}>
        <div className="main-container container">
          <ButtonsContainer/>
          <div className="main-board-container container">
            <EnterName />
            <div className="teams-container container">
              <TeamContainer class="team-1" teamName={this.state.team1} teamScore={this.state.guessedTeam1.length}/>
            </div>
            <BoardContainer />
            <div className="teams-container container">
              <TeamContainer class="team-2" teamName={this.state.team2} teamScore={this.state.guessedTeam2.length}/>
            </div>
          </div>
        </div>
      </PasswordsContext.Provider>
    )
  }
}