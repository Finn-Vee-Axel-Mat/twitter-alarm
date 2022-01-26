import React from "react";

export default function Form() {
  return (
    <>
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

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Hashtag, keyword, account
            </label>
            <input
              type="email"
              className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Email"
            />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              rows="4"
              cols="80"
              className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Type a message..."
            />
          </div>
          <div className="text-center mt-6">
            <button
              className="bg-blue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Create alarm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
