import {Button} from "./buttons";
import React, {Component} from "react";

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
        <div className="guessed-password">
          <ul>
            {/*<Passwords />*/}
          </ul>
        </div>
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

export default BoardContainer;
