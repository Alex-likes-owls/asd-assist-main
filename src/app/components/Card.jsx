"use client";

import Image from "next/image";

export const Card = ({ data, setPopdata }) => {
  return (
    <div className="text-sky-950 flex flex-col justify-evenly items-center w-4/12 h-[620px] text-center m-7 bg-sky-50 rounded-lg">
      <p className="text-3xl font-bold">{data.title}</p>
      <div className="flex flex-col items-center">
        <div className="w-[400px] h-[250px] relative">
          <Image
            priority
            className="rounded-lg object-cover"
            src={data.imageSrc}
            fill={true}
            alt="nothing"
          ></Image>
        </div>
        <p className="w-9/12 text-xs text-sky-800">{data.imageId}</p>
      </div>
      <p className="w-11/12">{data.description}</p>
      <button
        className="font-medium text-lg hover:text-sky-600"
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
