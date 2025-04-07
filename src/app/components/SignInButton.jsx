"use client";

import { auth } from "../../../auth";
import { login } from "../../actions/auth";
import { FaGithub } from "react-icons/fa";

export default function SignInButton() {
  //   const session = await auth();

  return (
    <div onClick={() => login()} className="flex items-center cursor-pointer">
      <FaGithub className="m-1 size-6" />
    </div>
  );
}
