import React, { Component } from "react";

import '../style/Header.scss';
import Buttons from './Buttons.js';

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    return (
      <div>
        <div className="toggle">
          <button>oii</button>
        </div>
        <div className="title-container">
          <p>Alexya Costa</p>
          <p>front-end Developer</p>
        </div>
        <div class="about">
        </div>
      </div>
    );
  }
}

export default Header;
