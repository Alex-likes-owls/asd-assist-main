export const Inventory = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-1/3 bg-sky-100 hover:bg-blue-100 transition-all duration-400 rounded m-10 h-fit">
      <p className="font-bold text-3xl mt-2">{data.title}</p>
      <p className="m-5 text-justify">{data.description}</p>
    </div>
  );
  11;
};
