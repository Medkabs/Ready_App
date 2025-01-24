"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Hamburger menu (mobile) */}
          <button
            className="block md:hidden text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation links - Always visible on larger screens */}
          <nav className="hidden md:block flex-1">
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
              <li>
                <Link href="#ContactUs" className="text-white hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation links (burger menu) */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-14 left-0 w-full bg-gray-900/90`}
          >
            <ul className="flex flex-col justify-center items-center gap-6 py-6">
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
