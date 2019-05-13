import React from 'react'
import Controller from "./Controller";

function SessionIncrement(props) {
    const{handleClick}=props;
  return (
    <div>
      <Controller id="session-increment" handleClick={handleClick} arrow="Up" />
    </div>
  )
}

export default SessionIncrement;
