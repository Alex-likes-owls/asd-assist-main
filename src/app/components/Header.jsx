import Link from "next/link";
import SignInButton from "./SignInButton";
import { auth } from "../../../auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";
import Toggle from "./Toggle";

export default async function Header() {
  const session = await auth();
  let button;
  if (session?.user) {
    button = (
      <div className="flex justify-between items-center w-full">
        <Link className="flex" href={"/profile"}>
          <Image
            src={session.user.image}
            className="rounded-full border-blue-200 border-2 p-1 mr-2"
            alt="bob"
            width={60}
            height={60}
          ></Image>
          <div className="flex flex-col justify-center">
            <p className="text-blue-800 font-semibold text-lg">
              {session.user.name}
            </p>
            <p className="text-gray-600 font-semibold text-sm">
              Ready to start
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <Toggle />
          <SignOutButton />
        </div>
      </div>
    );
  } else {
    button = (
      <div>
        <SignInButton />
        <Toggle />
      </div>
    );
  }
  return (
    <div className="text-white md:hidden w-full flex justify-between items-center md:mt-14 top-0 z-10">
      <div className="flex justify-around items-center w-full mx-5 pt-5">
        {button}
      </div>
    </div>
  );
}
