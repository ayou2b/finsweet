"use client";
import React, { Fragment } from "react";
import Image from "next/image";

import hero_image from "/./public/images/product_page/Image.png";

import logo_1 from "/./public/images/landing_page/Logo_1.png";
import logo_2 from "/./public/images/landing_page/Logo_2.png";
import logo_3 from "/./public/images/landing_page/Logo_3.png";
import logo_4 from "/./public/images/landing_page/Logo_4.png";
import logo_5 from "/./public/images/landing_page/Logo_5.png";

import icon_1 from "/./public/images/product_page/Icon.svg";
import icon_2 from "/./public/images/product_page/Icon_1.svg";
import icon_3 from "/./public/images/product_page/Icon_2.svg";
import icon_4 from "/./public/images/product_page/Icon_3.svg";
import icon_5 from "/./public/images/product_page/Icon_4.svg";
import icon_6 from "/./public/images/product_page/Icon_5.svg";

import image_1 from "/./public/images/product_page/Image_1.png";
import image_2 from "/./public/images/product_page/Image_2.png";
import image_3 from "/./public/images/product_page/Image_3.png";
import image_4 from "/./public/images/product_page/Image_4.png";

import icon_7 from "/./public/images/landing_page/Icon_7.svg";
import icon_8 from "/./public/images/landing_page/Icon_8.svg";
import icon_9 from "/./public/images/landing_page/Icon_9.svg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 h-[90vh] relative transition-all sm:px-16 md:px-20 lg:px-24 xl:px-28  py-14 w-full text-center lg:text-start flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center relative z-40 lg:items-start gap-6 max-w-lg">
          <h1 className="text-[30px] font-bold text-[#1D2130]">
            Grow your Sales and
            <br />
            Services
          </h1>
          <p className="leading-7 text-[#1D2130]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col items-center lg:flex-row gap-4">
            <button className="px-8 py-3 rounded-lg hover:scale-95 duration-200 text-white bg-[#1D2130]">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg bg-transparent hover:scale-95 duration-200 text-[#1D2130] border-[#E0E4FC] border-[1px]">
              Contact us
            </button>
          </div>
        </div>

        <Image
          src={hero_image}
          alt=""
          className="max-w-[500px] w-full object-cover relative z-40"
        ></Image>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[100px] opacity-20 z-0 absolute top-0 right-0  max-h-[600px] max-w-[600px] w-full h-full"></div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex flex-col items-center w-full gap-10  lg:flex md:flex-row md:items-center md:justify-between">
        <Image src={logo_1} alt="" width={120}></Image>
        <Image src={logo_2} alt="" width={120}></Image>
        <Image src={logo_3} alt="" width={120}></Image>
        <Image src={logo_4} alt="" width={120}></Image>
        <Image src={logo_5} alt="" width={120}></Image>
      </section>

      <section className="bg-gradient-to-r from-cyan-500/25 to-blue-500/16 pt-20 mb-20">
        <div className="w-full flex items-center justify-center text-center">
          <h2 className="text-[25px] font-semibold  text-[#1D2130] mb-10">
            Get the best out of your company
            <br /> with our service
          </h2>
        </div>

        <div className="flex flex-col  text-center lg:text-start  items-center py-12 px-12 gap-10 w-full lg:w-[80%] lg:rounded-tr-[129px] md:grid md:grid-cols-2 lg:grid-cols-3 bg-[rgb(255,255,255,69%)]">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Image src={icon_1} width={40} alt=""></Image>
            <h3 className="text-[18px] font-semibold text-[#1D2130]">
              Security and privacy
            </h3>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <Image src={icon_2} width={40} alt=""></Image>
            <h3 className="text-[18px] font-semibold text-[#1D2130]">
              Built-in AI features
            </h3>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <Image src={icon_3} width={40} alt=""></Image>
            <h3 className="text-[18px] font-semibold text-[#1D2130]">
              Collaborate with others
            </h3>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <Image src={icon_4} width={40} alt=""></Image>
            <h3 className="text-[18px] font-semibold text-[#1D2130]">
              Real time sync
            </h3>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <Image src={icon_5} width={40} alt=""></Image>
            <h3 className="text-[18px] font-semibold text-[#1D2130]">
              Built-in AI features
            </h3>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <Image src={icon_6} width={40} alt=""></Image>
            <h3 className="text-[18px] font-semibold text-[#1D2130]">
              Easy notes organization
            </h3>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>
        </div>
      </section>

      <section className="px-14 relative sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-12 lg:justify-between lg:flex-row w-full">
        <div className="flex flex-col relative z-40 items-center gap-4 lg:items-start max-w-lg">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Marketing insights
          </span>
          <h2 className="text-[25px] font-semibold  text-[#1D2130]">
            Data-driven client <br /> feedback
          </h2>
          <p className="leading-7 text-[#1D2130]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>

        <Image
          src={image_1}
          alt=""
          className="max-w-[350px] relative z-40 object-cover w-full"
        ></Image>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[120px] opacity-20 z-0 absolute left-[-120px] bottom-[-150px] rounded-full max-h-[600px] max-w-[600px] w-full h-full"></div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-12 lg:justify-between lg:flex-row-reverse w-full">
        <div className="flex flex-col items-center gap-4 lg:items-start max-w-lg">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Time tracker
          </span>
          <h2 className="text-[25px] font-semibold  text-[#1D2130]">
            Track your project
            <br /> performance
          </h2>
          <p className="leading-7 text-[#1D2130]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>

        <Image
          src={image_2}
          alt=""
          className="max-w-[350px] object-cover w-full"
        ></Image>
      </section>

      <section className="px-14 relative sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-12 lg:justify-between lg:flex-row w-full">
        <div className="flex relative z-40 flex-col items-center gap-4 lg:items-start max-w-lg">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Lead Generation
          </span>
          <h2 className="text-[25px] font-semibold  text-[#1D2130]">
            More leads that
            <br /> convert
          </h2>
          <p className="leading-7 text-[#1D2130]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>

        <Image
          src={image_3}
          alt=""
          className="max-w-[350px] relative z-40 object-cover w-full"
        ></Image>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[120px] opacity-20 z-0 absolute right-[120px] bottom-[-120px] rounded-full max-h-[600px] max-w-[600px] w-full h-full"></div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-12 lg:justify-between lg:flex-row-reverse w-full">
        <div className="flex flex-col items-center gap-4 lg:items-start max-w-lg">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Remote teams
          </span>
          <h2 className="text-[25px] font-semibold  text-[#1D2130]">
            Real-time collaboration
          </h2>
          <p className="leading-7 text-[#1D2130]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>

        <Image
          src={image_4}
          alt=""
          className="max-w-[350px] object-cover w-full"
        ></Image>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex flex-col items-center gap-10">
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
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
