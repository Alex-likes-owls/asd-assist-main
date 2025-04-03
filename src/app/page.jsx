"use client";

import { Card } from "./components/Card";
import { Inventory } from "./components/Inventory";
import { Tests } from "./components/Tests";
import Image from "next/image";
import Link from "next/link";
import pagesData, { mongpagesData } from "./lib/data";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const toggle = useSelector((state) => state.counter.toggle);

  const [data, setData] = useState(pagesData);

  const [popdata, setPopdata] = useState(null);

  useEffect(() => {
    setData(toggle ? mongpagesData : pagesData);
  }, [toggle]);

  return (
    <div className="bg-sky-700 ">
      <div
        id="Home"
        className="h-screen flex flex-col justify-center text-white"
      >
        <div
          className={`h-full fixed z-20 w-full bg-sky-950 bg-opacity-[0.4] pt-24 ${
            popdata ? "block" : "hidden"
          }`}
        >
          <div className="p-5 m-auto bg-sky-50 w-1/2  text-sky-950 rounded-lg">
            <span
              className="font-bold  text-3xl float-right hover: text-sky-600 cursor-pointer ml-3"
              onClick={() => setPopdata(null)}
            >
              &times;
            </span>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-3xl text-center m-3">
                {popdata ? popdata.title : "none"}
              </p>
              <Image
                src={popdata ? popdata.imageSrc : "/Dontron.jpg"}
                alt="nah"
                width={325}
                height={300}
                className="rounded-lg m-3"
              ></Image>
              <div className="max-h-48 overflow-x-hidden overflow-y-auto">
                <p className="m-5 text-justify w-11/12">
                  {popdata ? popdata.article : "nada"}
                </p>
              </div>
            </div>
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
              <p className="w-1/2 m-5 text-center">{val.description}</p>
              <div className="flex justify-around flex-wrap" key={ind}>
                {val.arr.slice(0, 2).map((v, i) => {
                  if (ind === 0) {
                    return <Inventory data={v} key={i} />;
                  } else if (ind === 1) {
                    return (
                      <Card
                        popdata={popdata}
                        setPopdata={setPopdata}
                        data={v}
                        key={i}
                      />
                    );
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
