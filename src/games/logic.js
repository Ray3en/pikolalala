import React from "react";
import Start from "./Start";
import '../styles/style.css'
import qst from '../games/quest.json'

function Logic(props){

  let {arrayPlayers} = props
  let players = arrayPlayers
  const questions = qst.qst

  let gameCards = [] //Формирование готовых к игре кард

  let todo = [] //Формирование заданий

  function preset(){ //Рандомайзер кард из базы
    let count = players.length
    let countcard = questions.length
    let useid = []
    let card = []
    for (let i = 0; i < count * 8; i++){
      while (true) {
        let rand = Math.floor(Math.random()*countcard);
        if (!useid.includes(questions[rand])){
          card.push(questions[rand])
          useid.push(questions[rand])
          break
        }
      }
      gameCards = card
    }
    startgame()
  }


  //Финальное формирование заданий
  function startgame(){
    // console.log(players)
    let arr = []
    let players1 = replicateArray(players, 8)
    for (let i = 0; i < gameCards.length; i++){
      arr[i] = `${players1[i]} ${gameCards[i].title}`
    }
    todo = arr
    console.log(todo)
  }
  
  //Дублирование эелементов массива с игроками согласно раундов 8 штук
  function replicateArray(array, n) { 
    let arrays = Array.apply(null, new Array(n)); 
    arrays = arrays.map(function() { return array });
    return [].concat.apply([], arrays);
  }

  preset()

  return (
    <div className="main">
      <Start todo = {todo}></Start>
    </div>
  )
}

export default Logic