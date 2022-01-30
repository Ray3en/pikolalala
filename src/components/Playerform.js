import React from "react";
import '../styles/style.css'

function Playerform(props){
  let {id, value} = props
  return (
    <div>
    <p>{value}</p>
    <input className = 'input'>{id}</input>
    </div>
  )
}

export default Playerform