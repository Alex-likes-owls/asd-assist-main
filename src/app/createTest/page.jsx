"use client";
import Link from "next/link";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ArticleTest() {
  const add = () => {
    const newArr = {
      id: Date.now(),
      text: "",
      mntext: "",
      answers: [],
    };
    setArray((prev) => [...prev, newArr]);
  };
  const addAns = (ind) => {
    setArray((prev) => {
      if (ind < prev.length) {
        let target = { ...prev[ind] };
        target.answers = [
          ...target.answers,
          {
            id: Date.now(),
            text: "",
            mntext: "",
            point: 0,
            mnpoint: 0,
          },
        ];
        const newArr = [...prev.slice(0, ind), target, ...prev.slice(ind + 1)];
        return newArr;
      }
      return prev;
    });
  };
  const delAns = (ind, i) => {
    setArray((prev) => {
      let target = { ...prev[ind] };
      target.answers = target.answers.filter((e, ansi) => ansi !== i);
      const newArr = [...prev.slice(0, ind), target, ...prev.slice(ind + 1)];
      console.log(newArr);
      return newArr;
    });
  };
  const del = (ind) => {
    setArray((prev) => {
      const newArr = prev.filter((e, i) => i !== ind);
      console.log(newArr);
      return newArr;
    });
  };
  const [thres, setThres] = useState([
    {
      score: 0,
    },
  ]);
  const toggle = useSelector((state) => state.counter.toggle);
  const [arr, setArray] = useState([
    {
      id: 0,
      text: "",
      mntext: "",
      answers: [
        {
          id: 0,
          text: "",
          mntext: "",
          point: 0,
          mnpoint: 0,
        },
      ],
    },
  ]);
  return (
    <form className="md:mt-16 text-blue-800 p-5 flex flex-col items-center w-full justify-around">
      <div className="flex items-center md:justify-center justify-evenly mb-5">
        <label className="text-3xl font-bold mr-3" htmlFor="thres">
          {!toggle ? "Enter threshold score of test:" : "Тестийн босго оноо:"}
        </label>
        <input
          onChange={(e) =>
            setThres((prev) => {
              let target = { ...prev[0] };
              target.score = Number(e.target.value);
              console.log(target);
              return target;
            })
          }
          required
          className="rounded-lg h-9 w-12 border border-sky-950"
          type="number"
          name="thres"
          id="thres"
        />
      </div>

      {arr.map((val, ind) => {
        return (
          <div
            className="rounded-3xl md:w-3/4 w-full bg-sky-100 py-5 relative flex flex-col mb-8"
            key={ind}
          >
            <span
              onClick={() => del(ind)}
              className="font-bold absolute top-3 right-7 text-3xl float-right cursor-pointer"
            >
              &times;
            </span>
            <div className=" flex flex-col items-center">
              <div className="w-full flex items-center justify-evenly md:flex-row flex-col pb-3">
                <label
                  className="text-3xl font-bold md:p-0 pb-3"
                  htmlFor="question"
                >
                  {`Question ${ind + 1}:  `}
                </label>
                <input
                  onChange={(e) => {
                    setArray((prev) => {
                      let target = { ...prev[ind] };
                      target.text = e.target.value.trim();
                      const newArr = [
                        ...prev.slice(0, ind),
                        target,
                        ...prev.slice(ind + 1),
                      ];
                      console.log(newArr);
                      return newArr;
                    });
                  }}
                  required
                  placeholder="English Question..."
                  value={val.text}
                  className="rounded-lg h-9 border md:w-1/2 w-5/6 border-sky-950"
                  type="text"
                  name="question"
                  id="question"
                />
              </div>
              <div className="w-full flex items-center justify-evenly md:flex-row flex-col pb-3">
                <label
                  className="text-3xl font-bold md:p-0 pb-3 md:ml-7"
                  htmlFor="mnquestion"
                >
                  {`Асуулт ${ind + 1}`}:
                </label>
                <input
                  onChange={(e) => {
                    setArray((prev) => {
                      let target = { ...prev[ind] };
                      target.mntext = e.target.value.trim();
                      const newArr = [
                        ...prev.slice(0, ind),
                        target,
                        ...prev.slice(ind + 1),
                      ];
                      console.log(newArr);
                      return newArr;
                    });
                  }}
                  placeholder="Монгол Асуулт..."
                  value={val.mntext}
                  className="rounded-lg h-9 border md:w-1/2 w-5/6 border-sky-950"
                  type="text"
                  name="mnquestion"
                  id="mnquestion"
                />
              </div>
              {val.answers.map((v, i) => {
                return (
                  <div className="w-full flex flex-col py-3" key={i}>
                    <div className="flex items-center justify-around">
                      <div className=" flex flex-col items-center justify-evenly w-2/3">
                        <div className="flex justify-around w-full pb-3">
                          <div className="flex md:flex-row flex-col items-center">
                            <label
                              className="text-lg font-semibold md:mr-5"
                              htmlFor="answer"
                            >
                              Answer:
                            </label>
                            <input
                              onChange={(e) => {
                                setArray((prev) => {
                                  let target = { ...prev[ind] };
                                  target.answers[i].text =
                                    e.target.value.trim();
                                  const newArr = [
                                    ...prev.slice(0, ind),
                                    target,
                                    ...prev.slice(ind + 1),
                                  ];
                                  console.log(newArr);
                                  return newArr;
                                });
                              }}
                              required
                              placeholder="English Answer..."
                              value={v.text}
                              className="rounded-lg w-2/3 h-9 border border-sky-950"
                              type="text"
                              name="answer"
                              id="answer"
                            />
                          </div>
                          <div className="flex md:flex-row flex-col items-center">
                            <label
                              className="text-lg font-semibold md:mr-3"
                              htmlFor="points"
                            >
                              Points:
                            </label>
                            <input
                              onChange={(e) => {
                                setArray((prev) => {
                                  let target = { ...prev[ind] };
                                  target.answers[i].point = Number(
                                    e.target.value
                                  );
                                  const newArr = [
                                    ...prev.slice(0, ind),
                                    target,
                                    ...prev.slice(ind + 1),
                                  ];
                                  console.log(newArr);
                                  return newArr;
                                });
                              }}
                              required
                              value={v.point}
                              className="rounded-lg h-9 md:w-12 w-1/3 border border-sky-950"
                              type="number"
                              name="points"
                              id="points"
                            />
                          </div>
                        </div>
                        <div className="flex justify-around w-full">
                          <div className="flex md:flex-row flex-col items-center ">
                            <label
                              className="text-lg font-semibold md:mr-5"
                              htmlFor="mnanswer"
                            >
                              Хариу:
                            </label>
                            <input
                              required
                              onChange={(e) => {
                                setArray((prev) => {
                                  let target = { ...prev[ind] };
                                  target.answers[i].mntext =
                                    e.target.value.trim();
                                  const newArr = [
                                    ...prev.slice(0, ind),
                                    target,
                                    ...prev.slice(ind + 1),
                                  ];
                                  console.log(newArr);
                                  return newArr;
                                });
                              }}
                              placeholder="Монгол хариулт..."
                              value={v.mntext}
                              className="rounded-lg w-2/3 h-9 border border-sky-950"
                              type="text"
                              name="mnanswer"
                              id="mnanswer"
                            />
                          </div>
                          <div className="flex md:flex-row flex-col items-center">
                            <label
                              className="text-lg font-semibold md:mr-3"
                              htmlFor="points"
                            >
                              Оноо:
                            </label>
                            <input
                              onChange={(e) => {
                                setArray((prev) => {
                                  let target = { ...prev[ind] };
                                  target.answers[i].mnpoint = Number(
                                    e.target.value
                                  );
                                  const newArr = [
                                    ...prev.slice(0, ind),
                                    target,
                                    ...prev.slice(ind + 1),
                                  ];
                                  console.log(newArr);
                                  return newArr;
                                });
                              }}
                              required
                              value={v.mnpoint}
                              className="rounded-lg h-9 md:w-12 w-1/3 border border-sky-950"
                              type="number"
                              name="points"
                              id="points"
                            />
                          </div>
                        </div>
                      </div>
                      <button onClick={() => delAns(ind, i)}>
                        <BsTrash3 className="size-7" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                addAns(ind);
              }}
              className="bg-blue-800 rounded-2xl self-center text-white px-5 py-3 font-bold"
            >
              {!toggle ? `Add answer` : `Хариу нэмэх`}
            </button>
          </div>
        );
      })}

      <button
        className="bg-blue-800 rounded-2xl text-white w-1/2 py-3 font-bold mb-8"
        onClick={() => {
          add();
        }}
      >
        {!toggle ? `Add question` : `Асуулт нэмэх`}
      </button>
      <div className="w-full flex md:justify-around justify-between md:m-0 mb-8">
        <Link
          href={"/admin"}
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
        >
          Cancel
        </Link>
        <Link
          href={"/"}
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
        >
          Finish
        </Link>
      </div>
    </form>
  );
}
