import {Button} from "./buttons";
import React, {Component} from "react";
import {PasswordsContext} from './context'

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
      <PasswordsContext.Consumer>
        {({currentPassword}) =>
      <>
        <div>Current password</div>
        <div className="guessed-password">
            {currentPassword}
        </div>
      </>
        }
      </PasswordsContext.Consumer>
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
