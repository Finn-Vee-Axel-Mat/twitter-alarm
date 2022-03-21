import React, { useState } from "react";
import { Switch, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import Navbar from "../components/Navbar.js";
import FooterSmall from "../components/FooterSmall.js";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [sound_isEnabled, sound_setIsEnabled] = useState(false);

  const sound_toggleSwitch = () => {
    sound_setIsEnabled((previousState) => !previousState);
    if (sound_isEnabled) {
      localStorage.setItem("audioAlert", 50);
      onChangeText("50 %");
    } else {
      localStorage.setItem("audioAlert", 0);
      onChangeText("0 %");
    }
  };

  const [mail_isEnabled, mail_setIsEnabled] = useState(false);

  const mail_toggleSwitch = () => {
    mail_setIsEnabled((previousState) => !previousState);
    localStorage.setItem("emailAlert", !mail_isEnabled);
  };

  const [text, onChangeText] = useState(
    localStorage.getItem("audioAlert") + " %"
  );

  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const changePassword = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/auth/forgot-password",
      { email },
      config
    );

    navigate(`/reset-password/${data.resetToken}`);
  };

  return (
    <>
      <Navbar fixed page="settings" />
      <section className="relative block h-70-px" />
      <div className="container mx-auto px-4">
        <h1 className="mx-45 my-6 underline px-4 text-3xl font-bold block tracking-wide text-slate-800">
          Settings
        </h1>

        {/* My account */}
        <h2 className="mx-45 my-6 px-4 block tracking-wide text-slate-800 text-3xl font-bold">
          My account{" "}
        </h2>
        <p className="mx-45 my-6 px-4 block tracking-wide text-blue-600 text-lg mt-6 font-bold underline">
          {localStorage.getItem("email")}
        </p>

        <hr className="border-black" />

        {/* Audible alarms */}
        <h2 className="mx-45 my-6 px-4 text-3xl font-bold block tracking-wide text-slate-800">
          Audible alarms
        </h2>
        <div className="mx-45 my-6 px-4">
          <div className="flex items-center pb-4">
            <p style={{ display: "inline-block", marginRight: "20px" }}>
              <u>Audible alarm activated</u>
            </p>
            <Switch
              style={{ display: "inline-block", marginTop: "5px" }}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={sound_toggleSwitch}
              value={sound_isEnabled === 0}
            />
          </div>

          <div
            style={
              sound_isEnabled === 0
                ? { paddingBottom: "3px", width: "90%" }
                : { display: "none" }
            }
          >
            <p style={{ display: "inline-block", marginRight: "20px" }}>
              <u>Volume</u>
            </p>

            <div className="w-10 flex items-center">
              <TextInput
                style={{
                  height: 40,
                  marginVertical: 12,
                  borderRadius: 10,
                  borderWidth: 2,
                  padding: 10,
                  marginRight: 10,
                }}
                value={text}
              />
              <TouchableOpacity
                style={{ paddingHorizontal: 5, color: "#3b82f6" }}
                onPress={() => {
                  onChangeText(Number(text.slice(0, 2)) + 1 + " %");
                  localStorage.setItem(
                    "audioAlert",
                    Number(text.slice(0, 2)) + 1
                  );
                }}
              >
                <i className="fa-2x fas fa-plus-circle" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingHorizontal: 5, color: "#3b82f6" }}
                onPress={() => {
                  onChangeText(Number(text.slice(0, 2)) - 1 + " %");
                  localStorage.setItem(
                    "audioAlert",
                    Number(text.slice(0, 2)) - 1
                  );
                }}
              >
                <i className="fa-2x fas fa-minus-circle" />
              </TouchableOpacity>
            </div>
          </div>
        </div>

        <hr className="border-black" />

        {/* Email notificaions */}
        <h2 className="mx-45 my-6 px-4 text-3xl font-bold block tracking-wide text-slate-800">
          Email notifications
        </h2>
        <div className="mx-45 my-6 px-4 flex items-center">
          <p style={{ display: "inline-block", marginRight: "20px" }}>
            <u>Receive an email when an alarm is triggered</u>
          </p>
          <Switch
            style={{ display: "inline-block" }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={mail_toggleSwitch}
            value={mail_isEnabled}
          />
        </div>

        <hr className="border-black" />

        {/* Change password */}
        <h2 className="mx-45 my-6 px-4 text-3xl font-bold block tracking-wide text-slate-800">
          Change password
        </h2>
        <div className="mx-45 my-6 px-4 flex items-center">
          <button
            onClick={changePassword}
            className="text-white bg-blue-500 font-bold uppercase text-xs px-9 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
          >
            <i className="hidden lg:fas fa-sync pr-2" />
            Click here
          </button>
        </div>
      </div>

      <br />

      {window.innerWidth < 720 ? <FooterSmall /> : <FooterSmall absolute />}
    </>
  );
}
