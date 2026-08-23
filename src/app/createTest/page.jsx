"use client";
import Link from "next/link";
import { BsTrash3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { create } from "domain";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ArticleTest() {
  const [mon, setMon] = useState(null);
  const [en, setEn] = useState(null);
  useEffect(() => {
    const mong = JSON.parse(localStorage.getItem("mon"));
    const eng = JSON.parse(localStorage.getItem("en"));
    if (!mon || !en) {
      setMon(mong);
      setEn(eng);
    }
  }, [mon, en]);
  // console.log(mon, en);
  const cleanShit = (lan) => ({
    imageSrc: en[0].imgUrl,
    imageId: lan === "en" ? en[0].imgId : mon[0].monimgId,
    title: lan === "en" ? en[0].title : mon[0].montitle,
    description: lan === "en" ? en[0].description : mon[0].mondescription,
    threshold: thres[0].score,
    lan: lan,
    questions: {
      create: arr.map((q) => ({
        questions: lan === "en" ? q.text.trim() : q.mntext.trim(),
        choices: {
          create: q.answers.map((c) => ({
            answer: lan === "en" ? c.text.trim() : c.mntext.trim(),
            score: lan === "en" ? c.point : c.mnpoint,
          })),
        },
      })),
    },
  });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mn = cleanShit("mn");
    const eng = cleanShit("en");
    console.log("mn payload:", mn);
    console.log("eng payload:", eng);

    const res = await axios.post("/api/create", { mn, eng });
    console.log(res);
    router.push("/");
    // console.log(mn, eng);
    // const inds_needed = ["id", "text", "point"];
    // const mn_inds_needed = ["id", "mntext", "point"];
    // mn_inds_needed.forEach((k) => mon.push(arr[k]));
    // console.log(mon);
    // const monArr = [...mon, ...arr];
    // const enArr = en.concat(arr);
    // const mn = [];
    // arr.forEach((e) => {
    //   mn.push({ mnquestion: e.mntext });
    //   mn.push({ answers: e.answers });
    // });
    // const monArr = arr.filter((obj) =>
    //   Object.keys(obj).some((key) => key.includes("mn")),
    // );

    // console.log(arr);
    // // console.log(Object.keys(arr[0]));
    // for (let i = 0; i < Object.keys(arr).length; i++) {
    //   // console.log(Object.keys(arr[i]).filter((o) => o.includes("mn")));
    //   console.log(
    //     // arr[i]["answers"].filter((o) => {
    //     //   Object.keys(o).filter((k) => k.includes("mn"));
    //     // }),
    //     Object.keys(arr[i].answers).filter((o) => o.includes("mn")),
    //   );
    // );

    // console.log(
    //   Object.keys(arr[i]["answers"]).filter((o) => o.includes("mn")),
    // );
    // console.log(Object.keys(arr[i]));
    // console.log(Object.keys(arr[i]));
    // }
    //   // console.log(monArr);
  };
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
            point: "",
            mnpoint: "",
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
  // console.log(thres[0].score);
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
          point: "",
          mnpoint: "",
        },
      ],
    },
  ]);
  return (
    <form
      onSubmit={handleSubmit}
      className="md:mt-16 text-blue-800 p-5 flex flex-col items-center w-full justify-around"
    >
      <div className="flex items-center md:justify-center justify-evenly mb-5">
        <label className="text-3xl font-bold mr-3" htmlFor="thres">
          {!toggle ? "Enter threshold score of test:" : "Тестийн босго оноо:"}
        </label>
        <input
          onChange={(e) =>
            setThres((prev) => {
              let target = { ...prev[0] };
              target.score = Number(e.target.value);
              // console.log(target);
              return [target];
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
                      target.text = e.target.value;
                      const newArr = [
                        ...prev.slice(0, ind),
                        target,
                        ...prev.slice(ind + 1),
                      ];
                      // console.log(newArr);
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
                      target.mntext = e.target.value;
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
                                  target.answers[i].text = e.target.value;
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
                                    e.target.value,
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
                                  target.answers[i].mntext = e.target.value;
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
                              htmlFor="mnpoints"
                            >
                              Оноо:
                            </label>
                            <input
                              onChange={(e) => {
                                setArray((prev) => {
                                  let target = { ...prev[ind] };
                                  target.answers[i].mnpoint = Number(
                                    e.target.value,
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
                              name="mnpoints"
                              id="mnpoints"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" onClick={() => delAns(ind, i)}>
                        <BsTrash3 className="size-7" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
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
        type="button"
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
        <button
          // href={"/"}
          type="submit"
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
        >
          Finish
        </button>
      </div>
    </form>
  );
}
