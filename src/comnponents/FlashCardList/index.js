import React from "react";
import FlashCard from "./FlashCard";

export default function FlashCardList({ flashCards }) {
  return (
    <div>
      {flashCards.map((eachCard) => (
        <FlashCard {...eachCard} key={eachCard.id} />
      ))}
    </div>
  );
}
