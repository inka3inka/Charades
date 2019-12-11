import React, {Component} from "react";
import {PasswordsContext} from './context'

//Functions

//Team component

class TeamContainer extends Component {
  render() {
    return (
      <div className={`team-container container ${this.props.class}`}>
        <TeamName teamName={this.props.teamName}/>
        <TeamPasswords
          passwordsGuessed={this.props.passwordsGuessed}
          passwordsMissed={this.props.passwordsMissed}
        />
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

  render() {
    return (
      <div className="passwords">
        <div>GUESSED
          <div className="guessed">
            <ul>
              {this.props.passwordsGuessed.map(element =>
                <li key={element}>{element}</li>
              )}
            </ul>
          </div>
        </div>
        <div>MISSED
          <div className="missed">
            <ul>
              {this.props.passwordsMissed.map(element =>
                <li key={element}>{element}</li>
              )}
            </ul>
          </div>
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