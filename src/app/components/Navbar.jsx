"use client";

import Link from "next/link";
import pagesData, { mongpagesData } from "../lib/data";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Toggle from "./Toggle";
import { FaGithub } from "react-icons/fa";
import { login } from "../../actions/auth";

export default function Navbar() {
  // const [toggle, setToggle] = useState(false);
  const toggle = useSelector((state) => state.counter.toggle);

  return (
    <div className="text-white bg-sky-900 w-full flex justify-around items-center fixed top-0 z-10">
      <div className="flex justify-center items-center">
        <Link className="m-4 text-lg" href={"/"}>
          Home
        </Link>
        <Link
          className="m-4 text-lg"
          href={!toggle ? "/" + "#About" : "/" + "#Тухай"}
        >
          About
        </Link>
        <Link className="m-4 text-lg" href={"/blogtest?t=articles"}>
          Articles
        </Link>
        <Link className="m-4 text-lg" href={"/blogtest?t=tests"}>
          Tests
        </Link>
      </div>
      <div className="flex justify-around items-center w-1/6  ">
        <Toggle />
        <div className="flex items-center cursor-pointer">
          <FaGithub className="m-1 size-6" />
          <button onClick={() => login()}>Profile</button>
        </div>
      </div>
    </div>
  );
}
