import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FlashCardList from "./comnponents/FlashCardList";
import "./index.css";
import axios from "axios";

const sampleData = [
  {
    id: uuidv4(),
    question: "What is 2+2 ?",
    answer: "4",
    options: ["4", "33", "23", "55"],
  },
  {
    id: uuidv4(),
    question: "What is 5+5 ?",
    answer: "10",
    options: ["4", "33", "10", "55"],
  },
  {
    id: uuidv4(),
    question: "Is London the capital of England ?",
    answer: "true",
    options: ["true", "false"],
  },
];

function App() {
  const [flashCards, setFlashCards] = useState(sampleData);

  const decodeHtml = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  useEffect(async () => {
    const { data } = await axios.get("https://opentdb.com/api.php?amount=10");

    const dataSample = data.results.map((cardDetails) => {
      return {
        id: uuidv4(),
        question: decodeHtml(cardDetails.question),
        answer: decodeHtml(cardDetails.correct_answer),
        options: [
          ...cardDetails.incorrect_answers.map((a) => decodeHtml(a)),
          decodeHtml(cardDetails.correct_answer),
        ].sort(() => Math.random() - 0.5),
      };
    });

    setFlashCards(dataSample);
  }, []);

  return (
    <div className="container">
      <FlashCardList flashCards={flashCards} />
    </div>
  );
}

export default App;
