import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";



export default function Form() {
  var createAlarm = () => window.location.href = '/following?status=good';
  //var createAlarm = () => window.location.href = '/following?status=bad';
  const [isEnabled, setIsEnabled] = useState(false);
  function toggleSwitch(){
    setIsEnabled(previousState => !previousState);
  }

    return (
    <View style={styles.container}>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white">
        <div className="flex-auto p-5 lg:p-10">
          <h4 className="text-2xl font-semibold">
            Enter a title then hashtag or keyword or account you want to follow
          </h4>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="hashtag"
            >
              Title
            </label>
            <input
              type="text"
              className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Full Name"
            />
          </div>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="hashtag"
            >
              Type of alarm
            </label>
            <div style={{margin : 'auto',display: 'flex',gap: '12px',}}>
              <i>From an account</i>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />  
              <i>From a word, hashtags, tokens</i>
            </div>
          </div>
          <div style={{display : isEnabled ? 'none' : 'block'}} className="AlarmPerAccount">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Account
              </label>
              <input
                type="email"
                className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="@Account"
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
                rows="4"
                cols="80"
                className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Type a description..."
              />
            </div>
          </div>
          <div style={{display : isEnabled ? 'block' : 'none'}} className="AlarmPerTokens">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Character string
              </label>
              <input
                type="email"
                className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Sentence, word, tokens, hashtags, etc ..."
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
                type="email"
                className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Integer"
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
              <input
                type="email"
                className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="2022-01-21T21:00:00Z"
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
                rows="4"
                cols="80"
                className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Type a description..."
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
