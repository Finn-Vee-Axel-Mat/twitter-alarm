import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-dom";
import { createAlarm } from "../scripts/alarmsApi";

export default function Form() {
  const [title, onChangeTitle] = useState("");
  const [description, onChangeDescription] = useState("");
  const [search, onChangeSearch] = useState("");
  const [total, onChangeTotal] = useState("");
  const [date, onChangeDate] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const createHandler = () => {
    createAlarm(email, title, description, search, total, date, token);
    navigate("/following");
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
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="hashtag"
            >
              Title
            </label>
            <input
              placeholder="titre"
              onChange={(e) => onChangeTitle(e.target.value)}
              value={title}
              className="border-2 border-gray-500 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
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
                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Character string
              </label>
              <input
                placeholder="tokens"
                onChange={(e) => onChangeSearch(e.target.value)}
                value={search}
                className="border-2 border-gray-500 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Occurrence before trigger
              </label>

              <input
                placeholder="ex: 100"
                onChange={(e) => onChangeTotal(e.target.value)}
                value={total}
                className="border-2 border-gray-500 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Since
              </label>

              <input
                onChange={(e) => onChangeDate(e.target.value)}
                value={date}
                type="datetime-local"
                className="border-2 border-gray-500 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Description
              </label>

              <textarea
                placeholder="description"
                onChange={(e) => onChangeDescription(e.target.value)}
                value={description}
                className="border-2 border-gray-500 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-xl text-sm focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={createHandler}
              className="bg-blue-500 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
