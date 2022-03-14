import React, { useState, useEffect } from "react";
import { FlatList } from 'react-native';
import Navbar from "../components/Navbar.js";
import Data from "../components/Data.js";
import Pagination from "../components/Pagination.js";
import FooterSmall from "../components/FooterSmall.js";

import { playGentleAlarm } from "../scripts/music.js";

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

function refreshButton() {
  playGentleAlarm();
  refreshAlarms();
}

function refreshAlarms() {
  console.log("---------");
  console.log("token : "+ localStorage.getItem("token"));
  console.log("email : "+ localStorage.getItem("email"));
  console.log("alerte audio % : "+ localStorage.getItem("audioAlert"));
  console.log("alerte email ? : "+ localStorage.getItem("emailAlert"));
  console.log("---------");
  console.log("refresh all");
}

export default function Following() {
  const [timeLeft, setTimeLeft] = useState(60);
  let c = 0;
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
      c += 1;
      if (c == 60) {
        c = 0;
        // playAlarm();
        setTimeLeft((timeLeft) => 60);
        refreshAlarms();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);



  useEffect(() => {
    if (localStorage.getItem("alarms") == null){
      console.log("Pas d'alarmes !");

      //Création d'une alarme pour l'exemple
      var data = [];
      data.push({titre: "Mon alarme exemplaire", description: "Lorem ipsum blablabla blabla bla bla...", search: "alarme", total: 100, occurence: 2, date: "2022-01-21T21:00:00Z"});
      data.push({titre: "Elon musk", description: "L'alerte sur elon", search: "elon", total: 120, occurence: 32, date: "2022-01-21T21:00:00Z"});
      data.push({titre: "Recette Lasagne", description: "Pour l'exemple", search: "lasagne", total: 20, occurence: 13, date: "2022-01-21T21:00:00Z"});
      data.push({titre: "Chien", description: "Mignon", search: "chien", total: 340, occurence: 213, date: "2022-01-21T21:00:00Z"});

      console.log(localStorage.setItem("alarms", JSON.stringify(data)));
      console.log(JSON.parse(localStorage.getItem('alarms')));
    } else {
      console.log("Alarmes déployées !");
      console.log(JSON.parse(localStorage.getItem('alarms')));
    }
    
    
  }, []);

  return (
    <>
      <Navbar fixed />
      <section className="relative block h-70-px" />
      <div className="container mx-auto px-4">
        {getQueryVariable("status") === "good" ? (
          <h2 className="text-white bg-green-500 rounded-full mx-45 my-6 px-5 py-2 text-3xl font-bold block tracking-wide">
            Alarm created successfully !
          </h2>
        ) : null}
        {getQueryVariable("status") === "bad" ? (
          <h2
            className={
              "text-white bg-red-500 rounded-full mx-45 my-6 px-5 py-2 text-3xl font-bold block tracking-wide" +
                getQueryVariable("status") ===
              "false"
                ? "block"
                : "hidden"
            }
          >
            Incorrect creation of the alarm!
          </h2>
        ) : null}
        <h1 className="mx-45 my-6 underline px-4 text-3xl font-bold block tracking-wide text-blueGray-800">
          Following
        </h1>
        <div className="flex justify-end items-center">
          <span className="mr-4 ">Next update: {timeLeft} seconds.</span>
          <button
            type="button"
            onClick={() => {
              c = 0;
              setTimeLeft((timeLeft) => 60);
              refreshButton();
            }}
            className="text-white bg-blue-500 font-bold uppercase text-xs px-9 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
          >
            Click to refresh
          </button>
        </div>

        <img
          width="60px"
          style={
            timeLeft < 58
              ? { width: "30px", margin: "auto", display: "none" }
              : { width: "30px", margin: "auto" }
          }
          src="https://askcodez.com/images3/157446935584697.gif"
        />

        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-xl ">
          <FlatList
            data={JSON.parse(localStorage.getItem('alarms'))}
            renderItem = {item => <Data item={item} delay={timeLeft}/>}
          />

          <Pagination />
        </div>
      </div>
      <FooterSmall className="bg-blueGray-800" />
    </>
  );
}
