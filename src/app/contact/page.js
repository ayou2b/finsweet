import React, { Fragment } from "react";
import Image from "next/image";

import icon_1 from "/./public/images/contact_page/Vector.png";
import icon_2 from "/./public/images/contact_page/Vector_1.png";
import icon_3 from "/./public/images/contact_page/Vector_2.png";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 sm:px-16 transition-al relativel md:px-20 lg:px-24 xl:px-28 mb-20 mt-20 flex items-center justify-center w-full text-center lg:text-start">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-14">
          <h1 className="text-[30px] font-bold  relative z-40 text-[#1D2130]">
            Get in touch with us
          </h1>
          <div className="bg-[#F0F2FE] p-12 rounded-lg relative z-40 flex flex-col w-full items-center gap-10  lg:items-start">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h2 className="text-[25px] font-semibold  text-[#1D2130]">
                Drop us a message
              </h2>
              <p className="leading-7 text-[#1D2130]">
                We will get back to you as soon as possible.
              </p>
            </div>

            <div className="flex flex-col items-center lg:justify-between gap-12 lg:gap-40 w-full lg:items-start lg:flex-row">
              <form className="flex flex-col w-full  items-center gap-5 lg:items-start">
                <div className="w-full flex flex-col gap-5 lg:flex-row">
                  <input
                    placeholder="Full Name"
                    className="bg-white w-full px-10 lg:placeholder:text-start outline-none py-3 rounded-lg placeholder:text-center placeholder:text-[#1D2130]"
                  ></input>
                  <input
                    placeholder="Company Name"
                    className="bg-white  w-full px-10 lg:placeholder:text-start outline-none py-3 rounded-lg placeholder:text-center placeholder:text-[#1D2130]"
                  ></input>
                </div>
                <input
                  placeholder="Work Email"
                  className="bg-white  w-full px-10 py-3 lg:placeholder:text-start outline-none rounded-lg placeholder:text-center placeholder:text-[#1D2130]"
                ></input>
                <input
                  placeholder="Subject"
                  className="bg-white  w-full px-10 py-3 lg:placeholder:text-start outline-none rounded-lg placeholder:text-center placeholder:text-[#1D2130]"
                ></input>
                <textarea
                  placeholder="Work Email"
                  className="bg-white  w-full px-10 py-3 lg:placeholder:text-start outline-none rounded-lg placeholder:text-center placeholder:text-[#1D2130]"
                ></textarea>
                <button className="w-full  rounded-lg bg-[#1D2130] text-white px-8 py-3">
                  Send
                </button>
              </form>

              <div className="flex flex-col items-center w-full max-w-xs lg:items-start gap-4">
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#6B7CFF] flex items-center justify-center">
                    <Image src={icon_1} alt=""></Image>
                  </div>
                  <div className="flex flex-col gap-1 items-center lg:items-start">
                    <h4 className="text-[18px] font-semibold text-[#1D2130]">
                      + 1800 145 276
                    </h4>
                    <p className="leading-7 text-[#1D2130]">Free support</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#6B7CFF] flex items-center justify-center">
                    <Image src={icon_2} alt=""></Image>
                  </div>
                  <div className="flex flex-col gap-1 items-center lg:items-start">
                    <h4 className="text-[18px] font-semibold text-[#1D2130]">
                      + 1800 145 276
                    </h4>
                    <p className="leading-7 text-[#1D2130]">Free support</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#6B7CFF] flex items-center justify-center">
                    <Image src={icon_3} alt=""></Image>
                  </div>
                  <div className="flex flex-col gap-1 items-center lg:items-start">
                    <h4 className="text-[18px] font-semibold text-[#1D2130]">
                      + 1800 145 276
                    </h4>
                    <p className="leading-7 text-[#1D2130]">Free support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[130px] opacity-10 z-0 absolute top-48 left-0  max-h-[400px] max-w-[400px] w-full h-full"></div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
