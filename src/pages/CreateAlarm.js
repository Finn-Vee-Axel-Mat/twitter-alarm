import React from "react";

import Navbar from "../components/Navbar.js";
import Form from "../components/Form.js";
import FooterSmall from "../components/FooterSmall.js";

export default function CreateAlarm() {
  return (
    <>
      <Navbar fixed page="create" />
      <section className="relative block h-70-px" />
      <div className="container mx-auto px-4">
        <h1 className="mx-45 my-6 underline px-4 text-3xl font-bold block tracking-wide text-slate-800">
          Create Alarm
        </h1>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-xl ">
          <Form />
        </div>
      </div>
      <FooterSmall className="bg-slate-800" />
    </>
  );
}
