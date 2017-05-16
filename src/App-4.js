import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const createSearchUrl = ({terms, key}) => {
  return `http://api.giphy.com/v1/gifs/search?q=${terms}&api_key=${key}`;
};

const createSrcUrl = ({id}) => {
  return `https://media.giphy.com/media/${id}/giphy.gif`;
};

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
  state = {
    terms: 'cute+corgi',
    urls: []
  }

  getUrls = (terms) => {
    console.log(terms);
    const key = 'dc6zaTOxFJmzC';
    const options = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(createSearchUrl({terms, key}), options)
      .then(response => response.json())
      .then(response => this.setState({
        urls: response.data.map(createSrcUrl)
      }))
      .catch(() => this.setState({
        urls: ['https://giphy.com/gifs/smoke-worried-stressed-14qIliCMe87BwA']
      }))
  }

  componentDidMount () {
    this.getUrls(this.state.terms);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div style={{ display: 'flex', width: 800, flexWrap: 'wrap', margin: 'auto'}}>
          {this.state.urls.slice(0, 6).map(url => <Giphy key={url} url={url} />)}
        </div>
      </div>
    );
  }
}

export default App;
