import React from "react";
import FlashCard from "./FlashCard";
import "../../index.css";
export default function FlashCardList({ flashCards }) {
  return (
    <div className="card-grid">
      {flashCards.map((eachCard) => (
        <FlashCard {...eachCard} key={eachCard.id} />
      ))}
    </div>
  );
}
