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
        <div style={{width: '100%'}} className="w-full lg:w-4/12 px-4 lg:order-2 lg:text-right lg:self-center">
          <div className="px-3">
            <div className="relative pt-1">
              <span className="text-sm text-blueGray-600">
                Matching tweets : {10}/{100}
              </span>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{width: (100*10/100).toString()+"%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: '#e1dada', width: '100%', marginBottom: '2em', padding: '10px 10px 10px 10px'}}>
          <h1 style={{fontSize: '17px', color: '#1e293b', fontWeight: 700}}><u>Description :</u></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

        <div style={{backgroundColor: '#eaeaea', padding: '15px'}} className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-xl ">
          <h1 style={{fontSize: '17px', color: '#1e293b', fontWeight: 700}}><u>Lasts tweets :</u></h1>
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
