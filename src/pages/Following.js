import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import Navbar from "../components/Navbar.js";
import Data from "../components/Data.js";
import FooterSmall from "../components/FooterSmall.js";

import { playGentleRefresh, playGentleAlarm } from "../scripts/music.js";
import { getAlarms, searchAlarm } from "../scripts/alarmsApi.js";
import { alarmTrigerred } from "../scripts/mailing.js";

import { mail_isEnabled } from "./Settings.js";

export default function Following() {
  const [timeLeft, setTimeLeft] = useState(60);
  let c = 0;

  const [alarms, setAlarms] = useState([]);
  const [search, setSearch] = useState([]);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const mail_isEnabled = localStorage.getItem("emailAlert");

  function refreshAlarms() {
    console.log("---------");
    console.log("token : " + localStorage.getItem("token"));
    console.log("email : " + localStorage.getItem("email"));
    console.log("alerte audio % : " + localStorage.getItem("audioAlert"));
    console.log("alerte email ? : " + localStorage.getItem("emailAlert"));
    console.log("---------");

    getAlarms(email, token, setAlarms);

    alarms.map((value, index) => {
      if (value.occurence > value.total) {
        if (mail_isEnabled) alarmTrigerred(email, value.title);
        else alert(`${value.title}!`);
      }
    });
  }

  function refreshButton() {
    playGentleRefresh();
    refreshAlarms();
  }

  useEffect(() => {
    getAlarms(email, token, setAlarms);

    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
      c += 1;
      if (c === 60) {
        c = 0;
        // playAlarm();
        setTimeLeft((timeLeft) => 60);
        refreshAlarms();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar fixed page="following" />
      <section className="relative block h-70-px" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg: my-2 mx-1">
          <h1 className="mx-45 my-6 underline px-4 text-3xl font-bold block tracking-wide text-slate-800">
            Following
          </h1>

          {/* Search */}
          <div className="relative items-stretch mx-6">
            <input
              type="text"
              className="px-4 py-1 h-8 border-2 border-solid border-slate-600 rounded-full text-sm leading-snug text-slate-700 bg-white shadow-none outline-none focus:outline-none w-full font-normal flex-1 placeholder-slate-600"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter")
                  return searchAlarm(email, search, token, setAlarms);
              }}
              value={search}
            />
            <button
              onClick={() => searchAlarm(email, search, token, setAlarms)}
              type="button"
              className="z-10 h-full leading-snug font-normal absolute text-center text-slate-800 bg-transparent rounded text-base items-center justify-center right-0 pr-3 py-1"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>

        {/* Next update */}
        <div className="flex justify-end items-center m-6">
          <span className="mr-4 ">Next update: {timeLeft} seconds.</span>
          <button
            type="button"
            onClick={() => {
              c = 0;
              setTimeLeft(60);
              refreshButton();
            }}
            className="text-white bg-blue-500 font-bold uppercase text-xs px-9 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
          >
            <i className="hidden lg:fas fa-sync pr-2" />
            Click to refresh
          </button>
        </div>

        {timeLeft < 58 ? null : (
          <div className="text-center text-blue-500">
            <i className="fa-3x fas fa-circle-notch fa-spin" />
          </div>
        )}

        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-xl ">
          <FlatList
            data={alarms}
            keyExtractor={(item) => item._id}
            renderItem={(item) => <Data item={item} delay={timeLeft} />}
          />
        </div>
      </div>
      {alarms.length > 6 || window.innerWidth < 1024 ? (
        <FooterSmall />
      ) : (
        <FooterSmall absolute />
      )}
    </>
  );
}
