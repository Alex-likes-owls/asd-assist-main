"use client";

import { useEffect, useState } from "react";
import testData from "../lib/testData";
import { useSelector } from "react-redux";
import { testData as testTitle } from "../lib/data";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function Test() {
  const [data, setData] = useState(null);
  const [object, setObject] = useState({});
  const [score, setScore] = useState(undefined);
  const toggle = useSelector((state) => state.counter.toggle);

  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (type) {
      if (type in testData) {
        setData(toggle ? testData[type].mong : testData[type].english);
      } else {
        alert("Invalid test type");
        router.push("/");
      }
    }
  }, [toggle, type]);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full h-full relative">
      <form
        className="w-full h-full"
        onSubmit={async (e) => {
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
          const res = await axios.post("/api/testRecord", {
            score: sum,
            testName: type,
            ts: Date.now(),
          });
          if (res.status !== 200) {
            console.log(res.data);
            return;
          }
          setScore(sum);
        }}
      >
        <div
          className={`h-full fixed z-20 w-full top-0 bg-blue-950 bg-opacity-[0.4] pt-24  ${
            score ? "block" : "hidden"
          }`}
        >
          <div className="p-5 m-auto bg-blue-50 md:w-1/2 w-5/6  text-blue-800 rounded-lg">
            <span
              onClick={() => setScore(null)}
              className="font-bold  text-3xl float-right hover: text-blue-800  ml-3 cursor-pointer"
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
                    testTitle.filter((v) => v.name === type)[0].threshold
                  } онооноос дээш авбал энэ эмгэгтэй байх өндөр магадлалтай. Гэвч энэхүү тест таныг бүрэн оношилж чадахгүй учраас өндөр оноо авбал та битгий санаа зовоорой.`
                : ` You are likely to have this condition if you score more than ${
                    testTitle.filter((v) => v.name === type)[0].threshold
                  }. However, as this is not an official diagnosis but rather a tool to calcute the amount of symptoms you show, you are recommended to take this result with a whole lot of salt.`}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-blue-800 justify-center p-5">
          <p className="my-7 md:mt-16 text-sky-950 font-bold text-4xl">
            {testTitle.filter((v) => v.name === type)[0].title}
          </p>
          <div className="">
            {data.map((val, ind) => {
              return (
                <div key={ind} className="border-b border-gray-300 mb-4 pb-4">
                  <div className="flex gap-1">
                    <p className="text-blue-800 mb-2 font-semibold">
                      {ind + 1}.
                    </p>
                    <p className="text-blue-800 mb-2 font-semibold">
                      {val.question}
                    </p>
                  </div>

                  <div
                    className={`${
                      val.choices.length === 4 ? "result" : "grid-cols-5"
                    } grid gap-2 `}
                  >
                    {val.choices.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center text-center gap-2"
                        >
                          <input
                            className="w-8 h-8 "
                            type="radio"
                            name={val.question}
                            value={v.score}
                            id={val.question + i.toString()}
                            onChange={() => {
                              setObject((prev) => {
                                let newObj = {
                                  ...prev,
                                };
                                newObj[`question-${ind}`] = v.score;
                                return newObj;
                              });
                            }}
                          />
                          <label
                            className="text-xs w-2/3"
                            htmlFor={val.question + i.toString()}
                          >
                            {v.answer}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="flex justify-center m-6">
              <button
                className="bg-blue-900 text-white rounded-2xl md:w-[100px] w-11/12 p-3 font-semibold "
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
