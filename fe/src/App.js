import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {
    setInterval(this.greeting, 1000);
  }

  greeting = () => {
    fetch('/api/greeting')
    .then(res => res.text())
    .then(msg => {
      this.setState({message: msg})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.message}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
