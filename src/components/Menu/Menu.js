import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <div className="menu-container">
            <a className="center" href="#">about</a>
            <a className="center" href="#">instructors</a>
            <a className="center" href="#">classes and tuition</a>
            <a className="center" href="#">location</a>
            <a className="center" href="#">contact</a>
        </div>
    );
  }
}

export default Menu;
