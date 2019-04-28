import React from 'react'

function Controller(props) {
    const{id,handleClick,arrow}=props;
  return (
    <div className="controller" id={id}>
        <button onClick={handleClick}>{arrow}</button>
    </div>
  )
}

export default Controller
