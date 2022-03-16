import React, { useEffect, useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const [title, onChangeTitle] = useState("");
  const [description, onChangeDescription] = useState("");
  const [search, onChangeSearch] = useState("");
  const [total, onChangeTotal] = useState("");
  const [date, onChangeDate] = useState("");
  const [error, setError] = useState("");

  // var createAlarm = () => {
  //   var alarms = JSON.parse(localStorage.getItem("alarms"));
  //   alarms.push({
  //     id: Math.floor(Math.random() * 999999),
  //     title: title,
  //     description: description,
  //     search: search,
  //     total: maxCount,
  //     occurence: 0,
  //     date: date,
  //     lastUpdate: new Date().toUTCString(),
  //   });
  //   localStorage.setItem("alarms", JSON.stringify(alarms));
  //   window.location.href = "/following?status=good";
  // };
  //var createAlarm = () => window.location.href = '/following?status=bad';
  const lastUpdate = new Date().toUTCString();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const createAlarm = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios.post(
        "/api/alarms/create",
        { email, title, description, search, total, date, lastUpdate },
        config
      );
      navigate("/following");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white">
        <div className="flex-auto p-5 lg:p-10">
          <h4 className="text-2xl font-semibold">
            Enter a title then hashtag or keyword or account you want to follow
            soon.
          </h4>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="hashtag"
            >
              Title
            </label>
            <input
              placeholder="titre"
              onChange={(e) => onChangeTitle(e.target.value)}
              value={title}
              className="border-2 border-gray-500 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="hashtag"
            >
              Type of alarm
            </label>
            <i>
              <u>From a word, hashtags, tokens</u>
            </i>
          </div>
          <div className="AlarmPerTokens">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Character string
              </label>
              <input
                placeholder="tokens"
                onChange={(e) => onChangeSearch(e.target.value)}
                value={search}
                className="border-2 border-gray-500 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Occurrence before trigger
              </label>

              <input
                placeholder="integer"
                onChange={(e) => onChangeTotal(e.target.value)}
                value={total}
                className="border-2 border-gray-500 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Since
              </label>
              <p>
                The format must be respected: <u>2022-01-21T21:00:00Z</u>
              </p>

              <input
                placeholder="2022-01-21T21:00:00Z"
                onChange={(e) => onChangeDate(e.target.value)}
                value={date}
                className="border-2 border-gray-500 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Description
              </label>

              <textarea
                placeholder="description"
                onChange={(e) => onChangeDescription(e.target.value)}
                value={description}
                className="border-2 border-gray-500 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={createAlarm}
              className="bg-blue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Create alarm
            </button>
          </div>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
