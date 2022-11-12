import { useState } from "react";
import "./App.css";
import ToggleItem from "./components/ToogleItem/ToggleItem";
import Starts from "./components/Starts/Starts";

let letter = ["A", "B", "C"];
const randomLetter = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = letter[Math.floor(Math.random() * letter.length)];
    }
  }
};

const arr = Array.from({ length: 3 }, () => Array.from({ length: 3 }));

randomLetter();

export default function App() {
  const [click, setClick] = useState(false);
  const [find, setFind] = useState("");
  const [lost, setLost] = useState(false);
  const [message, setMessage] = useState("");
  const [winner, setWinner] = useState(false);
  const [restart, setRestart] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  
  const updateLost = (value) => {
    setLost(value);
  };

  const updateMessage = (value) => {
    setMessage(value);
  };

  const update = (value) => {
    setClick(value);
    setRestart(value);
  };

  const updateWinner = (value) => {
    setWinner(value);
  };
  const handleClick = () => {
    setCount(count + 1);
    setClick(true);
    setLost(false);
    setDisabled(true);
    setFind(
      arr[Math.floor(Math.random() * arr.length)][
        Math.floor(Math.random() * arr.length)
      ]
    );
  };
  const clickRestart = () => {
    setMessage("");
    setFind("");
    setLost(false);
    randomLetter();
    setWinner(false);
    setRestart(true);
    setDisabled(false)
  };
  return (
    <main>
      <p className="attempts">Number of attempts: {count}</p>
      <h3>Find the letters: {find} </h3>
      <p className="message">{message}</p>
      {arr.map((letters, i) => {
        return (
          <ToggleItem
            letters={letters}
            key={i}
            click={click}
            update={update}
            findLetter={find}
            arr={arr}
            lost={lost}
            updateLost={updateLost}
            updateMessage={updateMessage}
            updateWinner={updateWinner}
            restart={restart}
          />
        );
      })}
      <Starts
        handleClick={handleClick}
        clickRestart={clickRestart}
        winner={winner}
        disabled={disabled}
      />
    </main>
  );
}
