import React from 'react'
import Controller from "./Controller";

function SessionDecrement(props) {
    const{handleClick}=props;
  return (
    <div>
      <Controller id="session-decrement" handleClick={handleClick} arrow="Down" />
    </div>
  )
}

export default SessionDecrement
