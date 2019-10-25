import React, {Component} from "react";

//Main buttons


//Button picking passwords
class ButtonPickingPasswords extends Component {

  state = {
    passwords: []
  };

  componentDidMount() {
    fetch("http://qb.net.pl/upload/answers.json", {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(response => this.setState({
        passwords: response
      }));
  }

  //Pick up random password
  randomer = (elements) => {
    elements = this.state.passwords;
    const randomNumber = Math.floor(Math.random() * elements.length);
    console.log(this.state.passwords[randomNumber]);
    return this.state.passwords[randomNumber];
  };

  render() {

    return(
      <button className={this.props.class} onClick={this.randomer}><span>{this.props.name.toUpperCase()}</span></button>
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
