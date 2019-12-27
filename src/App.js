import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    text: ''
  }

  textChangedHandler = (event) => {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Exercise 2</h1>
        <input type="text" onChange={(event) => this.textChangedHandler(event)}  value={this.state.text}/>
        <p>{'You typed ' + this.state.text.length + ' letters'}</p>
      </div>
    );
  }
}

export default App;
