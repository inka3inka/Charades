import React, {Component} from "react";
import {PasswordsContext} from './context'

//Main buttons


//Button for picking passwords

class ButtonPickingPasswords extends Component {

  render() {

    return(
      <PasswordsContext.Consumer>
        {({disabled, randomer}) => (
          <button
            className={this.props.class}
            onClick={randomer}
            disabled={disabled}>
            <span>{this.props.name.toUpperCase()}</span>
          </button>
          )
        }
      </PasswordsContext.Consumer>
    )
  }
}

// Normal buttons
class Button extends Component {

  render() {
    return(
      <button className={this.props.class}><span>{this.props.name.toUpperCase()}</span></button>
    )
  }
}

//Render all buttons

class ButtonsContainer extends Component {
  render() {
    return (
      <div className="buttons-container container">
        <Button name="OPTIONS" class="btn"/>
        <ButtonPickingPasswords name="SELECT PASSWORD" class="btn" />
        <Button name="RESET THE GAME" class="btn" />
      </div>
    )
  }
}

export {Button, ButtonsContainer, ButtonPickingPasswords};
