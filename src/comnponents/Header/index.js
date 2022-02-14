import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Header({ onSubmit, categoryEl, amountEl, categories }) {
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
    </>
  );
}
