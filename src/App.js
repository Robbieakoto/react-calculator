import React, { Component } from "react";
import KeyPad from "./Components/KeyPad";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  //reset input after previous answer
  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  render() {
    return (
      <div>
        <div class="pt-10">
          <h1 class="text-center text-xl text-gray-600">Simple Calculator</h1>
          <KeyPad onClick={this.onClick} result={this.state.result} />
        </div>
      </div>
    );
  }
}

export default App;
