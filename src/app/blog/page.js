import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import hero_image from "/./public/images/blog_page/jason-goodman-vbxyFxlgpjM-unsplash.jpg";

import image_1 from "/./public/images/blog_page/annie-spratt-hCb3lIB8L8E-unsplash.jpg";
import image_2 from "/./public/images/blog_page/brooke-cagle--uHVRvDr7pg-unsplash.jpg";
import image_3 from "/./public/images/blog_page/campaign-creators-e6n7uoEnYbA-unsplash.jpg";
import image_4 from "/./public/images/blog_page/charlesdeluvio-Lks7vei-eAg-unsplash.jpg";
import image_5 from "/./public/images/blog_page/israel-andrade-YI_9SivVt_s-unsplash.jpg";
import image_6 from "/./public/images/blog_page/keenan-beasley-7g5gW-j62E8-unsplash.jpg";
import image_7 from "/./public/images/blog_page/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import image_8 from "/./public/images/blog_page/proxyclick-visitor-management-system-l90zRbWvCoE-unsplash.jpg";
import image_9 from "/./public/images/blog_page/tim-gouw-1K9T5YiZ2WU-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 relative w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col  gap-16 mt-20 items-center">
          <div className="text-center flex relative z-40 flex-col items-center gap-2 max-w-xl">
            <h1 className="text-[30px] font-bold text-[#1D2130]">
              Read our latest blogs
            </h1>
            <p className="leading-7 text-[#1D2130]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </p>
          </div>

          <div className="flex flex-col p-10 relative z-40 border-[1px] border-[#D8D8D8] rounded-lg items-center text-center lg:text-start gap-10 lg:flex-row  lg:justify-between w-full">
            <div className="flex flex-col items-center gap-4 lg:items-start max-w-md">
              <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Trending Post
              </span>
              <h2 className="text-[25px] font-semibold  text-[#1D2130]">
                New invoicing features to help you get paid faster
              </h2>
              <p className="text-[#6D6E76] leading-7">
                Over the past few months, we’ve added several new features to
                SaaS Invoicing to help any business get paid faster and
                streamline their collection workflows.
              </p>
              <p className="text-[#6D6E76] leading-7">
                Luke Matthews l November 8, 2021
              </p>
            </div>

            <Image
              src={hero_image}
              alt=""
              className="max-w-[450px] w-full rounded-lg object-cover"
            ></Image>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[170px] opacity-20 z-0 absolute top-48 left-[-50px]  max-h-[500px] max-w-[500px] w-full h-full"></div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 w-full text-center lg:text-start lg:px-24 xl:px-28 mb-20 flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-10">
          <h2 className="text-[25px] font-semibold  text-[#1D2130]">
            All posts
          </h2>
          <div className="flex flex-col items-center w-full justify-center md:justify-between md:place-content-between gap-8 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap">
            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_1}
                alt=""
                className="max-w-[300px] h-48  w-full object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  7 Automation use cases that foster excellent CX
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_2}
                alt=""
                className="max-w-[300px]  h-48 w-full object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  Managing Rails application secrets with encrypted credentials
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_3}
                alt=""
                className="max-w-[300px] w-full h-48 object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  Account-based marketing: Data-driven selection for ABM success
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_4}
                alt=""
                className="max-w-[300px] w-full h-48 object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  How to Calculate Your SaaS Gross Margin
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_5}
                alt=""
                className="max-w-[300px] w-full h-48 object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  The Five Main Benefits of Automating your Accounts Receivable
                  Process
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_6}
                alt=""
                className="max-w-[300px] h-48 w-full object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  How to Make Data-driven Pricing Decisions
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_7}
                alt=""
                className="max-w-[300px] h-48 w-full object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  How to Make Recurring Invoicing More Efficient
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_8}
                alt=""
                className="max-w-[300px] h-48 w-full object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  How to Reduce Checkout Abandonment for more Conversions
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="max-w-[300px] flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <Image
                src={image_9}
                alt=""
                className="max-w-[300px] h-48 w-full object-cover rounded-lg"
              ></Image>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h4 className="teaxt-[18px] font-semibold text-[#1D2130]">
                  10 Customer Retention Strategies for better Dwell time
                </h4>
                <p className="leading-7 text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="leading-7 text-[#6D6E76]">
                  Luke Matthews l November 8, 2021
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
