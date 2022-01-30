import React from "react";
import Playerform from "./Playerform";
import '../styles/style.css'


function Newforms(props){
  let {classPlayers} = props
  return (
  <div className="div_forms">
    {classPlayers.map( t => <Playerform key = {t.id} value = {t.value} />)}
  </div>
  )
}

export default Newforms