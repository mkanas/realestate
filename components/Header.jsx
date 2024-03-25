"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobile, setMobile] = useState(false);

  const toggleNavbar = () => setMobile(!mobile);
  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="container flex items-center justify-between rounded-[8px] bg-black py-3 ">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            className="mr-2"
            src="/logo.png"
            width={60}
            height={30}
            alt="logo"
          />
          <span className="text-sm tracking-tight text-white">Real Estate</span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-sm text-white gap-3  lg:flex">
          <Button variant="outline" className="mr-2 rounded-[8px] bg-black">
            Sign In
          </Button>
          <Button variant="outline" className="mr-2 rounded-[8px] bg-slate-800">
            Sign Up
          </Button>
        </div>
        <div className="flex-col justify-end text-white md:flex lg:hidden">
          <button onClick={toggleNavbar}>{mobile ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div>
        {mobile && (
          <div className="rounded-md bg-black lg:hidden">
            <ul className="flex flex-col items-center">
              {NAV_LINKS.map((item, index) => (
                <li key={index} className="py-4 ">
                  <Link
                    className="text-sm  text-white hover:text-neutral-500"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center pb-8 text-white lg:hidden">
              <Button variant="outline" className="mr-2 rounded-[8px] bg-black">
                Sign In
              </Button>
              <Button
                variant="outline"
                className="mr-2 rounded-[8px] bg-slate-800"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
