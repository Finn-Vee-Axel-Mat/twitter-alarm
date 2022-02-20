import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Data from "../components/Data.js";
import Pagination from "../components/Pagination.js";
import FooterSmall from "../components/FooterSmall.js";

import { playAlarm } from "../js/play.js";

function getQueryVariable(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");if(pair[0] === variable){return pair[1];}
         }
         return(false);
}

function refreshButton(){
  refreshAlarms();
}

function refreshAlarms(){
  console.log('refresh all');
}

export default function Following() {
  const [timeLeft,setTimeLeft] = useState(60);
  let c=0;
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft-1);
      c+=1;
      if (c==60){
        c=0;
        playAlarm();
        setTimeLeft(timeLeft => 60);
        refreshAlarms();
      }
    }, 1000);
   return () => clearInterval(timer);
    }, []
  );

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

            <button
              style={{margin: 'auto',color: 'white',margin: '25px',width: '100%',fontSize: '28px',backgroundColor: '#3b82f6',borderRadius: '10px 20px'}}
              type="button"
              onClick={() => {
                c=0;
                setTimeLeft(timeLeft => 60);
                refreshButton()
              }}
            >
              Refresh<br/>
              <u style={{fontSize: '18px',color: '#e8e2e2'}}>Next update : <span>{timeLeft}</span> seconds.</u>
            </button>
            <img width='60px' style={timeLeft<58 ? {width: '100px',margin: 'auto',display: 'none'} : {width: '100px',margin: 'auto'}} src="https://askcodez.com/images3/157446935584697.gif" />

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
