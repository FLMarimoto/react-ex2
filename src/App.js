import React, { Component } from 'react';

import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: '',
    length: 0
  }

  textChangedHandler = (event) => {
    this.setState({
      text: event.target.value,
      length: event.target.value.length 
    });
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.text.split('');
    chars.splice(charIndex, 1);
    this.setState({
      text: chars.join(''),
      length: chars.length
    });
  }

  render() {
    
    let charList = null;
    
    if (this.state.text.length > 0) {
      charList = (
        <div>
          {this.state.text.split('').map((char, index) => {
            return <CharComponent
              click = {() => this.deleteCharHandler(index)}
              char = {char}/>
          })}
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Exercise 2</h1>
        <input type="text" onChange={(event) => this.textChangedHandler(event)}  value={this.state.text}/>
        <p>{'You typed ' + this.state.length + ' letters'}</p>
        <ValidationComponent text={this.state.length} />
        {charList}
      </div>
    );
  }
}

export default App;
