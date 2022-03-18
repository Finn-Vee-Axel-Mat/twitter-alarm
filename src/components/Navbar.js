import React from "react";
import { Link } from "react-router-dom";
// components
import UserDropdown from "./UserDropdown.js";

export default function Navbar({ page }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-white top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-slate-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              <i className="fab fa-twitter" /> Twitter Alarm
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-slate800 fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none " +
              (navbarOpen ? " block p-5" : "hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="flex items-center justify-center lg: my-2 mx-1">
                {page === "following" ? (
                  <a
                    href="/create-alarm"
                    target="_blank"
                    className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-9 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                  >
                    <i className="fas fa-bell mr-1" /> Create Alarm
                  </a>
                ) : (
                  <a
                    href="/following"
                    className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-11 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                  >
                    <i className="fas fa-list-ul mr-1" /> Following
                  </a>
                )}
              </li>

              <li className="flex items-center justify-center lg: my-2">
                <UserDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
