"use client";

import { useEffect, useState } from "react";
import testData from "../lib/testData";
import { useSelector } from "react-redux";
import { testData as testTitle } from "../lib/data";
import { useSearchParams } from "next/navigation";

export default function Test() {
  const [data, setData] = useState(null);
  const [object, setObject] = useState({});
  const [score, setScore] = useState(undefined);
  const toggle = useSelector((state) => state.counter.toggle);
  // useEffect(() => {
  //   setData(toggle ? testData.aqTest.mong : testData.aqTest.english);
  // }, [toggle]);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  useEffect(() => {
    if (type === "0") {
      setData(toggle ? testData.aqTest.mong : testData.aqTest.english);
    }
    if (type === "1") {
      setData(toggle ? testData.asrsTest.mong : testData.asrsTest.english);
    }
    if (type === "2") {
      setData(toggle ? testData.tasTest.mong : testData.tasTest.english);
    }
  }, [toggle, type]);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let myArr = Object.values(object);

        if (data && myArr.length !== data.length) {
          alert(
            toggle
              ? "Тест дутуу бөглөсөн байна"
              : "The test has not been finished"
          );
          return;
        }
        let sum = 0;
        myArr.forEach((element) => {
          sum += element;
        });
        setScore(sum);
      }}
    >
      <div
        className={`h-full fixed z-20 w-full bg-sky-950 bg-opacity-[0.4] pt-24  ${
          score ? "block" : "hidden"
        }`}
      >
        <div className="p-5 m-auto bg-sky-50 w-1/2  text-sky-950 rounded-lg">
          <span
            onClick={() => setScore(null)}
            className="font-bold  text-3xl float-right hover: text-sky-600  ml-3 cursor-pointer"
          >
            &times;
          </span>
          <p className="font-bold text-3xl text-center m-2">
            {toggle ? "Таны оноо:" : "Your Result:"}
          </p>
          <p className="font-bold text-3xl text-center m-4">{score}</p>
          <p className="text-center font-semibold">
            {toggle
              ? `Хэрэв та ${
                  testTitle[Number(type)].threshold
                } онооноос дээш авбал энэ эмгэгтэй байх өндөр магадлалтай. Гэвч энэхүү тест таныг бүрэн оношилж чадахгүй учраас өндөр оноо авбал та битгий санаа зовоорой.`
              : ` You are likely to have this condition if you score more than ${
                  testTitle[Number(type)].threshold
                }. However, as this is not an official diagnosis but rather a tool to calcute the amount of symptoms you show, you are recommended to take this result with a whole lot of salt.`}
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center text-sky-950 justify-center ">
        <p className="mt-16 font-bold text-4xl">
          {testTitle[Number(type)].title}
        </p>
        <div className="m-3 w-2/3 ">
          {data.map((val, ind) => {
            return (
              <div key={ind}>
                <p className="text-2xl font-semibold m-2">
                  {ind + 1}. {val.question}
                </p>
                {val.choices.map((v, i) => {
                  return (
                    <div key={i}>
                      <input
                        className="m-2"
                        type="radio"
                        name={val.question}
                        value={v.score}
                        id={val.question + i.toString()}
                        onChange={() => {
                          setObject((prev) => {
                            let newObj = { ...prev };
                            newObj[`question-${ind}`] = v.score;
                            return newObj;
                          });
                        }}
                      />
                      <label
                        className="text-lg"
                        htmlFor={val.question + i.toString()}
                      >
                        {v.answer}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="flex justify-center m-6">
            <button
              className="text-sky-50 rounded-lg text-2xl font-semibold w-32 h-14 cursor-pointer bg-sky-900 hover:bg-sky-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
