import React, { Fragment } from "react";
import Image from "next/image";

import image_1 from "/./public/images/about_page/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import image_2 from "/./public/images/about_page/israel-andrade-YI_9SivVt_s-unsplash.jpg";
import image_3 from "/./public/images/about_page/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";

import icon_1 from "/./public/images/about_page/Icon.svg";
import icon_2 from "/./public/images/about_page/Icon_1.svg";
import icon_3 from "/./public/images/about_page/Icon_2.svg";
import icon_4 from "/./public/images/about_page/Icon_3.svg";
import icon_5 from "/./public/images/about_page/Icon_4.svg";
import icon_6 from "/./public/images/about_page/icon_5.png";

import profile_1 from "/./public/images/about_page/ben-den-engelsen-eNyXK17so6A-unsplash.jpg";
import profile_2 from "/./public/images/about_page/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg";
import profile_3 from "/./public/images/about_page/foto-sushi-6anudmpILw4-unsplash.jpg";
import profile_4 from "/./public/images/about_page/adria-garcia-sarceda-0TFVCXbFhWA-unsplash.jpg";
import profile_5 from "/./public/images/about_page/sigmund-jzz_3jWMzHA-unsplash.jpg";
import profile_6 from "/./public/images/about_page/samuel-dixon--fQ5XNOcqFQ-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="lg:h-[70vh] relative w-full px-14 sm:px-16 mb-20 lg:m-0 md:px-20 lg:px-24 xl:px-28 text-center flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col relative z-40 gap-3 items-center max-w-xl">
            <h1 className="text-[30px] font-bold text-[#1D2130]">
              We are proud of our products
            </h1>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>

          <div className="flex flex-col w-full relative z-40 items-center gap-10 lg:flex-row lg:justify-between">
            <Image
              className="w-full object-cover rounded-lg max-w-[300px]"
              src={image_1}
              alt=""
            ></Image>

            <Image
              className="w-full object-cover rounded-lg max-w-[300px]"
              src={image_2}
              alt=""
            ></Image>

            <Image
              className="w-full object-cover rounded-lg max-w-[300px]"
              src={image_3}
              alt=""
            ></Image>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[130px] opacity-20 z-0 absolute top-48 left-0  max-h-[400px] max-w-[400px] w-full h-full"></div>
        </div>
      </section>

      <section className="flex w-full px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 items-center justify-center">
        <div className="felx flex-col items-center gap-3 max-w-lg w-full text-center">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            About Us
          </span>
          <h2 className="text-[25px] font-semibold  text-[#1D2130]">
            We’re a team of data analysts
          </h2>
          <p className="leading-7 text-[#1D2130]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </section>

      <section className="px-14 py-14 w-full sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex items-center justify-center text-center lg:text-start bg-[#F0F2FE]">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col gap-3 items-center lg:items-start max-w-lg">
            <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Our Goals
            </span>
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              To upscale your business to the next level
            </h2>
            <p className="leading-7 text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start max-w-lg">
            <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Our Vision
            </span>
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              To provide solutions for growing companies
            </h2>
            <p className="leading-7 text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full flex items-center justify-center ">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              Our corporate values
            </h2>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="bg-[#F9F0FB] rounded-lg p-12 flex flex-col items-center gap-10 text-center lg:text-start md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Image src={icon_1} width={40} alt=""></Image>
              <h3 className="text-[18px] font-semibold text-[#1D2130]">
                Best in Class
              </h3>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <Image src={icon_2} width={40} alt=""></Image>
              <h3 className="text-[18px] font-semibold text-[#1D2130]">
                Authenticity
              </h3>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <Image src={icon_3} width={40} alt=""></Image>
              <h3 className="text-[18px] font-semibold text-[#1D2130]">
                Email Support
              </h3>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <Image src={icon_4} width={40} alt=""></Image>
              <h3 className="text-[18px] font-semibold text-[#1D2130]">
                Discounts Available
              </h3>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <Image src={icon_5} width={40} alt=""></Image>
              <h3 className="text-[18px] font-semibold text-[#1D2130]">
                Powerful Marketing
              </h3>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <Image src={icon_6} width={40} alt=""></Image>
              <h3 className="text-[18px] font-semibold text-[#1D2130]">
                Inventory management
              </h3>
              <p className="leading-7 text-[#1D2130]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col lg:flex-row lg:items-start items-center gap-12">
          <div className="flex flex-col items-center lg:text-start lg:items-start max-w-xs gap-3 w-full text-center">
            <h2 className="text-[25px] font-semibold  text-[#1D2130]">
              Our talented Team
            </h2>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>

          <div className="flex flex-col items-center w-full gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-3 bg-[#E0E4FC] rounded-lg">
              <Image
                src={profile_1}
                alt=""
                className="rounded-lg w-full"
              ></Image>
              <div className="flex p-3 flex-col gap-2 lg:items-start items-center">
                <h4 className="text-[18px] font-semibold tewt-[#1D2130]">
                  Blake Matthews
                </h4>
                <p className="leading-7 text-[#1D2130]">CEO & Co-Founder</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-[#E0E4FC] rounded-lg">
              <Image
                src={profile_2}
                alt=""
                className="rounded-lg w-full"
              ></Image>
              <div className="flex p-3 flex-col gap-2 lg:items-start items-center">
                <h4 className="text-[18px] font-semibold tewt-[#1D2130]">
                  Jack Newman
                </h4>
                <p className="leading-7 text-[#1D2130]">CTO</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-[#E0E4FC] rounded-lg">
              <Image
                src={profile_4}
                alt=""
                className="rounded-lg w-full"
              ></Image>
              <div className="flex p-3 flex-col gap-2 lg:items-start items-center">
                <h4 className="text-[18px] font-semibold tewt-[#1D2130]">
                  Sarinia Martins
                </h4>
                <p className="leading-7 text-[#1D2130]">Marketing</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-[#E0E4FC] rounded-lg">
              <Image
                src={profile_3}
                alt=""
                className="rounded-lg w-full"
              ></Image>
              <div className="flex p-3 flex-col gap-2 lg:items-start items-center">
                <h4 className="text-[18px] font-semibold tewt-[#1D2130]">
                  Spencer Wright
                </h4>
                <p className="leading-7 text-[#1D2130]">Project management</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-[#E0E4FC] rounded-lg">
              <Image
                src={profile_5}
                alt=""
                className="rounded-lg w-full"
              ></Image>
              <div className="flex p-3 flex-col gap-2 lg:items-start items-center">
                <h4 className="text-[18px] font-semibold tewt-[#1D2130]">
                  Caroline Ming
                </h4>
                <p className="leading-7 text-[#1D2130]">Sales</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-[#E0E4FC] rounded-lg">
              <Image
                src={profile_6}
                alt=""
                className="rounded-lg w-full"
              ></Image>
              <div className="flex p-3 flex-col gap-2 lg:items-start items-center">
                <h4 className="text-[18px] font-semibold tewt-[#1D2130]">
                  Anna Mills
                </h4>
                <p className="leading-7 text-[#1D2130]">Design lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
