import Image from "next/image";
import Link from "next/link";
export const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center w-6/12 text-center">
      <p className="text-3xl font-bold p-3">Myths Debunked</p>
      <Image
        className="rounded-lg"
        src={"/Dontron.jpg"}
        width={500}
        height={400}
        alt="nothing"
      ></Image>
      <p className="text-xs text-stone-800">
        (Donatello, a confirmed autistic character, from ROTTMNT)
      </p>
      <p className="p-2">
        There are many misconceptions about ASD, here's 10 of the most common
        ones.
      </p>
      <Link
        className="font-medium text-lg"
        href={"https://www.youtube.com/watch?v=ZVnjOPwW4ZA"}
      >
        Read More
      </Link>
    </div>
  );
};
