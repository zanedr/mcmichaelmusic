import React, { Component } from 'react';
import Slide from './components/Slide/Slide';
import Menu from './components/Menu/Menu';
import logo from './images/mcmichaelsmaller.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img class="logo" src={logo} />
        <Menu className="menu"/>
        <h2 className="main-title">McMichael Music</h2>
        <Slide width="100vw" timeClass="first" text=""/>
        <Slide width="85vw" timeClass="second" text=""/>
        <Slide width="70vw" timeClass="third" text=""/>
        <Slide width="55vw" timeClass="fourth" text=""/>
        <Slide width="40vw" timeClass="fifth" text=""/>
        <Slide width="25vw" timeClass="sixth" text=""/>
        <Slide width="10vw" timeClass="seventh" text=""/>
      </div>
    );
  }
}

export default App;
