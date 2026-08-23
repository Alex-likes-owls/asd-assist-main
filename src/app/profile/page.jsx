import Image from "next/image";
import { auth } from "../../../auth";
import ProfileText from "../components/ProfileText";
import SignOutButton from "../components/SignOutButton";
import RecordTable from "./table";
import Link from "next/link";
// Link

export default async function Profile() {
  const session = await auth();
  let button;
  if (session?.user) {
    if (session.user.role === "ADMIN") {
      button = (
        <Link
          className="bg-blue-800 rounded-2xl text-white px-5 py-3 font-bold"
          href={"/admin"}
        >
          Admin
        </Link>
      );
    }
    return (
      <div className=" text-blue-800 flex flex-col justify-evenly items-center md:mt-10">
        <ProfileText />
        <div className="md:flex justify-around items-center w-full mb-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={session.user.image}
              width={100}
              height={100}
              alt={"Avatar"}
              className="rounded-full"
            ></Image>
            <div className="my-5">
              <p className="text-4xl font-bold">{session.user.name}</p>
              <p className="font-semibold text-lg ">{session.user.email}</p>
            </div>
            {button}
          </div>
          <RecordTable />
        </div>
        <SignOutButton />
      </div>
    );
  }
  return <div className=" text-blue-950">Signing in</div>;
}
