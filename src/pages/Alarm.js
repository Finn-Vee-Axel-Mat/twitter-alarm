import React, { useState, useEffect } from "react";

import { TouchableOpacity, FlatList, View } from "react-native";
import { useNavigate, useParams } from "react-router-dom";
import Tweet from "../components/Tweet.js";
import Navbar from "../components/Navbar.js";
import FooterSmall from "../components/FooterSmall.js";
import { getTweets } from "../scripts/twitterApi.js";
import {
  getAlarm,
  deleteAlarm,
  updateAlarmOccurence,
} from "../scripts/alarmsApi.js";

export default function Following() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [alarm, setAlarm] = useState([]);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getAlarm(id, token, setAlarm);
    getTweets(alarm, setTweets);
    updateAlarmOccurence(id, alarm, token);
  }, []);

  const updateHandler = () => {
    console.log(alarm);
    getAlarm(id, token, setAlarm);
  };

  return (
    <>
      <Navbar fixed page="alarm" />
      <section className="relative block h-70-px" />

      <div className="container mx-auto px-4">
        <div className="w-full px-4 lg:order-1 flex justify-between">
          <div className="mr-4 p-3 text-left">
            <p className="text-3xl font-bold block tracking-wide text-slate-800">
              {alarm.title}
            </p>
            <span className="text-sm text-slate-600">
              Updated {new Date(alarm.lastUpdate).toDateString} minutes ago !
            </span>
          </div>

          <div className="flex">
            <div className="flex justify-end items-center m-6">
              <button
                type="button"
                onClick={updateHandler}
                className="text-white bg-blue-500 font-bold uppercase text-xs px-9 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              >
                <i className="hidden lg:fas fa-sync pr-2" />
                Click to refresh
              </button>
            </div>
            <TouchableOpacity
              style={{ margin: "10px" }}
              onPress={() => {
                deleteAlarm(id, token);
                navigate("/following");
              }}
            >
              <i class="fa-2x fas fa-trash-alt pt-4" />
            </TouchableOpacity>
          </div>
        </div>
        <div
          style={{ width: "100%" }}
          className="w-full lg:w-4/12 px-4 lg:order-2 lg:text-right lg:self-center"
        >
          <div className="px-3">
            <div className="relative pt-1">
              <span className="text-sm text-slate-600">
                Matching tweets : {alarm.occurence}/{alarm.total}
              </span>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{
                    width:
                      ((100 * alarm.occurence) / alarm.total).toString() + "%",
                  }}
                  className={
                    alarm.occurence >= alarm.total
                      ? "bg-red-500"
                      : "bg-blue-500"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#e1dada",
            width: "100%",
            marginBottom: "2em",
            padding: "10px 10px 10px 10px",
          }}
        >
          <h1 className="text-lg font-bold">
            <u>Description:</u>
          </h1>
          <p>{alarm.description}</p>
        </div>
        <div
          style={{
            backgroundColor: "#e6c9c9",
            width: "100%",
            marginBottom: "2em",
            padding: "10px 10px 10px 10px",
          }}
        >
          <h1 className="text-lg font-bold">
            <u>Tokens:</u>
          </h1>
          <p>
            <i>{alarm.search}</i>
          </p>
        </div>
        <div
          style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>

        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-xl p-4 bg-gray-100">
          <h1 className="text-lg font-bold">
            <u>Lasts tweets:</u>
          </h1>

          <FlatList
            data={tweets}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              return <Tweet item={item} />;
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 1, backgroundColor: "#808080" }} />;
            }}
          />
        </div>
      </div>
      <FooterSmall />
    </>
  );
}
