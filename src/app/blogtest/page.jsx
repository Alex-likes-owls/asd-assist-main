"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import pagesData, { mongpagesData } from "../lib/data";
import Image from "next/image";
import { Card } from "../components/Card";
import { Tests } from "../components/Tests";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";

export default function BlogTest() {
  const searchParams = useSearchParams();
  let t = searchParams.get("t");
  const [data, setData] = useState(undefined);
  const [popdata, setPopdata] = useState(null);
  const toggle = useSelector((state) => state.counter.toggle);
  const [all, setAll] = useState(undefined);

  useEffect(() => {
    if (t === "articles") {
      setData(toggle ? mongpagesData[1].arr : pagesData[1].arr);
      setAll(toggle ? mongpagesData[1].arr : pagesData[1].arr);
    } else {
      setData(toggle ? mongpagesData[2].arr : pagesData[2].arr);
      setAll(toggle ? mongpagesData[2].arr : pagesData[2].arr);
    }
  }, [t, toggle]);
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-blue-800 md:mt-16 flex flex-col items-center">
      <div
        className={`h-full fixed z-20 w-full bg-blue-950 bg-opacity-[0.4] pt-24 top-0 ${
          popdata ? "block" : "hidden"
        }`}
      >
        <div className="p-5 m-auto bg-blue-50 relative md:w-1/2 w-5/6 rounded-3xl">
          <span
            className="font-bold absolute top-3 right-7 text-3xl float-right hover: text-blue-600 cursor-pointer"
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
            <div className="md:max-h-48 h-96 overflow-x-hidden overflow-y-auto">
              <p className="text-justify">
                {popdata ? popdata.article : "nada"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="m-6 font-bold text-4xl">
        {t[0].toUpperCase() + t.slice(1, 8)}
      </p>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-lg mb-8 w-2/3 text-center">
          {toggle
            ? "Тодруулсан хэсэг дээр байршуулаагүй бүгдийг та уншиж үзээрэй ٩(^ᗜ^ )و ´-"
            : "Please enjoy the ones that were not in the highlights section of the home page ٩(^ᗜ^ )و ´-"}
        </p>
        <div className="flex items-center">
          <input
            type="text"
            name="searchbar"
            className="bg-blue-50 rounded-full pl-11 p-3 md:w-96 w-80"
            id="searchbar"
            placeholder={toggle ? "Хайх" : "Search"}
            onChange={(e) =>
              setData(
                all.filter((obj) =>
                  obj.title.toLowerCase().includes(e.target.value.toLowerCase())
                )
              )
            }
          />
          <FaSearch className="absolute ml-3 size-5" />
        </div>
      </div>
      <div className="justify-center p-5 flex flex-wrap gap-7">
        {data.map((val, ind) => {
          if (t === "articles") {
            return (
              <Card
                data={val}
                key={ind}
                popdata={popdata}
                setPopdata={setPopdata}
              />
            );
          } else return <Tests data={val} key={ind} />;
        })}
      </div>
    </div>
  );
}
