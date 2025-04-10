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
    <div className="md:bg-blue-100 bg-white">
      <div
        id="Home"
        className="md:h-screen flex flex-col justify-center text-blue-800"
      >
        <div
          className={`h-full fixed z-20 w-full top-0 bg-blue-950 bg-opacity-[0.4] pt-24 ${
            popdata ? "block" : "hidden"
          }`}
        >
          <div className="p-5 m-auto bg-blue-50 md:w-1/2 w-full text-blue-800 rounded-lg">
            <span
              className="font-bold  text-3xl float-right hover: text-blue-800 cursor-pointer ml-3"
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
              <div className="md:max-h-48 h-96 overflow-x-hidden overflow-y-scroll">
                <p className="m-5 text-justify w-11/12">
                  {popdata ? popdata.article : "nada"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-row flex flex-col-reverse justify-around items-center m-4">
          <div className="flex-col-reverse md:flex-row md:w-2/5">
            <p className="text-5xl font-bold">ASD-Assist</p>
            <p className="text-xl mt-2  text-blue-800">
              {!toggle
                ? " A website designed to debunk false stereotypes and spread awareness of Autistic Spectrum Disorder(ASD). Take some self-assessments, read some fun articles, and simply enjoy yourself."
                : "Аутизмын хүрээний эмгэг (АХЭ)-ын буруу ойлголтуудыг үгүйсгэж, өвчний талаарх мэдээлэл түгээх зорилготой вэбсайт. Өөрийгөө аутизмтай эсэхээ шалгаж сонирхолтой тестүүд өгч, энэхүү өвчний тухай нийтлэлүүдийг уншиж үзээрэй."}
            </p>
          </div>
          <Image
            className="rounded-lg md:mb-0 mb-6 md:w-4/12"
            src="/Sonic-Logo.gif"
            width={500}
            height={500}
            alt="sonk"
          />
        </div>
      </div>
      <div className="bg-indigo-900 md:hidden text-white m-5 rounded-2xl px-5 py-8 relative overflow-hidden">
        <div className="w-48 h-48 rounded-full bg-pink-200/20 absolute -right-28"></div>
        <div className="w-36 h-36 rounded-full bg-pink-200/20 absolute -top-24 right-20"></div>
        <div className="w-48 h-48 rounded-full bg-pink-200/20 absolute -top-20 -left-12"></div>
        <p className="font-bold text-3xl">
          {!toggle ? "Test collection" : "Тестийн сан"}
        </p>
        <p className="mb-5">
          {!toggle
            ? "Take one of our tests!"
            : "Бидний нэг тестийг өгч үзээрэй!"}
        </p>
        <Link
          className="bg-white text-blue-900 rounded-2xl p-3 font-semibold"
          href={"/blogtest?t=tests"}
        >
          {!toggle ? "Get Started" : "Эхлэх"}
        </Link>
      </div>
      {data.map((val, ind) => {
        return (
          <div
            className={`text-blue-800 ${ind === 1 ? "bg-white" : "bg-blue-50"}`}
            id={"About"}
            key={ind}
          >
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold mt-14 text-center">
                {val.title}
              </p>
              <p className="md:w-1/2 m-5 w-3/4">{val.description}</p>
              <div
                className="md:flex-row flex flex-col justify-around items-center flex-wrap"
                key={ind}
              >
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
