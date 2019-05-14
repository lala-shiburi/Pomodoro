import React from 'react'
import Controller from "./Controller";

function Reset(props) {
    const{handleClick} = props;
  return (
    <div>
      <Controller id="reset" handleClick={handleClick} arrow="reset" />
    </div>
  )
}

export default Reset;
