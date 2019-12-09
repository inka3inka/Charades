import React, {Component} from "react";
import {Button} from "./buttons";
import {PasswordsContext} from './context'

export class EnterName extends Component {

  state = {
    isVisible: ""
  };

  //Change visibility of the window

  handleVisibility = () => {
    this.setState({
      isVisible: "invisible"
    })
  };

  render() {
    return (
      <PasswordsContext.Consumer>
        {({handleNameChange, disabledBtnEnterNames}) =>
      <div className={`container enter ${this.state.isVisible}`}>
        <div className="enter-file">
        Enter Team' names
          <div>Team 1: <input type="text" name="team1" value={this.state.name} onChange={handleNameChange}/></div>
          <div>Team 2: <input type="text" name="team2" value={this.state.name} onChange={handleNameChange}/></div>
        <Button
          name="save"
          class="btn"
          onDone={this.handleVisibility}
          disabled={disabledBtnEnterNames}
          />
        </div>
      </div>
        }
      </PasswordsContext.Consumer>
    )
  }
}