import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Giphy = ({ url = 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif' }) => (
  <div style={{ margin: 20, maxWidth: 200, border: 'solid 10px tomato'}}>
    <img
      alt='a gif from giphy'
      style={{ height: '100%', width: '100%' }}
      src={url}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <div style={{ display: 'flex', width: 800, flexWrap: 'wrap', margin: 'auto'}}>
            <Giphy />
            <Giphy url='https://media.giphy.com/media/3o7budMRwZvNGJ3pyE/giphy.gif' />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
