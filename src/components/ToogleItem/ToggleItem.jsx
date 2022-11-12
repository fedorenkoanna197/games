import Button from "../Button/Button";
import { useState } from "react";
const ToggleItem = ({
  letters,
  click,
  update,
  findLetter,
  arr,
  lost,
  updateLost,
  updateMessage,
  updateWinner,
  restart,
}) => {
  return (
    <>
      <div className="board">
        {letters.map((ele, i) => (
          <Button
            ele={ele}
            key={i}
            click={click}
            update={update}
            findLetter={findLetter}
            arr={arr}
            updateLost={updateLost}
            lost={lost}
            updateMessage={updateMessage}
            updateWinner={updateWinner}
            restart={restart}
          />
        ))}
      </div>
    </>
  );
};

export default ToggleItem;
