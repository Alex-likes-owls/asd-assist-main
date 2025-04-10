"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../counter/counterSlice";
import { useEffect } from "react";
import Image from "next/image";

export default function Toggle() {
  const toggle = useSelector((state) => state.counter.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(toggle);
  }, []);

  return (
    <div
      onClick={() => {
        dispatch(changeToggle());
      }}
    >
      <Image
        src={!toggle ? "/uk.png" : "/mon.avif"}
        alt="flag"
        width={30}
        height={30}
        className="rounded-full"
      ></Image>
    </div>
  );
}
