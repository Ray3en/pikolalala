import React from "react";
import '../styles/style.css'

function Selectgame(props){
  const {title} = props
  return (
    <div>
      <button className="button">{title}</button>
    </div>
  )
}

export default Selectgame