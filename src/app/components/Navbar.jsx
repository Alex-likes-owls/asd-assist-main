"use client";

import Link from "next/link";
import pagesData, { mongpagesData } from "../lib/data";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Toggle from "./Toggle";

export default function Navbar() {
  // const [toggle, setToggle] = useState(false);
  const toggle = useSelector((state) => state.counter.toggle);

  return (
    <div className="text-white bg-sky-900 w-full flex justify-around items-center fixed top-0 z-10">
      <div className="flex justify-center items-center">
        <Link className="m-4 text-lg" href={"/"}>
          Home
        </Link>
        <Link className="m-4 text-lg" href={!toggle ? "#About" : "#Тухай"}>
          About
        </Link>
        <Link
          className="m-4 text-lg"
          href={!toggle ? "#Articles" : "#Нийтлэлүүд"}
        >
          Articles
        </Link>
        <Link className="m-4 text-lg" href={!toggle ? "#Tests" : "#Тестүүд"}>
          Tests
        </Link>
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
}
