import React from 'react'

function label(props) {
    const{id,text,addclass}=props;
    const classes =`label ${addclass}`
  return (
    <div className={classes} id={id}>
      <p>{text}</p>
    </div>
  )
}

export default label
