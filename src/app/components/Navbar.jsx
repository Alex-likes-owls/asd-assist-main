import Link from "next/link";
import pagesData, { mongpagesData } from "../lib/data";
import Toggle from "./Toggle";
import { FaGithub } from "react-icons/fa";

import SignInButton from "./SignInButton";
import { auth } from "../../../auth";
import Image from "next/image";

export default async function Navbar() {
  // const [toggle, setToggle] = useState(false);
  const session = await auth();
  let button;
  if (session?.user) {
    button = (
      <Link href={"/profile"}>
        <Image
          src={session.user.image}
          className="rounded-full"
          alt="bob"
          width={28}
          height={28}
        ></Image>
      </Link>
    );
  } else {
    button = <SignInButton />;
  }
  return (
    <div className="text-white bg-sky-800 w-full flex justify-around items-center fixed top-0 z-10">
      <div className="flex justify-center items-center">
        <Link className="m-4 text-lg" href={"/"}>
          Home
        </Link>
        <Link className="m-4 text-lg" href={"/" + "#About"}>
          About
        </Link>
        <Link className="m-4 text-lg" href={"/blogtest?t=articles"}>
          Articles
        </Link>
        <Link className="m-4 text-lg" href={"/blogtest?t=tests"}>
          Tests
        </Link>
      </div>
      <div className="flex justify-around items-center w-1/12  ">
        <Toggle />

        {button}
      </div>
    </div>
  );
}
