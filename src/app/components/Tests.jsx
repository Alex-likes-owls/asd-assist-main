import Image from "next/image";
import Link from "next/link";

export const Tests = ({ data }) => {
  return (
    <Link
      className="flex flex-col justify-evenly items-center md:w-[32%] bg-blue-100 hover:bg-indigo-100 text-center m-7 rounded-lg"
      href={`/test?type=${data.name}`}
    >
      <div className="h-[540px] flex flex-col justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-lg"
            width={270}
            height={300}
            alt="56"
            src={data.imageSrc}
          ></Image>
          <p className="w-9/12 text-center text-xs">{data.imageId}</p>
        </div>
        <p className="font-bold text-3xl text-blue-600 underline">
          {data.title}
        </p>
        <p className=" w-10/12 font-semibold text-center">{data.description}</p>
      </div>
    </Link>
  );
};
