"use client";

import { Card } from "./components/Card";
import { Inventory } from "./components/Inventory";
import { Tests } from "./components/Tests";
import Image from "next/image";
import Link from "next/link";
import pagesData, { mongpagesData } from "./lib/data";
import Toggle from "./components/Toggle";
import { useState, useEffect } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(pagesData);

  useEffect(() => {
    setData(toggle ? mongpagesData : pagesData);
  }, [toggle]);

  return (
    <div className="bg-sky-700 ">
      <div
        id="Home"
        className="h-screen flex flex-col justify-center text-white"
      >
        <div className="bg-sky-900 w-full flex justify-around items-center fixed top-0 z-10">
          <div className="flex justify-center items-center">
            <Link className="m-4 text-lg" href={"#Home"}>
              Home
            </Link>
            <Link className="m-4 text-lg" href={"#About"}>
              About
            </Link>
            <Link className="m-4 text-lg" href={"#Articles"}>
              Articles
            </Link>
            <Link className="m-4 text-lg" href={"#Tests"}>
              Tests
            </Link>
          </div>
          <div>
            <Toggle toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
        <div className="flex justify-around items-center m-24">
          <div className="flex-col w-1/2">
            <p className="text-5xl font-bold">ASD-Assist</p>
            <p className="text-xl mt-7 w-11/12">
              {!toggle
                ? " A website designed to debunk false stereotypes and spread awareness of Autistic Spectrum Disorder(ASD). Take some self-assessments, read some fun articles, and simply enjoy yourself."
                : "Аутизмын хүрээний эмгэг (АХЭ)-ын буруу ойлголтуудыг үгүйсгэж, өвчний талаарх мэдээлэл түгээх зорилготой вэбсайт. Өөрийгөө аутизмтай эсэхээ шалгаж сонирхолтой тестүүд өгч, энэхүү өвчний тухай нийтлэлүүдийг уншиж үзээрэй."}
            </p>
          </div>
          <Image
            className="rounded-lg motion-safe:animate-[bounce_2s_ease-out_infinite] mt-14"
            src="/Sonic-Logo.gif"
            width={450}
            height={450}
            alt="sonk"
          />
        </div>
      </div>
      {data.map((val, ind) => {
        return (
          <div
            className={`text-sky-950 ${ind === 1 ? "bg-white" : "bg-sky-50"}`}
            id={val.title}
            key={ind}
          >
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold mt-16">{val.title}</p>
              <p className="w-5/12 m-5 text-center">{val.description}</p>
              <div className="flex justify-around flex-wrap" key={ind}>
                {val.arr.map((v, i) => {
                  if (ind === 0) {
                    return <Inventory data={v} key={i} />;
                  } else if (ind === 1) {
                    return <Card data={v} key={i} />;
                  }
                  return <Tests data={v} key={i} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
