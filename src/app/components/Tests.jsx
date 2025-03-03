import Image from "next/image";
import Link from "next/link";
export const Tests = ({ data }) => {
  return (
    <Link
      className="flex flex-col justify-evenly items-center h-[500px] w-4/12 bg-sky-100 hover:bg-blue-100 text-center m-7 rounded-lg"
      href={"https://www.youtube.com/watch?v=ZVnjOPwW4ZA"}
    >
      <div className="h-[450px] flex flex-col justify-center items-center">
        <Image
          className="rounded-lg"
          width={270}
          height={300}
          alt="56"
          src={data.imageSrc}
        ></Image>
        <p className="w-9/12 text-center text-xs">{data.imageId}</p>
        <p className="font-bold text-3xl mt-2">{data.title}</p>
        <p className="m-2 w-10/12 font-semibold text-center">
          {data.description}
        </p>
      </div>
    </Link>
  );
};
