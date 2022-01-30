import React, {useState} from "react";
import ReactDOM from 'react-dom';
import '../styles/style.css'

let i = 0

function Start(props){
  const {todo} = props

  const questions = todo

  const [cards, setCard] = useState('Нажмите Выполнено чтобы начать игру.')

  function nextCard(){
      // card = cards[i++]
      setCard(questions[i])
      i++
      console.log(cards)
      if (i > questions.length){
        ReactDOM.render(endgame(),document.getElementById('root'))
      }
  }

  function endgame(){
    return(
      <div className="main"> 
        Игра закончена!
      </div>
    )
  }

  
  return (
    <div>
      <div className = 'div_forms'>
      <p>{cards}</p>
      </div>
      <button className="button" onClick={nextCard}>Выполнено!</button>
    </div>
  )
}

export default Start