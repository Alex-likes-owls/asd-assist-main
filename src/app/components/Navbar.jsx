import Link from "next/link";

import Toggle from "./Toggle";

export default async function Navbar() {
  // const [toggle, setToggle] = useState(false);

  return (
    <div className="text-white bg-sky-800 w-screen flex justify-around items-center fixed bottom-0 z-10">
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
      <Toggle />
    </div>
  );
}
