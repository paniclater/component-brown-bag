import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            <div style={{ margin: 20, maxWidth: 200, border: 'solid 10px tomato'}}>
              <img
                alt='a gif from giphy'
                style={{ height: '100%', width: '100%' }}
                src='https://media.giphy.com/media/3oKIPd8EtLUiCYHbry/giphy.gif'
              />
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
