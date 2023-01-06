import React, { Component } from "react";


class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    return (
      <header>

        <div className="title-container">
          <h1>Hello! <br/>
            my name is
          </h1>
          <p>A<a class="ex1">lexy</a>a</p>
          <h1>Welcome to my website</h1>

        </div>


      </header>
    );
  }
}

export default Header;
