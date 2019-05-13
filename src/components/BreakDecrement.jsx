import React from 'react'
import Controller from "./Controller";

function BreakDecrement(props) {
    const{handleClick}=props;
  return (
    <div>
      <Controller id="break-decrement" handleClick={handleClick} arrow="Down" />
    </div>
  )
}

export default BreakDecrement
