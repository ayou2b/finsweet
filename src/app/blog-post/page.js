import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import blog_image from "/./public/images/single_blog/jason-goodman-vbxyFxlgpjM-unsplash.jpg";

import image_7 from "/./public/images/blog_page/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import image_8 from "/./public/images/blog_page/proxyclick-visitor-management-system-l90zRbWvCoE-unsplash.jpg";
import image_9 from "/./public/images/blog_page/tim-gouw-1K9T5YiZ2WU-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 relative sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-12 mt-16 text-center flex flex-col items-center gap-12">
        <div className="flex flex-col relative z-30 items-center gap-3">
          <h1 className="text-[30px] font-bold text-[#1D2130]">
            New invoicing features to help you
            <br /> get paid faster
          </h1>
          <p className="leading-7 text-[#6D6E76]">
            Luke Matthews l November 8, 2021
          </p>
        </div>

        <Image
          src={blog_image}
          alt=""
          className="w-full relative z-30 object-cover h-80 rounded-lg"
        ></Image>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-[170px] opacity-20 z-0 absolute top-32 left-[-50px]  max-h-[500px] max-w-[500px] w-full h-full"></div>
      </section>

      <section className="flex flex-col items-center text-center lg:text-start lg:items-start gap-8 px-16 sm:px-20 md:px-40 lg:px-44 xl:px-48 mb-20">
        <h2 className="text-[25px] font-semibold  text-[#1D2130]">
          This is a blog post headline
        </h2>
        <p className="leading-7 text-[#1D2130]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </p>
        <p className="leading-7 text-[#1D2130]">
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
          sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
          Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
          egestas, non condimentum mi bibendum. Sed est eros, molestie
          consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
          massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
          at nisi sed elit gravida malesuada.
        </p>
        <h3 className="text-[#1D2130] text-[20px] font-semibold">
          This is a small blog post headline
        </h3>
        <p className="leading-7 text-[#1D2130]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </p>
        <p className="leading-7 text-[#1D2130] pl-4 border-l-[2px] border-[#E0E4FC]">
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante.
        </p>
        <p className="leading-7 text-[#1D2130]">
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
          sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
          Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
          egestas, non condimentum mi bibendum. Sed est eros, molestie
          consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
          massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
          at nisi sed elit gravida malesuada.
        </p>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex flex-col items-center gap-10">
        <h2 className="text-[25px] font-semibold  text-[#1D2130]">
          Read more posts
        </h2>
        <div className="flex flex-col text-center lg:text-start items-center gap-10 w-full md:grid md:grid-cols-2 lg:grid-cols-3">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="leading-7 text-[#6D6E76]">
                Luke Matthews l November 8, 2021
              </p>
            </div>
          </Link>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
