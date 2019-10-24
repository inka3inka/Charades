import React, {Component} from "react";

//Team component

class TeamContainer extends Component {
  render() {
    return (
      <div className={`team-container container ${this.props.class}`}>
        <TeamName/>
        <TeamPasswords/>
        <TeamScore/>
      </div>
    )
  }
}

class TeamName extends Component {
  render() {
    return (
      <div className="team-name">
        <span>Team </span>
        <span>Number</span>
      </div>
    )
  }
}

class TeamPasswords extends Component {
  render() {
    return (
      <div className="passwords">
        <div>GUESSED
          <div className="guessed">KKKKKK</div>
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
        <span>xxxxx</span>
      </div>
    )
  }
}

export default TeamContainer;