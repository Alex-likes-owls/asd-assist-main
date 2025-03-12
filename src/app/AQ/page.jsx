"use client";

import { useEffect, useState } from "react";
import aqData from "../lib/testData";

export default function AQ() {
  const [object, setObject] = useState({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let sum = 0;
        let myArr = Object.values(object);
        myArr.forEach((element) => {
          sum += element;
        });
        if (myArr.length !== 10) {
          alert("The test has not been finished");
        }
        console.log(sum);
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
