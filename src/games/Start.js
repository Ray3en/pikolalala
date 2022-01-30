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
      <div>
        <div className="cards">
        <p>
        Игра закончена!
        </p> 
        </div> 
      </div>
    )
  }

  
  return (
      <div className = 'cards'>
      <p className="card">{cards}</p>
      <div className="buttonp">
      <button className="button" onClick={nextCard}>Выполнено!</button>
      </div>
      </div>
  )
}

export default Start