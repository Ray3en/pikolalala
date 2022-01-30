import React, {useState} from "react";
import Newforms from "./NewForms";
import '../styles/style.css' 
import TakeName from "./Takename";

function Window(){

  let [classPlayers, setForms] = useState([{"id": 1, "value":`Игрок 1`},{"id": 2, "value":`Игрок 2`}])

  const addForm = event => {
    classPlayers = []
    let choose = document.querySelector('select')
    let target = Number(choose.value)
    let elements = []
    for (let i = 1; i <= target; i++){
      elements[i-1] = {"id": i, "value":`Игрок ${i}`}
      setForms([...classPlayers, ...elements])
    }
  }



  return (
    <div className="main">
          <div>
            <p>Введите количество игроков</p>
            <select className="select" name="choose" onChange={event => addForm(event.target.value)}>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
            <Newforms classPlayers = {classPlayers}/>
          </div>
          <div>
            <TakeName></TakeName>
          </div>
    </div>
  )
}

export default Window