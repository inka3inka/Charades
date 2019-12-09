import React, {Component} from "react";
import {PasswordsContext} from './context'

//Functions

//Team component

class TeamContainer extends Component {
  render() {
    return (
      <div className={`team-container container ${this.props.class}`}>
        <TeamName teamName={this.props.teamName}/>
        <TeamPasswords/>
        <TeamScore teamScore={this.props.teamScore}/>
      </div>
    )
  }
}


class TeamName extends Component {

  render() {
    return (
      <PasswordsContext.Consumer>
        {() => (
        <div className="team-name">
          <span>Team: </span>
          <span>{this.props.teamName}</span>
        </div>
        )}
      </PasswordsContext.Consumer>
    )
  }
}

class TeamPasswords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
  }

//Scores counting mechanism
  scoreCounter = (elements) => {
    elements.forEach(element => {
      return element +1;
    })
  };

  render() {
    return (
      <div className="passwords">
        <div>GUESSED
          <div className="guessed">
            <ul onClick={this.scoreCounter}>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
        </div>
        <div>MISSED
          <div className="missed">LLLLLLL</div>
        </div>
      </div>
    )
  }
}

class TeamScore extends Component {

  render() {
    return (
      <div>
        <span>SCORE: </span>
        <span>{this.props.teamScore}</span>
      </div>
    )
  }
}

export default TeamContainer;