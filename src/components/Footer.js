import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-800 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-white font-semibold">Contact</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-200">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-100 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Notus React by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
