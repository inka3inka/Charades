import React, {Component} from "react";

//Main buttons


//Button for picking passwords

class ButtonPickingPasswords extends Component {

  state = {
    passwords: [],
    disabled: false
  };

  //Pick up random password
  randomer = (elements) => {
    this.setState({
      passwords: elements
    })

    //Select password

    const randomNumber = Math.floor(Math.random() * this.state.passwords.length);
    console.log(this.state.passwords[randomNumber]);

    //Remove selected password from passwords
    const passowrds = [...this.state.passwords];
    const currentPasswords = passowrds.filter(element => element !== this.state.passwords[randomNumber]);
    if(currentPasswords.length > 0) {
      this.state = ({
        passwords: currentPasswords
      })
    }
    else {
      console.log('End game!');
      this.state = ({
        passwords: [],
        disabled: true
      })
    }

    //Test
    console.log(this.state.passwords)
  };

  render() {

    return(
      <PasswordsContext.Consumer>
        {passwords =>
          <button className={this.props.class} onClick={this.randomer(passwords)} disabled={this.state.disabled}>
            <span>{this.props.name.toUpperCase()}</span></button>
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
