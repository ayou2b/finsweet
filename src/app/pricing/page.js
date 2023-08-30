"use client";
import React, { Fragment, useState } from "react";
import { UilPlaneFly, UilCheck } from "@iconscout/react-unicons";
import { UilMinus, UilPlus } from "@iconscout/react-unicons";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const data = [
  {
    qs: "How do I grow my business?",
    an: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    qs: "Can I cancel my subscription?",
    an: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    qs: "How do I contact the support?",
    an: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    qs: "Is a credit card required?",
    an: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
];

function Page() {
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYealy] = useState(false);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <Fragment>
      <Header></Header>

      <section className=" relative transition-all px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 mt-14 flex items-center justify-center w-full overflow-hidden">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-14">
          <div className="max-w-lg  relative z-30 w-full text-center flex flex-col items-center gap-5">
            <h1 className="text-[30px] font-bold text-[#1D2130]">
              Pricing plans that <br /> suit you
            </h1>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor.
            </p>
            <div className="p-3 flex flex-col items-center gap-3 rounded-xl lg:flex-row bg-[#E0E4FC]">
              <button
                onClick={() => {
                  setMonthly(true);
                  setYealy(false);
                }}
                className={`${
                  monthly === true
                    ? "bg-[#1D2130] text-white"
                    : "bg-transparent text-[#1D2130]"
                } px-7 py-2 rounded-lg`}
              >
                Monthly
              </button>
              <button
                onClick={() => {
                  setMonthly(false);
                  setYealy(true);
                }}
                className={`${
                  yearly === true
                    ? "bg-[#1D2130] text-white"
                    : "bg-transparent text-[#1D2130]"
                } px-7 py-2 rounded-lg`}
              >
                Yearly
              </button>
            </div>
          </div>

          {monthly === true && (
            <div className="flex flex-col relative z-30 items-center gap-12 lg:flex-row lg:justify-between">
              <div className=" bg-white shadow-4xl rounded-3xl max-w-[350px] text-center py-6 lg:text-start  flex flex-col items-center lg:items-start gap-4">
                <div className="flex flex-col items-center px-7 gap-4 pb-6 border-b-[2px] w-full md:flex-row">
                  <div className="bg-[#efefef] flex items-center justify-center w-[50px] h-[50px] rounded-full">
                    <UilPlaneFly></UilPlaneFly>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1D2130]">
                      Regular
                    </h3>
                    <p className="text-[#585858]">Starter Plan</p>
                  </div>
                </div>

                <div className="flex flex-col items-center px-7 gap-3 lg:items-start w-full">
                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Regular Support Business
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      1 month Free Trial
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">3GB storage</p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">Ads Preview</p>
                  </div>
                </div>

                <p className="leading-7 px-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <div className="flex px-7 flex-col items-center gap-2 lg:items-start w-full">
                  <h2 className="text-[25px] font-bold  text-[#1D2130]">
                    Free
                  </h2>
                  <p className="text-[#585858]">For Limited Period</p>
                </div>

                <button className="px-6  hover:scale-95 duration-200 lg:ml-7 py-2 rounded-lg bg-[#1D2130] text-white">
                  Get started
                </button>
              </div>

              <div className="bg-gradient-to-r  shadow-4xl border-[2px] border-[#6B7CFF] from-[rgb(215,231,249)] to-[rgb(213,244,236)] rounded-3xl max-w-[350px] text-center py-6 lg:text-start  flex flex-col items-center lg:items-start gap-4">
                <div className="flex flex-col items-center px-7 gap-4 pb-6 border-b-[2px] w-full md:flex-row">
                  <div className="bg-[rgb(255,255,255,38%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
                    <UilPlaneFly className="text-[#6B7CFF]"></UilPlaneFly>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1D2130]">
                      Plantinum
                    </h3>
                    <p className="text-[#4a4e5c]">For the best results</p>
                  </div>
                </div>

                <div className="flex flex-col items-center px-7 gap-3 lg:items-start w-full">
                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Regular Support Business
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      1 month Free Trial
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">30GB storage</p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">Ads Preview</p>
                  </div>
                </div>

                <p className="leading-7 px-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <div className="flex px-7 flex-col items-center gap-2 lg:items-start w-full">
                  <h2 className="text-[25px] font-bold  text-[#1D2130]">
                    $342{" "}
                  </h2>
                  <p className="text-[#4a4e5c]">For Limited Period</p>
                </div>

                <button className="px-6  hover:scale-95 duration-200 lg:ml-7 py-2 rounded-lg bg-[#1D2130] text-white">
                  Get started
                </button>
              </div>

              <div className="bg-white  shadow-4xl rounded-3xl max-w-[350px] text-center py-6 lg:text-start  flex flex-col items-center lg:items-start gap-4">
                <div className="flex flex-col items-center px-7 gap-4 pb-6 border-b-[2px] w-full md:flex-row">
                  <div className="bg-[#efefef] flex items-center justify-center w-[50px] h-[50px] rounded-full">
                    <UilPlaneFly></UilPlaneFly>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1D2130]">
                      Standard
                    </h3>
                    <p className="text-[#585858]">Most popular</p>
                  </div>
                </div>

                <div className="flex flex-col items-center px-7 gap-3 lg:items-start w-full">
                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Regular Support Business
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      1 month Free Trial
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">13GB storage</p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">Ads Preview</p>
                  </div>
                </div>

                <p className="leading-7 px-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <div className="flex px-7 flex-col items-center gap-2 lg:items-start w-full">
                  <h2 className="text-[25px] font-bold  text-[#1D2130]">
                    $234
                  </h2>
                  <p className="text-[#585858]">Billing Monthly</p>
                </div>

                <button className="px-6 hover:scale-95 duration-200 lg:ml-7 py-2 rounded-lg bg-[#1D2130] text-white">
                  Get started
                </button>
              </div>
            </div>
          )}

          {yearly === true && (
            <div className="flex flex-col relative z-30 items-center gap-12 lg:flex-row lg:justify-between">
              <div className="bg-gradient-to-r  shadow-4xl border-[2px] border-[#6B7CFF] from-[rgb(215,231,249)] to-[rgb(213,244,236)] rounded-3xl max-w-[350px] text-center py-6 lg:text-start  flex flex-col items-center lg:items-start gap-4">
                <div className="flex flex-col items-center px-7 gap-4 pb-6 border-b-[2px] w-full md:flex-row">
                  <div className="bg-[rgb(255,255,255,38%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
                    <UilPlaneFly className="text-[#6B7CFF]"></UilPlaneFly>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1D2130]">
                      Plantinum
                    </h3>
                    <p className="text-[#4a4e5c]">For the best results</p>
                  </div>
                </div>

                <div className="flex flex-col items-center px-7 gap-3 lg:items-start w-full">
                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Regular Support Business
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      1 month Free Trial
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">30GB storage</p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">Ads Preview</p>
                  </div>
                </div>

                <p className="leading-7 px-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <div className="flex px-7 flex-col items-center gap-2 lg:items-start w-full">
                  <h2 className="text-[25px] font-bold  text-[#1D2130]">
                    $3042{" "}
                  </h2>
                  <p className="text-[#4a4e5c]">For a year</p>
                </div>

                <button className="px-6  hover:scale-95 duration-200 lg:ml-7 py-2 rounded-lg bg-[#1D2130] text-white">
                  Get started
                </button>
              </div>

              <div className="bg-white  shadow-4xl rounded-3xl max-w-[350px] text-center py-6 lg:text-start  flex flex-col items-center lg:items-start gap-4">
                <div className="flex flex-col items-center px-7 gap-4 pb-6 border-b-[2px] w-full md:flex-row">
                  <div className="bg-[#efefef] flex items-center justify-center w-[50px] h-[50px] rounded-full">
                    <UilPlaneFly></UilPlaneFly>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1D2130]">
                      Standard
                    </h3>
                    <p className="text-[#585858]">Most popular</p>
                  </div>
                </div>

                <div className="flex flex-col items-center px-7 gap-3 lg:items-start w-full">
                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Limited Projects
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      Regular Support Business
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">
                      1 month Free Trial
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">13GB storage</p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-3">
                    <div className="w-[40px] h-[40px] bg-[#D5F5EA] rounded-full flex items-center justify-center">
                      <UilCheck></UilCheck>
                    </div>
                    <p className="font-semibold text-[#1D2130]">Ads Preview</p>
                  </div>
                </div>

                <p className="leading-7 px-7 text-[#1D2130]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <div className="flex px-7 flex-col items-center gap-2 lg:items-start w-full">
                  <h2 className="text-[25px] font-bold  text-[#1D2130]">
                    $2234
                  </h2>
                  <p className="text-[#585858]">For a year</p>
                </div>

                <button className="px-6 hover:scale-95 duration-200 lg:ml-7 py-2 rounded-lg bg-[#1D2130] text-white">
                  Get started
                </button>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[100px] rounded-full opacity-20 z-0 absolute top-48 left-0  max-h-[700px] max-w-[700px] w-full h-full"></div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[100px] rounded-full opacity-20 z-0 absolute bottom-0 left-0 lg:hidden  max-h-[1000px] max-w-[700px] w-full h-full"></div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[100px] rounded-full opacity-20 z-0 absolute top-48 right-0  max-h-[700px] max-w-[700px] w-full h-full"></div>
        </div>
      </section>

      <section className=" transition-all px-14 flex items-center justify-center w-full text-center lg:text-start sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20">
        <div className="bg-[#F0F2FE] py-14 px-12 2xl:max-w-[1300px]  rounded-lg flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between w-full">
          <div className="max-w-lg flex flex-col gap-2">
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              Frequestly Asked
              <br /> Questions
            </h2>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 max-w-lg w-full transition-all">
            {data.map((item, key) => {
              return (
                <div
                  key={key}
                  className="bg-white w-full p-4 flex flex-col gap-5 rounded-lg duration-200 "
                >
                  <div
                    className="flex items-center justify-between cursor-pointer font-semibold"
                    onClick={() => {
                      toggle(key);
                    }}
                  >
                    {item.qs}
                    {selected === key ? (
                      <UilMinus></UilMinus>
                    ) : (
                      <UilPlus></UilPlus>
                    )}
                  </div>
                  <p className={`${selected === key ? "block" : "hidden"}`}>
                    {item.an}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default Page;
