import Image from "next/image";

export const Inventory = ({ data }) => {
  return (
    <div className="group shadow-lg flex flex-col min-h-[296px] relative overflow-hidden justify-center items-start p-5 md:w-[33vw] bg-white mb-5 hover:bg-indigo-100 transition-all duration-500 rounded-3xl  h-fit">
      <div className="w-44 h-44 bg-blue-50 absolute top-[80%] rotate-45 group-hover:rotate-[225deg] transition-all duration-500"></div>
      <p className="font-bold text-start text-3xl mt-2 text-sky-950">
        {data.title}
      </p>
      <p className="text-start text-blue-800/70 text-sm group-hover:hidden max-w-[75%]">
        {data.description.slice(0, 100)}...
      </p>
      <p className="text-start text-sm hidden group-hover:block  ">
        {data.description}
      </p>
      <Image
        className="mix-blend-multiply max-h-[10%] self-end -mt-12  group-hover: translate-y-3"
        src={data.imageSrc}
        width={200}
        height={200}
        alt="book"
      ></Image>
    </div>
  );
  11;
};
