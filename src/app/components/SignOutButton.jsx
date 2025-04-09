"use client";

import { logout } from "../../actions/auth";
import { TbLogout } from "react-icons/tb";
export default function SignOutButton() {
  return (
    <button
      className=" cursor-pointer border-blue-800 border-2 rounded-lg"
      onClick={() => logout()}
    >
      <TbLogout className="size-8 text-blue-800 p-1" />
    </button>
  );
}
