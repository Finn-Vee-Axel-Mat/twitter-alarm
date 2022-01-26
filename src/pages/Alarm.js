import React from "react";

import NavbarSub from "../components/NavbarSub.js";
import Tweet from "../components/Tweet.js";
import Pagination from "../components/Pagination.js";
import FooterSmall from "../components/FooterSmall.js";

export default function Following() {
  return (
    <>
      <NavbarSub fixed />
      <section className="relative block h-70-px" />
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-4/12 px-4 lg:order-1">
          <div className="mr-4 p-3 text-left">
            <a
              href="/tweet"
              target="_blank"
              className="text-3xl font-bold block tracking-wide text-blueGray-800"
            >
              Sana
            </a>
            <span className="text-sm text-blueGray-600">
              Updated 3 minutes ago
            </span>
          </div>
        </div>

        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-xl ">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
      <FooterSmall className="bg-blueGray-800" />
    </>
  );
}
