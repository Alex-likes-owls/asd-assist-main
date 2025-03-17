"use client";

import { useEffect, useState } from "react";
import aqData from "../lib/testData";

export default function AQ() {
  const [object, setObject] = useState({});
  const [score, setScore] = useState(undefined);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let myArr = Object.values(object);

        if (myArr.length !== 10) {
          alert("The test has not been finished");
          return;
        }
        let sum = 0;
        myArr.forEach((element) => {
          sum += element;
        });
        setScore(sum);
        console.log(sum);
      }}
    >
      <div className={`fixed ${score ? "block" : "hidden"}`}>
        <div>
          <span onClick={() => setScore(null)} className="cursor-pointer">
            &times;
          </span>
          <p>Your Result:</p>
          <p>{score}</p>
          <p>
            You are likely to have Autism if you score more than 6. Please get
            evaluated, as this is not a a professional diagnosis.
          </p>
        </div>
      </div>
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
                      onChange={() => {
                        setObject((prev) => {
                          let newObj = { ...prev };
                          newObj[`question-${ind}`] = v.score;
                          return newObj;
                        });
                      }}
                    />
                    <label htmlFor="i">{v.answer}</label>
                  </div>
                );
              })}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
