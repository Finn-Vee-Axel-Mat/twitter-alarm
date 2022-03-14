import React, { useState } from "react";
import { View, Switch, StyleSheet, TextInput } from "react-native";

export default function Form() {
  var createAlarm = () => {
    var alarms = JSON.parse(localStorage.getItem('alarms'));
    alarms.push({titre: titre, description: description, search: search, total: maxCount, occurence: 0, date: date});
    localStorage.setItem("alarms", JSON.stringify(alarms))
    window.location.href = '/following?status=good'
  };
  //var createAlarm = () => window.location.href = '/following?status=bad';

  const [titre, onChangeTitre] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [search, onChangeSearch] = React.useState("");
  const [maxCount, onChangeMaxCount] = React.useState("");
  const [date, onChangeDate] = React.useState("");

  return (
    <View style={styles.container}>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white">
        <div className="flex-auto p-5 lg:p-10">
          <h4 className="text-2xl font-semibold">
            Enter a title then hashtag or keyword or account you want to follow soon.
          </h4>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="hashtag"
            >
              Title
            </label>
            <TextInput
              placeholder={"titre"}
              onChangeText={onChangeTitre}
              value={titre}
            />
          </div>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="hashtag"
            >
              Type of alarm
            </label>
            <i><u>From a word, hashtags, tokens</u></i>
          </div>
          <div className="AlarmPerTokens">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Character string
              </label>
              <TextInput
                style={{width: '50%', minWidth: '340px'}}
                placeholder={"Tokens"}
                onChangeText={onChangeSearch}
                value={search}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Occurrence before trigger
              </label>
              <TextInput
                style={{width: '10%', minWidth: '40px'}}
                placeholder={"Integer"}
                onChangeText={onChangeMaxCount}
                value={maxCount}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Since
              </label>
              <p>The format must be respected : <u>2022-01-21T21:00:00Z</u></p>
              <TextInput
                placeholder={"2022-01-21T21:00:00Z"}
                onChangeText={onChangeDate}
                value={date}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Description
              </label>
              <TextInput
                style={{width: '100%', height: '150px'}}
                placeholder={"Description"}
                onChangeText={onChangeDescription}
                value={description}
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
    justifyContent: "center"
  }
});
