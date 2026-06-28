"use client";

import { FaStar, FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";

export default function Admin() {
  const toggle = useSelector((state) => state.counter.toggle);
  const [up, left] = useState(true);
  const [up2, left2] = useState(true);
  return (
    <div className="relative md:h-screen overflow-hidden">
      <div className="md:block hidden w-[75vh] h-[90vh] rounded-full bg-blue-100 absolute -bottom-[45vh] -right-[30vh] animate-spin"></div>
      <div className="md:block hidden w-[95vh] h-[95vh] rounded-full bg-blue-100 absolute -top-[30vh] -left-[10vh] z-0"></div>
      <div className="text-blue-800 md:mt-16 flex flex-col items-center ">
        <p className="m-6 z-10 md:px-12 font-bold text-4xl self-start">
          {toggle ? "Сан" : "Content"}
        </p>
        <div
          className="flex z-20 justify-center cursor-pointer items-center self-start pl-6 md:pl-24 pb-6"
          onClick={() => {
            left(!up);
          }}
        >
          <FaChevronUp className={`text-sky-950 ${up ? "block" : "hidden"} `} />
          <FaChevronRight
            className={`text-sky-950 ${!up ? "block" : "hidden"} `}
          />
          <p className="font-bold text-sky-950 text-3xl pl-2">
            {toggle ? "Тест" : "Test"}
          </p>
        </div>
        <Link
          href={"/create?type=createTest"}
          className="z-20 font-bold w-4/5 md:3/5 text-lg rounded-2xl px-4 py-2 flex items-center justify-center bg-blue-800 text-white "
        >
          {toggle ? "+ Тест зохиох" : "+ Create Test"}
        </Link>
        <div
          className="z-20 flex justify-center cursor-pointer items-center self-start pl-6 md:pl-24 py-6"
          onClick={() => {
            left2(!up2);
          }}
        >
          <FaChevronUp
            className={`text-sky-950 ${up2 ? "block" : "hidden"} `}
          />
          <FaChevronRight
            className={`text-sky-950 ${!up2 ? "block" : "hidden"} `}
          />
          <p className="font-bold text-sky-950 text-3xl pl-2">
            {toggle ? "Нийтлэлүүд" : "Article"}
          </p>
        </div>
        <Link
          href={"/create?type=createArticle"}
          className="z-20 font-bold w-4/5 md:3/5 text-lg rounded-2xl px-4 py-2 flex items-center justify-center bg-blue-800 text-white "
        >
          {toggle ? "+ Нийтлэлүүд зохиох" : "+ Create Article"}
        </Link>
      </div>
    </div>
  );
}
