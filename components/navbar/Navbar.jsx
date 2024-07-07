import React from "react";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialLinks from "../socialLinks/SocialLinks";
import Image from "next/image";
import NavigationLinks from "../navigationLinks/NavigationLinks";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex-between w-full py-1">
        <div className=" ">
          <h1 className=" h3-bold ">Eyed.write()</h1>
        </div>

        <nav className="hidden md:flex ">
          <NavigationLinks />
          <div className="md:hidden">
            <SocialLinks />
          </div>
        </nav>

        <div className="flex gap-5 md:gap-0 min-w-fit">
          <Sheet>
            <div className=" flex gap-5">
              <ThemeToggle />
              <div>
                <SocialLinks />
              </div>
            </div>

            <SheetTrigger>
              <Image
                src="/assets/menu.svg"
                alt="side bar toggle"
                width={24}
                height={24}
                className=" md:hidden dark:invert"
              />
            </SheetTrigger>

            <SheetContent>
              <h1 className=" dark:text-text-dark">Eyed.write()</h1>
              <div className="h-full pb-6 flex flex-col justify-between dark:text-text-dark">
                <NavigationLinks />
                <SocialLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
