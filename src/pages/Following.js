import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Navbar from "../components/Navbar.js";
import Data from "../components/Data.js";
import Pagination from "../components/Pagination.js";
import FooterSmall from "../components/FooterSmall.js";
import axios from "axios";

import { playGentleRefresh, playGentleAlarm } from "../scripts/music.js";
import { tweets } from "../scripts/twitter.js";

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

  const [alarms, setAlarms] = useState([]);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const getAlarms = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .post("/api/alarms/", { email }, config)
      .then((res) => {
        console.log(res.data);
        setAlarms(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getAlarms();
    if (localStorage.getItem("alarms") == null) {
      console.log("Pas d'alarmes !");

      //Création d'une alarme pour l'exemple
      var data = [];
      data.push({
        id: Math.floor(Math.random() * 999999),
        title: "Mon alarme exemplaire",
        description: "Lorem ipsum blablabla blabla bla bla...",
        search: "alarme",
        total: 100,
        occurence: 2,
        date: "2022-01-21T21:00:00Z",
        lastUpdate: new Date().toUTCString(),
      });
      data.push({
        id: Math.floor(Math.random() * 999999),
        title: "Elon musk",
        description: "L'alerte sur elon",
        search: "elon",
        total: 120,
        occurence: 32,
        date: "2022-01-21T21:00:00Z",
        lastUpdate: new Date().toUTCString(),
      });
      data.push({
        id: Math.floor(Math.random() * 999999),
        title: "Recette Lasagne",
        description: "Pour l'exemple",
        search: "lasagne",
        total: 20,
        occurence: 13,
        date: "2022-01-21T21:00:00Z",
        lastUpdate: new Date().toUTCString(),
      });
      data.push({
        id: Math.floor(Math.random() * 999999),
        title: "Chien",
        description: "Mignon",
        search: "chien",
        total: 340,
        occurence: 213,
        date: "2022-01-21T21:00:00Z",
        lastUpdate: new Date().toUTCString(),
      });

      console.log(localStorage.setItem("alarms", JSON.stringify(data)));
      console.log(JSON.parse(localStorage.getItem("alarms")));
    } else {
      console.log("Alarmes déployées !");
      console.log(JSON.parse(localStorage.getItem("alarms")));
    }
  }, []);

  function refreshAlarms() {
    console.log("---------");
    console.log("token : " + localStorage.getItem("token"));
    console.log("email : " + localStorage.getItem("email"));
    console.log("alerte audio % : " + localStorage.getItem("audioAlert"));
    console.log("alerte email ? : " + localStorage.getItem("emailAlert"));
    console.log("---------");
    var data = JSON.parse(localStorage.getItem("alarms"));

    for (let i = 0; i < data.length; i++) {
      data[i].occurence += 1;
      data[i].lastUpdate = new Date().toUTCString();

      if (data[i].occurence == data[i].total) {
        playGentleAlarm();
        alert("L'alarme '" + data[i].title + "' s'est déclenchée !");
      }
    }
    localStorage.setItem("alarms", JSON.stringify(data));
    getAlarms();
  }

  function refreshButton() {
    playGentleRefresh();
    refreshAlarms();
    tweets();
  }

  return (
    <>
      <Navbar fixed />
      <section className="relative block h-70-px" />
      <div style={{minHeight: '82vh'}} className="container mx-auto px-4">
        <h2
          style={
            window.location.search.substring(8) == "good" &&
            window.location.search.substring(8) !== null
              ? {}
              : { display: "none" }
          }
          className="text-white bg-green-500 rounded-full mx-45 my-6 px-5 py-2 text-3xl font-bold block tracking-wide"
        >
          Alarm created successfully !
        </h2>
        <h2
          style={
            window.location.search.substring(8) == "bad" &&
            window.location.search.substring(8) !== null
              ? {}
              : { display: "none" }
          }
          className="text-white bg-red-500 rounded-full mx-45 my-6 px-5 py-2 text-3xl font-bold block tracking-wide"
        >
          Incorrect creation of the alarm!
        </h2>
        <h1 className="mx-45 my-6 underline px-4 text-3xl font-bold block tracking-wide text-blueGray-800">
          Following
        </h1>
        <div
          style={{ margin: "25px" }}
          className="flex justify-end items-center"
        >
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
            // data={JSON.parse(localStorage.getItem("alarms"))}
            data={alarms}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <Data
                item={item}
                delay={timeLeft}
                delete={(id) => {
                  console.log(id);
                  var data = JSON.parse(localStorage.getItem("alarms"));
                  for (var i = 0; i < data.length; i++) {
                    if (data[i].id === id) {
                      //data.splice(i, 1);
                    }
                  }
                  localStorage.setItem("alarms", JSON.stringify(data));
                }}
              />
            )}
          />

          <Pagination />
        </div>
      </div>
      <FooterSmall className="bg-blueGray-800" />
    </>
  );
}
