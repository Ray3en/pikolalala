import React from "react";
import ReactDOM from 'react-dom';
import Logic from "../games/logic";
import '../styles/style.css'



function TakeName(){

  // const [arrayPlayers, setPlayer] = useState([])
  // useEffect(()=> console.log(arrayPlayers))

  let arrayPlayers = []

  // const levels = [
  //   {id: 1, title: 'Простые задания'},
  //   {id: 2, title: 'Сложные задания'},
  //   {id: 3, title: 'Взрослые игры 18+'},
  //   {id: 4, title: 'Спортивные задания'}
  // ]
  
  function seleclevel(){
    return (
      <div className="main" >
        Выберите уровень сложности
        <div>
        {/* {levels.map( elem => <Selectgame key = {elem.id} title = {elem.title}/> )} */}
        <button className="button" onClick={start}>Простые задания</button>
        </div>
        <div> 
        <button className="button" >Средние задания (soon)</button>
        </div>
        <div>
        <button className="button" >Задания 18+ (soon)</button>
        </div> 
      </div>
    )
  }

  function start(){
      ReactDOM.render(<Logic arrayPlayers = {arrayPlayers}/>,document.getElementById('root'))
  }

  async function countPlayer() {
  let players = []
  let players_elem = document.getElementsByTagName('input')
  for (let player of players_elem){
    if (!player.value){
      console.log('atata')
    } else {
      players.push(player.value)
    }
  }
  arrayPlayers = players
  // setPlayer([...players])
  console.log(arrayPlayers)
        ReactDOM.render(seleclevel(),document.getElementById('root'))

        
  }
  // console.log(arrayPlayers)
  // let count = ''
  // arrayPlayers.map(elem => count += `${elem}, `)



  return (
    <div className="div_forms">
      <button className="button" onClick={countPlayer}>Далее</button>
      <div>
      <p>{arrayPlayers}</p>
      </div>
    </div>
  )
}

export default TakeName