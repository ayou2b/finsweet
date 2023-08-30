"use client";
import { Fragment, useState, useEffect } from "react";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import hero_image from "/./public/images/landing_page/Dashboard_image.png";
import icon_1 from "/./public/images/landing_page/Icon_1.svg";
import icon_2 from "/./public/images/landing_page/Icon_2.svg";
import icon_3 from "/./public/images/landing_page/Icon_3.svg";
import arrow from "/./public/images/landing_page/Arrow.png";
import image_1 from "/./public/images/landing_page/Image.png";

import logo_1 from "/./public/images/landing_page/Logo_1.png";
import logo_2 from "/./public/images/landing_page/Logo_2.png";
import logo_3 from "/./public/images/landing_page/Logo_3.png";
import logo_4 from "/./public/images/landing_page/Logo_4.png";
import logo_5 from "/./public/images/landing_page/Logo_5.png";

import icon_4 from "/./public/images/landing_page/Icon_4.svg";
import icon_5 from "/./public/images/landing_page/Icon_5.svg";
import icon_6 from "/./public/images/landing_page/Icon_6.svg";

import icon_7 from "/./public/images/landing_page/Icon_7.svg";
import icon_8 from "/./public/images/landing_page/Icon_8.svg";
import icon_9 from "/./public/images/landing_page/Icon_9.svg";

import profile_1 from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import profile_2 from "/./public/images/landing_page/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import profile_3 from "/./public/images/landing_page/podpros-GEnCnYhA1J4-unsplash.jpg";

import {
  UilFacebook,
  UilInstagram,
  UilTwitterAlt,
  UilLinkedin,
} from "@iconscout/react-unicons";

