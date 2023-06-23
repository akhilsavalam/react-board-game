import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favouritecolor: "red" };
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ favouritecolor: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My favouritecolor is {this.state.favouritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          changeColor
        </button>
      </div>
    );
  }
}
export default Header;
