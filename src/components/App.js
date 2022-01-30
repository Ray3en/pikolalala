import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import '../styles/style.css'
import Window from "./Window";
import Test from "./test";

function App(){
  
  return (
    <div>
      <Router>
        <Routes>
             <Route path = '*' element = {<Window/>}/>
             <Route path = '/test' element = {<Test/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App