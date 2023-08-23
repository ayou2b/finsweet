"use client";
import React, { Fragment } from "react";
import Link from "next/link";

import {
  UilFacebook,
  UilInstagram,
  UilTwitterAlt,
  UilLinkedin,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <Fragment>
      <section className="flex items-center relative flex-col gap-14">
        <div className="flex flex-col items-center px-12 z-40 relative gap-5 w-full max-w-lg text-center">
          <h1 className="text-[30px] font-bold text-[#1D2130]">
            Are you ready to grow your business with us?
          </h1>
          <p className="leading-7 text-[#1D2130]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <Link
            href="/pricing"
            className="px-8 py-3 bg-[#1D2130] rounded-lg hover:scale-95 duration-200 text-white"
          >
            View Pricing
          </Link>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[100px] hidden md:block  opacity-20 z-0 absolute top-48 left-52  max-h-[300px] max-w-[600px] w-full h-full"></div>

        <footer className="w-full bg-[#1D2130] z-40 relative py-14  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center md:flex-row md:items-start w-full md:justify-between gap-10">
            <ul className="flex flex-col items-center gap-4 md:items-start">
              <li className="text-[16px] font-semibold text-white">Company</li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/about">About Us</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Why Choose us</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/pricing">Pricing</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Testimonial</Link>
              </li>
            </ul>

            <ul className="flex flex-col items-center gap-4 md:items-start">
              <li className="text-[16px] font-semibold text-white">
                Resources
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Privacy Policy</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Terms and Condition</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/blog">Blog</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            <ul className="flex flex-col items-center gap-4 md:items-start">
              <li className="text-[16px] font-semibold text-white">Product</li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Project managment</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Time tracker</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Time schedule</Link>
              </li>

              <li className="text-[#888888] hover:text-white cursor-pointer">
                <Link href="/">Lead generate</Link>
              </li>
            </ul>

            <div className="flex flex-col items-center md:items-start gap-7">
              <h1 className="text-[20px] font-bold text-white">
                <Link href="/">FINSWEET</Link>
              </h1>

              <form className="flex flex-col items-center md:items-start gap-4">
                <h3 className="font-semibold text-white">
                  Subscribe to our Newsletter
                </h3>
                <div className="flex transition-all flex-col items-center md:items-start gap-4 lg:flex-row lg:gap-0">
                  <input
                    placeholder="Enter your Email"
                    className="px-6 py-3 bg-[#2B2E3C] outline-none lg:rounded-r-none text-white rounded-lg placeholder:text-center lg:placeholder:text-start"
                  ></input>
                  <button className="px-8 hover:bg-[#503AE7] hover:text-white py-3 rounded-lg lg:rounded-l-none bg-white text-black">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full lg:gap-8 lg:flex-row-reverse">
            <div className="hidden lg:block h-[3px] bg-[#888888] w-full"></div>
            <div className="text-[#888888] flex items-center gap-4">
              <UilFacebook className="hover:text-white cursor-pointer"></UilFacebook>
              <UilInstagram className="hover:text-white cursor-pointer"></UilInstagram>
              <UilTwitterAlt className="hover:text-white cursor-pointer"></UilTwitterAlt>
              <UilLinkedin className="hover:text-white cursor-pointer"></UilLinkedin>
            </div>

            <p className="text-[#888888] whitespace-nowrap">
              © Copyright Finsweet 2022
            </p>
            <div className="hidden lg:block h-[3px] bg-[#888888] w-full"></div>
          </div>
        </footer>
      </section>
    </Fragment>
  );
}

export default Footer;
