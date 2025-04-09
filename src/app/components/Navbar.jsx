import Link from "next/link";
import Image from "next/image";
import Toggle from "./Toggle";
import Header from "./Header";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import { auth } from "../../../auth";

export default async function Navbar() {
  // const [toggle, setToggle] = useState(false);
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
            width={45}
            height={45}
          ></Image>
        </Link>
      </div>
    );
  } else {
    button = <SignInButton />;
  }
  return (
    <div className="text-white bg-blue-900 w-screen flex justify-around items-center h-14 fixed md:top-0 z-10 bottom-0">
      <div className="md:w-1/3 md:flex md:justify-around">
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
      <div className="md:w-1/5 md:flex md:justify-around md:items-center">
        <Toggle />
        <div className="md:block hidden">{button}</div>
      </div>
    </div>
  );
}
