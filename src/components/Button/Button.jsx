import { useEffect } from "react";
import { useState } from "react";

let count;
const countLetters = (letter, arr) => {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] === letter ? count++ : null;
    }
  }
};

function Button({
  ele,
  i,
  click,
  update,
  findLetter,
  arr,
  lost,
  updateLost,
  updateMessage,
  updateWinner,
  restart,
}) {
  const [toggleThisElement, setToggleThisElement] = useState("hidden");
  const [disabled, setDisabled] = useState(true);

  const timer = () => {
    setTimeout(() => {
      setDisabled(false);
      update(false);
      setToggleThisElement("hidden");
    }, "5000");
  };

  const show = () => {
    restart === true
      ? (setToggleThisElement("hidden"), update(false))
      : (setToggleThisElement("visibility"), timer());
  };

  const handleClick = (e) => {
    e.value === findLetter
      ? (--count,
        updateMessage("Well done!"),
        setToggleThisElement("visibility"),
        setDisabled(true))
      : (updateLost(true),
        updateMessage("Maybe next time you will be lucky"),
        updateWinner(true));

    count === 0
      ? (updateMessage("Beautiful work.I am proud of you"), updateWinner(true))
      : null;
  };

  useEffect(() => {
    restart === true ? show() : null;
  });

  click === true && toggleThisElement === "hidden"
    ? (show(), countLetters(findLetter, arr))
    : null;

  return (
    <button
      key={i}
      className="cell"
      disabled={lost === true ? true : disabled}
      value={ele}
      onClick={(e) => {
        handleClick(e.target);
      }}
    >
      {
        <span className={lost === false ? toggleThisElement : "visibitity"}>
          {ele}
        </span>
      }
    </button>
  );
}

export default Button;
