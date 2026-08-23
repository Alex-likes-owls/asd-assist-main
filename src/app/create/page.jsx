"use client";

// import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Create() {
  const searchParams = useSearchParams();
  let type = searchParams.get("type");
  const toggle = useSelector((state) => state.counter.toggle);
  const [unoArr, setUnoArr] = useState([
    {
      type: type,
      title: "",
      // montitle: "",
      imgUrl: "",
      imgId: "",
      // monimgId: "",
      description: "",
      // mondesc: "",
    },
  ]);
  const [monoArr, setMonoArr] = useState([
    {
      type: type,
      montitle: "",
      imgUrl: "",
      monimgId: "",
      mondescription: "",
    },
  ]);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("en", JSON.stringify(unoArr));
    localStorage.setItem("mon", JSON.stringify(monoArr));
    router.push(`/${type}`);
  }
  return (
    <form
      className="text-blue-800 md:mt-20 flex flex-col md:items-center"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="md:w-1/2 flex  items-center justify-between py-3">
        <label className="text-3xl font-bold  " htmlFor="title">
          {"Enter Title:"}
        </label>
        <input
          onChange={(e) => {
            setUnoArr((prev) => {
              let target = { ...prev[0] };
              target.title = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
          }}
          required
          className="rounded-lg h-9 border border-sky-950"
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className="md:w-1/2 flex  items-center justify-between py-3">
        <label className="text-3xl font-bold  " htmlFor="title">
          {"Гарчиг:"}
        </label>
        <input
          onChange={(e) => {
            setMonoArr((prev) => {
              let target = { ...prev[0] };
              target.montitle = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
          }}
          required
          className="rounded-lg h-9 border border-sky-950"
          type="text"
          name="montitle"
          id="montitle"
        />
      </div>
      <div className="md:w-1/2  flex  items-center justify-between py-3">
        <label className=" font-bold text-3xl " htmlFor="url">
          {!toggle ? "Enter Image URL:" : "Зургийн URL:"}
        </label>
        <input
          onChange={(e) => {
            setUnoArr((prev) => {
              let target = { ...prev[0] };
              target.imgUrl = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
            setMonoArr((prev) => {
              let target = { ...prev[0] };
              target.imgUrl = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
          }}
          required
          className="rounded-lg h-9 border border-sky-950"
          type="text"
          name="url"
          id="url"
        />
      </div>
      <div className="md:w-1/2  flex  items-center justify-between py-3">
        <label className=" font-bold text-3xl " htmlFor="imgid">
          {"Enter Image ID:"}
        </label>
        <input
          onChange={(e) => {
            setUnoArr((prev) => {
              let target = { ...prev[0] };
              target.imgId = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
          }}
          required
          className="rounded-lg h-9 border border-sky-950"
          type="text"
          name="imgid"
          id="imgid"
        />
      </div>
      <div className="md:w-1/2  flex  items-center justify-between py-3">
        <label className=" font-bold text-3xl " htmlFor="monimgid">
          {"Зургийн ID:"}
        </label>
        <input
          onChange={(e) => {
            setMonoArr((prev) => {
              let target = { ...prev[0] };
              target.monimgId = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
          }}
          required
          className="rounded-lg h-9 border border-sky-950"
          type="text"
          name="monimgid"
          id="monimgid"
        />
      </div>
      <div className=" flex flex-col md:items-center w-full justify-center py-3">
        <label className=" font-bold text-3xl  mb-3" htmlFor="desc">
          {"Enter Description:"}
        </label>
        <textarea
          onChange={(e) => {
            setUnoArr((prev) => {
              let target = { ...prev[0] };
              target.description = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
          }}
          required
          className="rounded-xl md:w-1/2 w-full h-40 border border-sky-950"
          type="text"
          name="desc"
          id="desc"
        />
      </div>
      <div className=" flex flex-col md:items-center w-full justify-center py-3">
        <label className=" font-bold text-3xl  mb-3" htmlFor="mondesc">
          {"Тухай:"}
        </label>
        <textarea
          onChange={(e) => {
            setMonoArr((prev) => {
              let target = { ...prev[0] };
              target.mondescription = e.target.value;
              const newArr = [target];
              console.log(newArr);
              return newArr;
            });
          }}
          required
          className="rounded-xl md:w-1/2 w-full h-40 border border-sky-950"
          type="text"
          name="mondesc"
          id="mondesc"
        />
      </div>
      <div className="w-full flex md:justify-around justify-between mb-8">
        <Link
          href={"/admin"}
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
        >
          Proceed
        </button>
      </div>
    </form>
  );
}
