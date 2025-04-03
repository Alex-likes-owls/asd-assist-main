import Image from "next/image";
import { auth } from "../../../auth";
import SignOutButton from "../components/SignOutButton";
import ProfileText from "../components/ProfileText";

export default async function Profile() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    return (
      <div className=" text-sky-950 flex flex-col justify-evenly items-center h-screen">
        <ProfileText />
        <div className="flex flex-col items-center">
          <Image
            src={session.user.image}
            width={150}
            height={150}
            alt={"Avatar"}
            className="rounded-full"
          ></Image>
          <p className="text-4xl font-bold m-4">{session.user.name}</p>
          <p className="font-semibold text-lg ">{session.user.email}</p>
        </div>
        <SignOutButton />
      </div>
    );
  }
  return <div className=" text-sky-950">Signing in</div>;
}
