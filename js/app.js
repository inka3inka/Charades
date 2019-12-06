import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MainContainer} from "./mainContainer"


//App

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