export default function Home() {
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

      <section className="px-14 sm:px-16 transition-all md:px-20 lg:px-24 xl:px-28 mb-20 mt-24 text-center  w-full flex items-center justify-center ">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-10 relative">
          <h1 className="text-[30px] font-bold text-[#1D2130] max-w-xl relative z-30">
            The Best Software to Grow your Sales and Services
          </h1>
          <p className="leading-7 text-[#1D2130] max-w-xl relative z-30">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <form className="bg-white relative z-30 py-5 px-6  max-w-[500px] w-full rounded-3xl flex flex-col md:flex-row md:gap-0 md:justify-between md:p-0 md:pl-10 md:pr-3 md:py-3  items-center gap-4">
            <input
              placeholder="Enter your Email"
              className="outline-none rounded-lg md:rounded-none w-full md:w-fit placeholder:text-center md:placeholder:text-start border-[#c0c0c0] border-[1px] px-10 py-3 md:p-0 md:border-none"
            ></input>
            <button className="px-8 py-3 hover:scale-95 duration-200 rounded-3xl w-fit  font-semibold bg-[#1D2130] text-white">
              Get Free trial
            </button>
          </form>

          <Image
            src={hero_image}
            alt=""
            className="max-w-[800px] w-full object-cover relative z-30"
          ></Image>
          <div className="bg-gradient-to-r hidden md:block  from-cyan-500 to-blue-500 blur-[100px] opacity-20 z-0 absolute top-48  max-h-[600px] max-w-[600px] w-full h-full"></div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex items-center justify-center w-full">
        <div className="w-full 2xl:max-w-[1300px]">
          <div className="text-center flex flex-col items-center gap-3 mb-10">
            <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              High-quality
            </span>
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              We have the Best Solution
              <br /> for your Business
            </h2>
          </div>

          <div className="flex bg-[#E0E4FC] p-12 rounded-xl w-full flex-col items-center gap-10 lg:gap-14 text-center lg:text-start lg:flex-row lg:justify-between lg:items-start">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <Image src={icon_1} width={35} objectFit="cover" alt=""></Image>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold text-[#1D2130]">
                  High security to protect from piracy
                </h3>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <Image src={icon_2} width={35} objectFit="cover" alt=""></Image>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold text-[#1D2130]">
                  Premium quality performance
                </h3>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <Image src={icon_3} width={35} objectFit="cover" alt=""></Image>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold text-[#1D2130]">
                  Full time customer support - 24/7
                </h3>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20  w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:text-start text-center lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-md w-full">
            <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Why should you work with us?
            </span>
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              To upscale your business to the next level
            </h2>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-start max-w-md">
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="p-4 rounded-full flex flex-col items-center justify-center bg-[#FFACAC]">
                <Image src={arrow} alt="" width={15}></Image>
              </div>

              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="p-4 rounded-full flex flex-col items-center justify-center bg-[#FFACAC]">
                <Image src={arrow} alt="" width={15}></Image>
              </div>

              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="p-4 rounded-full flex flex-col items-center justify-center bg-[#FFACAC]">
                <Image src={arrow} alt="" width={15}></Image>
              </div>

              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center transition-all bg-gradient-to-r from-cyan-500/20 to-blue-500/10  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 py-20 text-center lg:text-start">
        <div className="flex flex-col w-full 2xl:max-w-[1300px] items-center gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-5 lg:items-start max-w-lg">
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              More impressions, more conversions
            </h2>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
            <button className="px-8 hover:scale-95 duration-200 py-3 rounded-xl font-semibold bg-[#1D2130] text-white">
              Get Free trial
            </button>
          </div>

          <Image
            src={image_1}
            alt=""
            className="w-full object-cover max-w-[400px]"
          ></Image>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20  w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] gap-10 flex flex-col items-center lg:flex md:flex-row md:items-center md:justify-between">
          <Image src={logo_1} alt="" width={120}></Image>
          <Image src={logo_2} alt="" width={120}></Image>
          <Image src={logo_3} alt="" width={120}></Image>
          <Image src={logo_4} alt="" width={120}></Image>
          <Image src={logo_5} alt="" width={120}></Image>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px]  gap-10 flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
          <div className="max-w-lg flex flex-col items-center gap-5 lg:items-start">
            <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Discover More
            </span>
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              Analyze your sales and marketing leads
            </h2>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>

          <div className="flex items-center flex-col gap-6 lg:items-start max-w-lg">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="bg-[#F4F5F7] p-4 rounded-full flex items-center justify-center">
                <Image src={icon_4} width={20} alt=""></Image>
              </div>
              <div>
                <h4 className="text-[18px] text-[#1D2130] font-semibold">
                  Sales Tracking
                </h4>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="bg-[#F4F5F7] p-4 rounded-full flex items-center justify-center">
                <Image src={icon_5} width={20} alt=""></Image>
              </div>
              <div>
                <h4 className="text-[18px] text-[#1D2130] font-semibold">
                  Project Management
                </h4>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="bg-[#F4F5F7] p-4 rounded-full flex items-center justify-center">
                <Image src={icon_6} width={20} alt=""></Image>
              </div>
              <div>
                <h4 className="text-[18px] text-[#1D2130] font-semibold">
                  Activity Report
                </h4>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10">
          <h2 className="text-[25px] font-bold  text-[#1D2130]">Features</h2>
          <div className="flex bg-[rgb(215,152,225,15%)] p-12 rounded-xl flex-col items-center gap-10 lg:gap-14 text-center lg:text-start lg:flex-row lg:justify-between lg:items-start">
            <div className="flex flex-col items-center  lg:items-start gap-3">
              <Image src={icon_7} width={35} objectFit="cover" alt=""></Image>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold text-[#1D2130]">
                  Advanced 256-bit encryption
                </h3>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center h-full lg:items-start gap-3">
              <Image src={icon_8} width={35} objectFit="cover" alt=""></Image>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold text-[#1D2130]">
                  Simple collaboration
                  <br /> tools
                </h3>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <Image src={icon_9} width={35} objectFit="cover" alt=""></Image>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold text-[#1D2130]">
                  Customizable AI
                  <br /> features
                </h3>
                <p className="leading-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10">
          <h2 className="text-[25px] font-bold text-[#1D2130]">
            The stunning results our
            <br />
            customers have experienced
          </h2>
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between w-full">
            <div className="flex flex-col items-center gap-5 p-5 rounded-xl border-[2px] border-[rgb(97,153,237,26%)]">
              <p className="leading-7 text-[#1D2130] font-semibold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="flex items-center flex-col gap-3">
                <Image
                  src={profile_1}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-semibold">Ron Wood</p>
                  <span>CEO</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 p-5 rounded-xl border-[2px] border-[rgb(97,153,237,26%)]">
              <p className="leading-7 text-[#1D2130] font-semibold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="flex items-center flex-col gap-3">
                <Image
                  src={profile_2}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-semibold">Mark Mason</p>
                  <span>Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 p-5 rounded-xl border-[2px] border-[rgb(97,153,237,26%)]">
              <p className="leading-7 text-[#1D2130] font-semibold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="flex items-center flex-col gap-3">
                <Image
                  src={profile_3}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-semibold">Sam Preston</p>
                  <span>CTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center relative flex-col gap-14">
        <div className="flex flex-col items-center z-40 relative gap-5 w-full px-12 max-w-lg text-center">
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

        <div className="bg-gradient-to-r hidden md:block from-cyan-500 to-blue-500 blur-[100px] opacity-20 z-0 absolute  left-20 top-20  max-h-[300px] max-w-[600px] w-full h-full"></div>

        <footer className="w-full bg-[#1D2130] z-40  py-14  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 flex items-center justify-center">
          <div className="w-full 2xl:max-w-[1300px] relative flex flex-col items-center gap-10">
            <div className="flex flex-col items-center md:flex-row md:items-start w-full md:justify-between gap-10">
              <ul className="flex flex-col items-center gap-4 md:items-start">
                <li className="text-[16px] font-semibold text-white">
                  Company
                </li>

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
                <li className="text-[16px] font-semibold text-white">
                  Product
                </li>

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
          </div>
        </footer>
      </section>
    </Fragment>
  );
}
