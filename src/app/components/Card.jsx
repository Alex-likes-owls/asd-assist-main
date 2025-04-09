"use client";

import Image from "next/image";

export const Card = ({ data, setPopdata }) => {
  return (
    <div className=" flex flex-col justify-evenly items-center md:w-4/12 w-11/12 h-[620px] text-center my-7 md:m-7 bg-sky-50 rounded-lg">
      <p className="text-3xl text-sky-600 font-bold">{data.title}</p>
      <div className="flex flex-col items-center">
        <Image
          priority
          className="rounded-lg object-cover"
          src={data.imageSrc}
          width={350}
          height={350}
          alt="nothing"
        ></Image>

        <p className="w-9/12 text-xs text-sky-800">{data.imageId}</p>
      </div>
      <p className="w-11/12">{data.description}</p>
      <button
        className="font-medium text-sky-600 text-lg hover:text-sky-500 underline"
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
