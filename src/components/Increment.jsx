import React from 'react'
import Controller from "./Controller";

function Increment(props) {
    const{handClick}=props;
  return (
    <div>
      <Controller id="break-increment" handClick={handClick} arrow="Up" />
    </div>
  )
}

export default Increment
