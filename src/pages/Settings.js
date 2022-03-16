import React, { useState, useEffect } from "react";
import { Switch, TextInput, Button } from "react-native";

import NavbarSub from "../components/NavbarSub.js";
import Data from "../components/Data.js";
import Pagination from "../components/Pagination.js";
import FooterSmall from "../components/FooterSmall.js";

export default function Settings() {
  const [sound_isEnabled, sound_setIsEnabled] = useState(false);
  const sound_toggleSwitch = () => {
    sound_setIsEnabled(previousState => !previousState);
    if (sound_isEnabled){
      localStorage.setItem("audioAlert", 50);
      onChangeText('50 %');
    } else {
      localStorage.setItem("audioAlert", 0);
      onChangeText('0 %');
    }
  };


  const [mail_isEnabled, mail_setIsEnabled] = useState(false);
  const mail_toggleSwitch = () => {mail_setIsEnabled(previousState => !previousState); localStorage.setItem("emailAlert", !mail_isEnabled);};

  const [text, onChangeText] = React.useState(localStorage.getItem("audioAlert")+' %');
  return (
    <>
      <NavbarSub fixed />
      <section className="relative block h-70-px" />
      <div style={{minHeight: '82vh'}}>
      <div className="container mx-auto px-4">
        <h1 className="mx-45 my-6 underline px-4 text-3xl font-bold block tracking-wide text-blueGray-800">
          Settings
        </h1>
      </div>
        <div>
          <div style={{borderRadius: '20px', border: 'solid 1px #7671ff', width: '80%', margin: 'auto', textAlign: 'center', backgroundColor: '#b2cbf2'}}>
            <h1 style={{padding: '5px', fontSize: '1.3em'}}>My account : <u style={{color: 'blue'}}><i>{localStorage.getItem("email")}</i></u></h1>
          </div>

        <br/>
        <div style={{borderRadius: '20px', border: 'solid 1px #7671ff', width: '80%', margin: 'auto', textAlign: 'center', backgroundColor: '#b2cbf2'}}>
          <h1 style={{paddingTop: '15px', fontSize: '1.6em', color: '#0041aa'}}><i>Audible alarms</i></h1>
          <hr style={{width: '80%', margin: 'auto', marginTop: '20px', marginBottom: '20px'}}/>
          <div style={{paddingBottom: '3px', width: '90%'}}>
          <p style={{display: 'inline-block', marginRight: '20px'}}><u>Audible alarm activated</u></p>
          <Switch
            style={{display: 'inline-block',marginTop: '5px'}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={sound_toggleSwitch}
            value={sound_isEnabled==0}
          />
        </div>

        <div style={sound_isEnabled==0 ? {paddingBottom: '3px', width: '90%'} : {display: 'none'}}>
          <p style={{display: 'inline-block', marginRight: '20px'}}><u>Volume</u></p>
          <TextInput
            style={{display: 'inline-block',height: 40,margin: 12,borderWidth: 1,padding: 10}}
            value={text}
          />
          <div style={{width: '55px', margin: 'auto'}}>
            <Button
              title="+"
              onPress={() => {onChangeText(Number(text.slice(0,2))+1+" %");localStorage.setItem("audioAlert", Number(text.slice(0,2))+1)}}
            />
            <br/>
            <Button
              title="-"
              onPress={() => {onChangeText(Number(text.slice(0,2))-1+" %");localStorage.setItem("audioAlert", Number(text.slice(0,2))-1)}}
            />
          </div>
        </div>
        <br/>
      </div>

      <br/>

      <div style={{borderRadius: '20px 20px 0px 0px', border: 'solid 1px #7671ff', width: '80%', margin: 'auto', textAlign: 'center', backgroundColor: '#b2cbf2'}}>
          <h1 style={{paddingTop: '15px', fontSize: '1.6em', color: '#0041aa'}}><i>Email notifications</i></h1>
          <hr style={{width: '80%', margin: 'auto', marginTop: '20px', marginBottom: '20px'}}/>
          <div style={{paddingBottom: '22px', width: '90%'}}>
            <p style={{display: 'inline-block', marginRight: '20px'}}><u>Receive an email when an alarm is triggered</u></p>
            <Switch
              style={{display: 'inline-block',marginTop: '5px'}}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={mail_toggleSwitch}
              value={mail_isEnabled}
            />
          </div>
      </div>
      </div>



    </div>
    <br/>
    <FooterSmall className="bg-blueGray-800" />
    </>
  );
}
