import React, { Component } from "react";
import Label from './Label'
import BreakIncrement from "./BreakIncrement";
import SessionIncrement from "./SessionIncrement";
import BreakDecrement from "./BreakDecrement";
import SessionDecrement from "./SessionDecrement";
import StartStop from "./StartStop";

export default class Controllers extends Component {
  state = {
    breakLength: 5.00,
    sessionLength: 25.00,
    lengthLeft: 25.00
  };

  render() {
    const handleClickIncrement = e => {
      let controllerID = e.target.id;
      if (controllerID === "break-increment") {
        this.setState({ breakLength: this.state.breakLength + 1 });
      } else {
        this.setState({ sessionLength: this.state.sessionLength + 1 });
      }
    };

    const handleClickStartStop=()=>{
      setInterval(()=>(
        this.setState({lengthLeft:this.state.lengthLeft-0.01})
          ,1000)
          )
    }


     const handleClickDecrement=event => {
      let controllerID = event.target.id;
      if(controllerID === 'break-decrement'){
        this.setState({breakLength:this.state.breakLength-1})
      }else{
        this.setState({sessionLength:this.state.sessionLength-1})
      }
    };

    return (
      <div>
        <Label id="break-label" text="Break Length" />
        <Label id="break-length" text={this.state.breakLength} />
        <Label id="session-label" text="Session Length" />
        <Label id="session-length" text={this.state.sessionLength} />
        <Label id="timer-label" text="Session" addclass="session" />
        <Label id="length-left" text={this.state.lengthLeft} />
        <BreakIncrement handleClick={handleClickIncrement} />
        <SessionIncrement handleClick={handleClickIncrement} />
        <BreakDecrement handleClick={handleClickDecrement} />
        <SessionDecrement handleClick={handleClickDecrement} />
        <StartStop handleClick={handleClickStartStop} />
      </div>
    );
  }
}
