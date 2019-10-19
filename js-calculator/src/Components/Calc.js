import React, { Component } from "react";
import "./Calc.css";
class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      result: 0,
      showResult: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  handleButtonClick(val) {
    if (this.state.value.length > 22) {
      this.setState({
        value: "DATA LIMIT EXCEEDED"
      });
    } else {
      this.setState(state => {
        let value = state.value.push(val);
        // let updatedValue;
        // let regex = /(\+|-|\*|\/)/g ;
        // if (state.value[state.value.lastIndexOf("/") === val]) {
        //   console.log(state.value.lastIndexOf("/"));
        //   state.value.pop();
        //   updatedValue = state.value.push(val);
        // }
        return {
          value
        };
      });
    }
  }

  clearInput() {
    this.setState({
      showResult: false,
      value: ""
    });
  }
  handleResult() {
    // let pattern = /^\d+|\d+$/g;
    let myString = this.state.value.join("");
    console.log(myString);
    // if (myString.length === 0) {
    //   return;
    // }
    myString = myString.replace(/(\+|-|\*|\/)/g, " $1 ").split(" ");
    var result;
    for (let i = 1; i < myString.length; i++) {
      if (myString.includes("/")) {
        let index = myString.indexOf("/");
        let left = myString[index - 1];
        let right = myString[index + 1];
        result = Number(left) / Number(right);
        myString.splice(index - 1, 3, result);
        i = index;
      }
    }
    for (let i = 1; i < myString.length; i++) {
      if (myString.includes("*")) {
        let index = myString.indexOf("*");
        let left = myString[index - 1];
        let right = myString[index + 1];
        result = Number(left) * Number(right);
        myString.splice(index - 1, 3, result);
        i = index;
      }
    }
    for (let i = 1; i < myString.length; i++) {
      if (myString.includes("+")) {
        let index = myString.indexOf("+");
        let left = myString[index - 1];
        let right = myString[index + 1];
        result = Number(left) + Number(right);
        myString.splice(index - 1, 3, result);
        i = index;
      }
    }
    for (let i = 1; i < myString.length; i++) {
      if (myString.includes("-")) {
        let index = myString.indexOf("-");
        let left = myString[index - 1];
        let right = myString[index + 1];
        result = Number(left) - Number(right);
        myString.splice(index - 1, 3, result);
        i = index;
      }
    }
    this.setState({
      result,
      showResult: true
    });
  }

  render() {
    return (
      <div id="calc-container">
        <div id="main-container">
          <div id="get-input">
            {this.state.showResult ? this.state.result : this.state.value}
          </div>
          <div className="btn-container">
            <div className="first-row">
              <button onClick={this.clearInput} id="all-clear">
                AC
              </button>
              <button
                onClick={() => this.handleButtonClick("/")}
                className="operators"
                id="divide"
              >
                /
              </button>
              <button
                onClick={() => this.handleButtonClick("*")}
                className="operators"
                id="multiply"
              >
                x
              </button>
            </div>
            <div className="second-row">
              <button
                onClick={() => this.handleButtonClick("7")}
                id="seven"
                className="same-size-btn"
              >
                7
              </button>
              <button
                onClick={() => this.handleButtonClick("8")}
                id="eight"
                className="same-size-btn"
              >
                8
              </button>
              <button
                onClick={() => this.handleButtonClick("9")}
                id="nine"
                className="same-size-btn"
              >
                9
              </button>
              <button
                onClick={() => this.handleButtonClick("-")}
                className="operators"
                id="subtract"
              >
                -
              </button>
            </div>
            <div className="third-row">
              <button
                onClick={() => this.handleButtonClick("4")}
                id="four"
                className="same-size-btn"
              >
                4
              </button>
              <button
                onClick={() => this.handleButtonClick("5")}
                id="five"
                className="same-size-btn"
              >
                5
              </button>
              <button
                onClick={() => this.handleButtonClick("6")}
                id="six"
                className="same-size-btn"
              >
                6
              </button>
              <button
                onClick={() => this.handleButtonClick("+")}
                className="operators"
                id="addition"
              >
                +
              </button>
            </div>
            <div className="fourth-row">
              <button
                onClick={() => this.handleButtonClick("1")}
                id="one"
                className="same-size-btn"
              >
                1
              </button>
              <button
                onClick={() => this.handleButtonClick("2")}
                id="two"
                className="same-size-btn"
              >
                2
              </button>
              <button
                onClick={() => this.handleButtonClick("3")}
                id="three"
                className="same-size-btn"
              >
                3
              </button>
              <button onClick={this.handleResult} id="equals">
                =
              </button>
            </div>
            <div className="fifth-row">
              <button onClick={() => this.handleButtonClick("0")} id="zero">
                0
              </button>
              <button
                onClick={() => this.handleButtonClick(".")}
                className="same-size-btn"
                id="decimal"
              >
                .
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calc;
