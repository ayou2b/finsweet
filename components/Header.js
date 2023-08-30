"use client";
import { Fragment, useState, useEffect } from "react";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll	";
    }
  }, [mobileMenu]);

  return (
    <Fragment>
      <header className=" h-[10vh] w-full px-12 py-10 sm:px-14 md:px-16 lg:px-20 xl:px-24 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex items-center justify-between">
          <h1 className="text-[20px] font-bold text-[#503AE7]">
            <Link href="/">FINSWEET</Link>
          </h1>

          <ul className="items-center hidden lg:flex gap-12">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-[#503AE7]" : "text-black"
                } hover:text-[#503AE7]`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/product"
                className={`${
                  pathname === "/product" ? "text-[#503AE7]" : "text-black"
                } hover:text-[#503AE7]`}
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className={`${
                  pathname === "/pricing" ? "text-[#503AE7]" : "text-black"
                } hover:text-[#503AE7]`}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-[#503AE7]" : "text-black"
                } hover:text-[#503AE7]`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog" ? "text-[#503AE7]" : "text-black"
                } hover:text-[#503AE7]`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-[#503AE7]" : "text-black"
                } hover:text-[#503AE7]`}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className={`px-6 py-3 rounded-lg text-white text-[14px] bg-[#1D2130] hover:bg-[#503AE7] hover:text-white`}
              >
                Free trial
              </Link>
            </li>
          </ul>

          <UilBars
            onClick={() => {
              setMobileMenu(true);
            }}
            className="block lg:hidden"
          ></UilBars>

          <div
            className={`${
              mobileMenu === true ? "test block" : "hidden"
            } w-full h-[100vh] absolute top-0 left-0  bg-white p-14 z-50`}
          >
            <ul className="flex flex-col items-start gap-14">
              <li
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-[#503AE7]" : "text-black"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <Link
                  href="/product"
                  className={`${
                    pathname === "/product" ? "text-[#503AE7]" : "text-black"
                  }`}
                >
                  Product
                </Link>
              </li>

              <li
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <Link
                  href="/pricing"
                  className={`${
                    pathname === "/pricing" ? "text-[#503AE7]" : "text-black"
                  }`}
                >
                  Pricing
                </Link>
              </li>

              <li
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about" ? "text-[#503AE7]" : "text-black"
                  }`}
                >
                  About Us
                </Link>
              </li>

              <li
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <Link
                  href="/blog"
                  className={`${
                    pathname === "/blog" ? "text-[#503AE7]" : "text-black"
                  }`}
                >
                  Blog
                </Link>
              </li>

              <li
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "text-[#503AE7]" : "text-black"
                  }`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`px-6 py-3 rounded-lg text-white text-[14px] bg-[#1D2130] hover:bg-[#503AE7] hover:text-white`}
                >
                  Free trial
                </Link>
              </li>
            </ul>

            <UilTimes
              onClick={() => {
                setMobileMenu(false);
              }}
              className={`right-10 top-10 absolute`}
            ></UilTimes>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
