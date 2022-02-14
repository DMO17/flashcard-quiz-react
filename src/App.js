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

  useEffect(async () => {
    const { data } = await axios.get("https://opentdb.com/api.php?amount=10");

    data.results.map((cardDetails) => {
      return {
        id: uuidv4(),
        question: "",
        answer: "",
        options: "",
      };
    });
  }, []);

  return (
    <div>
      <FlashCardList flashCards={flashCards} />
    </div>
  );
}

export default App;
