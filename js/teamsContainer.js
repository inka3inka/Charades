import React, {Component} from "react";

//Functions

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
  constructor(props) {
    super(props);
    this.state = {
      team: ''
    };
  }

  addNewTeam = () => {
      this.setState({
        team: prompt("Set Team's name (max 8 signs)")
      })
    };

  render() {
    return (
      <div className="team-name jump" onClick={this.addNewTeam}>
        <span>Team: </span>
        <span>{this.state.team}</span>
      </div>
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
  constructor(props) {
    super(props);
    this.state = {
      score: []
    };
  }

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