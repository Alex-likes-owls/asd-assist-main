"use client";

import { login } from "../../actions/auth";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function SignInButton() {
  const toggle = useSelector((state) => state.counter.toggle);
  return (
    <div
      onClick={() => login()}
      className="flex items-center cursor-pointer p-5"
    >
      <FaUser className="m-1 size-8 rounded-full text-blue-900 md:text-blue-100" />
      <p className="md:text-white text-blue-900 font-semibold ml-1">
        {toggle ? "Нэвтрэх" : "Sign in"}
      </p>
    </div>
  );
}
