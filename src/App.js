import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import FlashCardList from "./comnponents/FlashCardList";
import "./index.css";

function App() {
  const [flashCards, setFlashCards] = useState([]);
  const categoryEl = useRef();
  const amountEl = useRef();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  const decodeHtml = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value,
      },
    });

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
  };

  return (
    <>
      <form className="header" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input
            type="number"
            id="amount"
            min="1"
            step="1"
            defaultValue={10}
            ref={amountEl}
          />
        </div>

        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashCardList flashCards={flashCards} />
      </div>
    </>
  );
}

export default App;
