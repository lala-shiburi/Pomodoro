import React, { Component } from 'react'
import Increment from './Increment';

export default class Controllers extends Component {
    state={
        break:5.00,
        length:25.00,
        lengthLeft:25.00
    }


  render() {


    const handleClick=e=>{
    let controllerID=e.target.id;
    if(controllerID == "break-increment"){
        this.setState({break:"Yay"});
    }
    
};
    return (
      <div>
        <Increment handleClick={handleClick} />
      </div>
    )
  }
}
