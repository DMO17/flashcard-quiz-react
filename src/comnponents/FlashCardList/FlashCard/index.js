import React, { useState } from "react";
import "../../../index.css";
export default function FlashCard({ question, answer, options }) {
  const [flip, setFlip] = useState(false);
  const [clickNum, setClickNum] = useState(1);

  console.log(clickNum);

  const whenClicked = (event) => {
    setFlip(true);
  };
  return (
    <div className={`card ${flip ? "flip" : ""}`} onClick={whenClicked}>
      <div className="front">
        {question}
        <div className="flashcard-options">
          {options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back">{answer}</div>
    </div>
  );
}
