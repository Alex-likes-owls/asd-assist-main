import Link from "next/link";
import Image from "next/image";
import Toggle from "./Toggle";
import Header from "./Header";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import { auth } from "../../../auth";
import { GoHome } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbNews } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";

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
    <div className="text-white bg-blue-900 md:w-screen flex justify-around items-center md:h-16 h-14 fixed md:top-0 z-50 md:py-5 bottom-5 w-[90%] left-[5%] md:left-0 md:rounded-none rounded-3xl">
      <div className="md:w-1/3 flex items-center gap-3 md:justify-around">
        <Link className="m-4 text-lg" href={"/"}>
          <GoHome className="size-7" />
        </Link>
        <Link className="m-4 text-lg" href={"/" + "#About"}>
          <IoInformationCircleOutline className="size-8" />
        </Link>
        <Link className="m-4 text-lg" href={"/blogtest?t=articles"}>
          <TbNews className="size-7" />
        </Link>
        <Link className="m-4 text-lg" href={"/blogtest?t=tests"}>
          <GoChecklist className="size-7" />
        </Link>
      </div>
      <div className="md:w-1/5 hidden md:flex md:justify-center gap-7 md:items-center">
        <Toggle />
        <div className="md:block hidden">{button}</div>
      </div>
    </div>
  );
}
