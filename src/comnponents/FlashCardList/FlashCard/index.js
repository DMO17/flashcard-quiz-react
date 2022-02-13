import React from "react";

export default function FlashCard({ question, answer, options }) {
  return (
    <div>
      <li>
        <ul>{question}</ul>
        <ul>{answer}</ul>
        <ul>{options}</ul>
      </li>
    </div>
  );
}
