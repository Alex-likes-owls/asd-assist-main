"use client";

import Image from "next/image";

export const Card = ({ data, setPopdata }) => {
  return (
    <div className=" flex flex-col justify-evenly relative p-5 overflow-hidden items-center md:w-4/12 shadow-lg h-[620px] text-center bg-white rounded-3xl">
      <div className="w-96 h-80 rounded-full absolute -bottom-52 -left-44 bg-blue-50 animate-spin"></div>
      <div className="w-96 h-96 rounded-full absolute -top-44 -right-44 bg-blue-50"></div>
      <p className="text-3xl text-sky-950 font-bold relative z-10">
        {data.title}
      </p>
      <div className="flex flex-col items-center relative z-10">
        <Image
          priority
          className="rounded-lg object-cover"
          src={data.imageSrc}
          width={350}
          height={350}
          alt="nothing"
        ></Image>

        <p className="w-9/12 text-xs text-blue-800">{data.imageId}</p>
      </div>
      <p className="w-11/12 text-sky-950 relative z-10">{data.description}</p>
      <button
        className="font-bold text-blue-600 text-lg relative z-10 rounded-2xl px-4 py-2 bg-white hover:bg-blue-800 hover:text-white "
        onClick={() =>
          setPopdata({
            title: data.title,
            imageSrc: data.imageSrc,
            article: data.article,
          })
        }
      >
        Read More
      </button>
    </div>
  );
};
