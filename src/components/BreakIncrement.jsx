import React from 'react'
import Controller from "./Controller";

function BreakIncrement(props) {
    const{handleClick}=props;
  return (
    <div>
      <Controller id="break-increment" handleClick={handleClick} arrow="Up" />
    </div>
  )
}

export default BreakIncrement
