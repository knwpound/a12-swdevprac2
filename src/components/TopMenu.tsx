import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div
      className="h-[50px] w-full bg-orange-100 fixed z-[30] 
        border-gray-300 flex flex-row 
        justify-between items-center gap-2
        top-0 px-3"
    >
      <div className="flex flex-row gap-3">
        {session ? (
          <Link href="/api/auth/signout">
            <div
              className="flex items-center h-full px-2 text-sm
          bg-white p-2 rounded-md shadow-md hover:bg-slate-100 active:bg-slate-300 
          transition duration-250"
            >
              Sign-Out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href={"api/auth/signin"}>
            <div
              className="flex items-center h-full px-2 text-sm
          bg-white p-2 rounded-md shadow-md hover:bg-slate-100 active:bg-slate-300 
          transition duration-250"
            >
              Sign-In
            </div>
          </Link>
        )}
        <TopMenuItem title="My Booking" pageRef="/mybooking" />
      </div>

      <div className="flex flex-row gap-2 items-center justify-center">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <Image
          src={"/img/logo.jpg"}
          className="h-10 w-auto"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </div>
    </div>
  );
}
