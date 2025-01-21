"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Centered Navigation links */}
          <nav className="flex-1">
            <ul className="flex justify-center items-center gap-6">
              <li>
                <Link href="#About" className="text-white hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#Services" className="text-white hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#OurMethod" className="text-white hover:text-gray-300">
                  Our Method
                </Link>
              </li>
              <li>
                <Link href="#About" className="text-white hover:text-gray-300">
                  FAQs
                </Link>
              </li>
              {/* <li>
                <Link href="/ai" className="text-white hover:text-gray-300">
                  AI
                </Link>
              </li> */}
              <li>
                <Link href="#ContactUs" className="text-white hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
