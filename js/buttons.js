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
      <button className={this.props.class} onClick={this.props.onDone} disabled={this.props.disabled}><span>{this.props.name.toUpperCase()}</span></button>
    )
  }
}

//Render all buttons

class ButtonsContainer extends Component {
  render() {
    return (
      <PasswordsContext.Consumer>
        {({reset}) =>
      <div className="buttons-container container">
        <Button name="OPTIONS" class="btn" disabled={this.props.disabled}/>
        <ButtonPickingPasswords name="SELECT PASSWORD" class="btn" />
        <Button name="RESET THE GAME" class="btn" onDone={reset}/>
      </div>
        }
      </PasswordsContext.Consumer>
    )
  }
}

export {Button, ButtonsContainer, ButtonPickingPasswords};
