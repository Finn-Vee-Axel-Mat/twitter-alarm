import React from "react";

import Navbar from "../components/Navbar.js";
import Data from "../components/Data.js";
import Pagination from "../components/Pagination.js";
import FooterSmall from "../components/FooterSmall.js";

function getQueryVariable(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");if(pair[0] === variable){return pair[1];}
         }
         return(false);
}

export default function Following() {
  return (
    <>
      <Navbar fixed />
      <section className="relative block h-70-px" />
      <div className="container mx-auto px-4">
        {getQueryVariable("status")==="good" ?
          <h2 style={{backgroundColor: 'rgb(50, 200, 8)',padding: '15px',borderRadius: '8px',color: 'white'}} className="mx-45 my-6 px-4 text-3xl font-bold block tracking-wide text-blueGray-800">
            Alarm created successfully !
          </h2>
        : null}
        {getQueryVariable("status")==="bad" ?
          <h2 style={getQueryVariable("status")==="false" ? {display: 'block'} : {}, {display: 'none',backgroundColor: '#ff554c',padding: '15px',borderRadius: '8px',color: 'white'}} className="mx-45 my-6 px-4 text-3xl font-bold block tracking-wide text-blueGray-800">
            Incorrect creation of the alarm !
          </h2>
        : null}
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
