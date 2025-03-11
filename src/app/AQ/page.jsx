"use client";

import { useState } from "react";
import aqData from "../lib/testData";

export default function AQ() {
  const [object, setObject] = useState({});
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p>The AQ-10</p>
      <div>
        {aqData.map((val, ind) => {
          return (
            <div key={ind}>
              <p>
                {ind + 1}. {val.question}
              </p>
              {val.choices.map((v, i) => {
                return (
                  <div key={i}>
                    <input
                      type="radio"
                      name={val.question}
                      value={v.score}
                      id={i}
                      onChange={prev => {
                        
                      }}
                    />
                    <label htmlFor="i">{v.answer}</label>
                  </div>
                );
              })}
              <button type="submit">Score</button>
            </div>
          );
        })}
      </div>
    </form>
  );
}
