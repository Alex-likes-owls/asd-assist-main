import Image from "next/image";
import Link from "next/link";
export const Card = ({ data }) => {
  console.log("data:", data);
  return (
    <div className="flex flex-col justify-center items-center w-5/12 text-center">
      <p className="text-3xl font-bold p-3">{data.title}</p>
      <Image
        priority
        className="rounded-lg"
        src={data.imageSrc}
        width={500}
        height={400}
        alt="nothing"
      ></Image>
      <p className="text-xs text-stone-800">{data.imageId}</p>
      <p className="p-2">{data.description}</p>
      <Link
        className="font-medium text-lg"
        href={"https://www.youtube.com/watch?v=ZVnjOPwW4ZA"}
      >
        Read More
      </Link>
    </div>
  );
};
