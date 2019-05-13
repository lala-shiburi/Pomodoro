import React from 'react'

function Controller(props) {
    const{id,handleClick,arrow}=props;
  return (
    <div className="controller">
        <button id={id} onClick={handleClick}>{arrow}</button>
    </div>
  )
}

export default Controller
