"use client";
import { Card } from "./components/Card";
import { Inventory } from "./components/Inventory";
import { Tests } from "./components/Tests";
import Image from "next/image";
import Link from "next/link";
import pagesData, { mongpagesData } from "./lib/data";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaInfinity } from "react-icons/fa6";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const toggle = useSelector((state) => state.counter.toggle);

  const [data, setData] = useState(pagesData);

  const [popdata, setPopdata] = useState(null);

  useEffect(() => {
    setData(toggle ? mongpagesData : pagesData);
  }, [toggle]);

  return (
    <div className=" bg-white">
      <div
        id="Home"
        className="md:h-screen flex flex-col justify-center text-blue-800"
      >
        <div
          className={`h-full fixed z-20 w-full top-0 bg-blue-950 bg-opacity-[0.4] pt-24 ${
            popdata ? "block" : "hidden"
          }`}
        >
          <div className="p-5 m-auto bg-blue-50 relative md:w-1/2 w-5/6 rounded-3xl">
            <span
              className="font-bold absolute top-3 right-7 text-3xl float-right hover: text-blue-800 cursor-pointer "
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
                <p className="text-justify">
                  {popdata ? popdata.article : "nada"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-row h-full relative  flex flex-col-reverse overflow-hidden justify-around items-center md:m-0 m-5">
          <div className="md:block hidden w-[80vh] h-[80vh] rounded-full bg-blue-100 absolute -bottom-[45vh] -left-[30vh]"></div>
          <FaInfinity className="md:block hidden w-[80vh] h-[80vh] -rotate-45 rounded-full text-blue-100 absolute -bottom-[20vh] -right-[20vh]" />
          <IoExtensionPuzzleSharp className="md:block hidden w-[40vh] h-[40vh] rounded-full text-blue-100 absolute top-[0] left-[10vh] rotate-45" />
          <div className="flex-col-reverse md:flex-row md:w-1/3">
            <div className="relative flex w-max">
              <p className="text-5xl font-bold relative z-10 w-fit">
                ASD-Assist
              </p>
              <FaStar className="text-yellow-400 animate-spin size-12  absolute -top-5 -right-7" />
            </div>
            <p className="text-xl mt-2 relative z-10 text-blue-800">
              {!toggle
                ? " A website designed to debunk false stereotypes and spread awareness of Autistic Spectrum Disorder(ASD). Take some self-assessments, read some fun articles, and simply enjoy yourself."
                : "Аутизмын хүрээний эмгэг (АХЭ)-ын буруу ойлголтуудыг үгүйсгэж, өвчний талаарх мэдээлэл түгээх зорилготой вэбсайт. Өөрийгөө аутизмтай эсэхээ шалгаж сонирхолтой тестүүд өгч, энэхүү өвчний тухай нийтлэлүүдийг уншиж үзээрэй."}
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              className="rounded-lg md:mb-0 mb-6 md:w-10/12 relative z-10"
              src="/1.webp"
              width={500}
              height={500}
              alt="sonk"
            />
            <Image
              src={"/sensory-chaos.jpg"}
              width={200}
              height={200}
              alt="b"
              className="hidden lg:block absolute -bottom-32 -left-20 rounded-lg"
            ></Image>
            <Image
              src={"/asd.webp"}
              width={300}
              height={200}
              alt="b"
              className="hidden lg:block absolute -top-32 -left-20 rounded-lg"
            ></Image>
            <Image
              src={"/running.webp"}
              width={250}
              height={200}
              alt="b"
              className="hidden lg:block absolute -bottom-20 -right-20 rounded-lg z-20"
            ></Image>
          </div>
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
          className="bg-white text-blue-900 rounded-2xl p-3 font-semibold z-10 relative"
          href={"/blogtest?t=tests"}
        >
          {!toggle ? "Get Started" : "Эхлэх"}
        </Link>
      </div>
      {data.map((val, ind) => {
        return (
          <div className={`text-blue-800 bg-gray-50`} id={"About"} key={ind}>
            <div className="flex flex-col p-5 items-center space-y-10">
              <p className="md:text-4xl text-5xl font-bold mt-20 self-start md:self-center max-w-[80%]">
                {val.title}
              </p>
              <p className="md:w-1/2 text-justify relative z-10 text-sky-950">
                {val.description}
              </p>
              <div
                className="md:flex-row flex flex-col pb-7 justify-center gap-8 items-center flex-wrap"
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
