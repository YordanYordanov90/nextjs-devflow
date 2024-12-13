import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="background-light900_dark200 fixed z-50 flex w-full items-center justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 ">
      <Link className="flex items-center justify-center gap-1" href="/">
        <Image src="/images/site-logo.svg" alt="logo" width={23} height={23} />

        <p className=" h2-bold text-2xl font-bold text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex items-center justify-between gap-5">
        <div className="">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Theme />
        <div className="hidden max-md:block">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
