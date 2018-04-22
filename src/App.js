import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  
  async handleClick(e){
    let res = await axios.get("https://reqres.in/api/users?page=2")
    
    console.log(res)
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={e => this.handleClick(e)}>
          Click Me!!
        </button>
      </div>
    );
  }
}

export default App;
