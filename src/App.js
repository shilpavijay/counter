import React, { Component } from 'react';
import './App.css';
import Counter from './container/Counter'
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <br />
        <h1 class="title is-2"> A Simple Counter using React + Redux</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
