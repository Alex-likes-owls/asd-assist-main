"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function ArticleTest() {
  const toggle = useSelector((state) => state.counter.toggle);
  const [artArr, setArtArr] = useState([
    {
      article: "",
    },
  ]);
  return (
    <form className="md:mt-16 text-blue-800 flex flex-col items-center h-[82vh] md:justify-between justify-evenly p-5">
      <p className="text-3xl font-bold md:mt-5">
        {!toggle
          ? "Please write your article hereദ്ദി ˉ͈̀꒳ˉ͈́ )✧"
          : "Энд нийтлэлээ бичээрэй ദ്ദി ˉ͈̀꒳ˉ͈́ )✧"}
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
        className="rounded-xl md:w-1/2 w-full md:h-3/5 h-2/5 border border-sky-950"
        name="article"
        id="writeArticle"
      ></textarea>
      <div className="w-full flex md:justify-around justify-between">
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
