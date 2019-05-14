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
    currentTimer:1500,
    timerType:'session',
    timerState:'start',
  };

  render() {
    let interval;

    const handleClickIncrement = e => {
      let controllerID = e.target.id;
      if (controllerID === "break-increment") {
        this.setState({ breakLength: this.state.breakLength + 1 });
      } else {
        this.setState({ sessionLength: this.state.sessionLength + 1 });
        this.setState({ currentTimer: this.state.currentTimer + 60 });
      }
    };

    const clockDisplay=()=>{
      let minutes=Math.floor(this.state.currentTimer/60);
      let seconds=this.state.currentTimer-minutes*60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return minutes + ':' + seconds;
    }

    const handleClickStartStop=(event)=>{
      
      if(event.interval && this.state.timerState === 'stop' ){
        clearInterval(event.interval);
        this.setState({timerState:'start'})
        
    }else{
      
      let count=()=>{
        this.setState({currentTimer:this.state.currentTimer-1})
      }
       event.interval=setInterval(count,1000)
       this.setState({timerState:'stop'})
    }
          
    }


     const handleClickDecrement=event => {
      let controllerID = event.target.id;
      if(controllerID === 'break-decrement'){
        this.setState({breakLength:this.state.breakLength-1})
      }else{
        this.setState({sessionLength:this.state.sessionLength-1})
        this.setState({ currentTimer: this.state.currentTimer - 60 });
      }
    };

    return (
      <div>
        <Label id="break-label" text="Break Length" />
        <Label id="break-length" text={this.state.breakLength} />
        <Label id="session-label" text="Session Length" />
        <Label id="session-length" text={this.state.sessionLength} />
        <Label id="timer-label" text="Session" addclass="session" />
        <Label id="length-left" text={clockDisplay()} />
        <BreakIncrement handleClick={handleClickIncrement} />
        <SessionIncrement handleClick={handleClickIncrement} />
        <BreakDecrement handleClick={handleClickDecrement} />
        <SessionDecrement handleClick={handleClickDecrement} />
        <StartStop handleClick={handleClickStartStop} />
      </div>
    );
  }
}
