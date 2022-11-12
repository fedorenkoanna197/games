import { useState } from "react"

function Starts({handleClick, clickRestart, winner,disabled}){
   
    return(
        <section className="buttons">
        <button  disabled={disabled} onClick={handleClick} className="game">
          Start
        </button>
        {winner && <button className="game" onClick={clickRestart}>Restart</button>}
      </section>
    )
}

export default Starts