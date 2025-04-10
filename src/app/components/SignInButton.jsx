"use client";

import { login } from "../../actions/auth";
import { FaUser } from "react-icons/fa6";

export default function SignInButton() {
  return (
    <div
      onClick={() => login()}
      className="flex items-center cursor-pointer p-5"
    >
      <FaUser className="m-1 size-10 rounded-full text-blue-900 md:text-blue-100" />
      <p className="md:text-white text-blue-900 font-semibold ml-1">Sign in</p>
    </div>
  );
}
