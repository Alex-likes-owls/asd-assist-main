"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../counter/counterSlice";
import { useEffect } from "react";

export default function Toggle() {
  const toggle = useSelector((state) => state.counter.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(toggle);
  }, []);

  return (
    <div
      className={`flex w-14 h-7 rounded-full ${
        !toggle ? "bg-sky-700" : "bg-sky-600"
      }`}
      onClick={() => {
        dispatch(changeToggle());
      }}
    >
      <span
        className={`w-7 h-7 bg-white text-sky-950 text-xs font-semibold rounded-full flex justify-center items-center transition-all duration-500 ${
          !toggle ? "ml-0" : "ml-7"
        }`}
      >
        {!toggle ? "Eng" : "Mon"}
      </span>
    </div>
  );
}
