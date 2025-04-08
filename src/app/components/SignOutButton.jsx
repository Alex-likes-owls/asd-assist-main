"use client";

import { logout } from "../../actions/auth";

export default function SignOutButton() {
  return (
    <button
      className="m-5 text-sky-50 rounded-lg text-xl font-semibold w-32 h-14 cursor-pointer bg-sky-800 hover:bg-sky-600"
      onClick={() => logout()}
    >
      Sign Out
    </button>
  );
}
