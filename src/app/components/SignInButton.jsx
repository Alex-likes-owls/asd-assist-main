"use client";

import { login } from "../../actions/auth";
import { FaGithub } from "react-icons/fa";

export default function SignInButton() {
  return (
    <div
      onClick={() => login()}
      className="flex items-center cursor-pointer p-5"
    >
      <FaGithub className="m-1 size-14 rounded-full bg-blue-950" />
      <p className="text-blue-950 font-semibold">Sign in</p>
    </div>
  );
}
