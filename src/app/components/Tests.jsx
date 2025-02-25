import Image from "next/image";
import Link from "next/link";

export const Tests = ({ data }) => {
  console.log("data:", data);
  return (
    <Link
      className="w-1/2"
      href={"https://www.youtube.com/watch?v=ZVnjOPwW4ZA"}
    >
      <div className=" border-2 border-slate-950 flex flex-col justify-center items-center">
        <Image
          className="rounded-lg"
          width={300}
          height={300}
          alt="56"
          src={data.imageSrc}
        ></Image>
        <p className="w-11/12 text-center text-xs">{data.imageId}</p>
        <p className="font-bold text-3xl mt-2">{data.title}</p>
        <p className="m-2 font-semibold">{data.description}</p>
      </div>
    </Link>
  );
};
