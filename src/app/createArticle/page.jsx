"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function ArticleTest() {
  // const toggle = useSelector((state) => state.counter.toggle);
  const [artArr, setArtArr] = useState([
    {
      article: "",
      monarticle: "",
    },
  ]);
  const [en, setEn] = useState(null);
  const [mon, setMon] = useState(null);

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
    // threshold: thres[0].score,
    lan: lan,
    article: lan == "en" ? artArr[0].article : artArr[0].monarticle,
    // questions: {
    //   create: arr.map((q) => ({
    //     questions: lan === "en" ? q.text.trim() : q.mntext.trim(),
    //     choices: {
    //       create: q.answers.map((c) => ({
    //         answer: lan === "en" ? c.text.trim() : c.mntext.trim(),
    //         score: lan === "en" ? c.point : c.mnpoint,
    //       })),
    //     },
    //   })),
    // },
  });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mn = cleanShit("mn");
    const eng = cleanShit("en");
    console.log("mn payload:", mn);
    console.log("eng payload:", eng);

    const res = await axios.post("/api/createA", { mn, eng });
    console.log(res);
    router.push("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="md:mt-16 text-blue-800 flex flex-col items-center h-[82vh] md:justify-between justify-evenly p-5"
    >
      <p className="text-3xl font-bold md:my-5">
        {"Please write your article hereദ്ദി ˉ͈̀꒳ˉ͈́ )✧"}
      </p>
      <textarea
        onChange={(e) => {
          setArtArr((prev) => {
            let target = { ...prev[0] };
            target.article = e.target.value;
            const newArr = [target];
            console.log(newArr);
            return newArr;
          });
        }}
        required
        className="rounded-xl md:w-1/2 w-full h-2/5 border border-sky-950"
        name="article"
        id="writeArticle"
      ></textarea>
      <p className="text-3xl font-bold md:my-5">
        {"Энд нийтлэлээ бичээрэй ദ്ദി ˉ͈̀꒳ˉ͈́ )✧"}
      </p>
      <textarea
        onChange={(e) => {
          setArtArr((prev) => {
            let target = { ...prev[0] };
            target.monarticle = e.target.value;
            const newArr = [target];
            console.log(newArr);
            return newArr;
          });
        }}
        required
        className="rounded-xl md:w-1/2 w-full h-2/5 border border-sky-950 mb-5"
        name="article"
        id="writeMonArticle"
      ></textarea>
      <div className="w-full flex md:justify-around justify-between">
        <Link
          href={"/admin"}
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
        >
          Cancel
        </Link>
        <button
          type="submit"
          // href={"/"}
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
        >
          Finish
        </button>
      </div>
    </form>
  );
}
