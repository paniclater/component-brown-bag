import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const ClickyImage = ({ text = 'i was clicked'}) => (
    <span onClick={() => alert(text)}>
      <img src={logo} className="App-logo" alt="logo" />
    </span>
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ClickyImage text='first' />
          <ClickyImage />
          <ClickyImage />
          <ClickyImage />
          <ClickyImage />
          <ClickyImage />
          <ClickyImage />
          <ClickyImage />
          <ClickyImage />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
