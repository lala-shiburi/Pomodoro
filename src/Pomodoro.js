import React, { Component } from 'react';
import './App.css';
import Label from "./components/Label"
import Controllers from './components/Controllers';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Label id="break-label" text="Break Length" />
      <Label id="session-label" text="Session Length" />
      <Label id="break-label" text="Session" addclass="session" />
      <Controllers />  
        
      </div>
    );
  }
}

export default App;
