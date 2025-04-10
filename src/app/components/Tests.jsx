import Image from "next/image";
import Link from "next/link";

export const Tests = ({ data }) => {
  return (
    <Link
      className="group flex h-[600px] flex-col justify-evenly relative overflow-hidden items-center md:w-[30%] bg-white shadow-lg hover:bg-indigo-100 mb-5 text-center rounded-3xl"
      href={`/test?type=${data.name}`}
    >
      <div className="w-44 h-44 bg-blue-50 rotate-45 absolute top-20 -left-24 group-hover:rotate-[225deg] transition-all duration-500"></div>
      <div className="w-44 h-44 bg-blue-50 rotate-45 absolute top-20 -right-24 group-hover:rotate-[-225deg] transition-all duration-500"></div>
      <div className=" flex flex-col justify-evenly space-y-5 p-5 items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-lg relative z-10 mix-blend-multiply"
            width={270}
            height={300}
            alt="56"
            src={data.imageSrc}
          ></Image>
          <p className="w-9/12 text-center text-xs">{data.imageId}</p>
        </div>
        <p className="font-bold text-3xl text-sky-950 underline">
          {data.title}
        </p>
        <p className=" w-10/12 font-semibold text-center">{data.description}</p>
      </div>
    </Link>
  );
};
