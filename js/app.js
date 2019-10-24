import React, {Component} from "react";
import ReactDOM from "react-dom";




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

//Main buttons

class Button extends Component {
  render() {
    return <button className={this.props.class}><span>{this.props.name.toUpperCase()}</span></button>
  }
}
class ButtonsContainer extends Component {
  render() {
    return (
      <div className="buttons-container container">
        <Button name="OPTIONS" class="btn"/>
        <Button name="SELECT PASSWORD" class="btn" />
        <Button name="RESET THE GAME" class="btn" />
      </div>
    )
  }
}

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

//Board component
class BoardContainer extends Component {
  render() {
    return (
      <div className="board-container container">
        <CurrentPassword/>
        <ResultOptions/>
        <TimeCounter/>
        <CurrentLeader/>
      </div>
    )
  }
}

class CurrentPassword extends Component {
  render() {
    return (
      <>
        <div>Current password</div>
        <div className="guessed-password">RRRRRR</div>
      </>
    )
  }
}

class ResultOptions extends Component {
  render() {
    return (
      <div>
        <Button name="guessed" class="btn" />
        <Button name="miessed" class="btn" />
      </div>
    )
  }
}


class TimeCounter extends Component {
  render() {
    return (
      <div>Time Counter</div>
    )
  }
}

class CurrentLeader extends Component {
  render() {
    return (
      <div>Leader</div>
    )
  }
}


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