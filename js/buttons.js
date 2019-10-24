import React, {Component} from "react";

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

export {Button, ButtonsContainer};
