import React from "react";
import IndexNavbar from "../components/IndexNavbar.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-bold text-4xl text-slate-800">
                Alert your tweet
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                This topic deals with the development of an alert Website for
                twitter. In particular, it is requested that a user can register
                one (or more) words/tokens, which he wants to monitor. In case a
                certain threshold is being exceeded, an alert for the
                corresponding user should be generated. In addition, a
                visualization of should be presented on the Website.
              </p>

              <div
                style={
                  localStorage.getItem("token")
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="mt-12"
              >
                <a
                  href="/login"
                  target="_blank"
                  className="login bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Sign In
                </a>

                <a
                  href="/register"
                  className="register ml-1 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3  rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Sign Up
                </a>
              </div>
              <div
                style={
                  localStorage.getItem("token")
                    ? { display: "block" }
                    : { display: "none" }
                }
                className="mt-12"
              >
                <a
                  href="/following"
                  className="following ml-1 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3  rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Go to my alarms
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-8 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/img/home_bg.png")}
          alt="..."
        />
      </section>
      <Footer />
    </>
  );
}
