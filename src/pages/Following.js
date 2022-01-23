import React from "react";

import Navbar from "../components/Navbar.js";
import Data from "../components/Data.js";
import Pagination from "../components/Pagination.js";
import FooterSmall from "../components/FooterSmall.js";

export default function Following() {
  return (
    <>
      <Navbar fixed />
      <section className="relative block h-70-px" />
      <div className="container mx-auto px-4">
        <h1 className="mx-45 my-6 underline px-4 text-3xl font-bold block tracking-wide text-blueGray-800">
          Following
        </h1>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-xl ">
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />

          <Pagination />
        </div>
      </div>
      <FooterSmall className="bg-blueGray-800" />
    </>
  );
}
