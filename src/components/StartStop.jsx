import React from 'react'
import Controller from "./Controller";

function StartStop(props) {
    const{handleClick} = props;
  return (
    <div>
      <Controller id="start_stop" handleClick={handleClick} arrow="start" />
    </div>
  )
}

export default StartStop;
