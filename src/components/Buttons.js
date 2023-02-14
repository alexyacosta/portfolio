import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../style/Buttons.scss';

import About from './About';
import Main from "./Main";

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      renderView: 0
    };
  }

  clickBtn = e  => {
    this.setState({ renderView: +e.target.value });
  };

  render() {
    switch (this.state.renderView) {
      case 1:
        return <Main />;
      case 2:
        return <Main />;
      default:
        return <Main clickBtn={this.clickBtn} />;
    }
  }
}

export default Buttons