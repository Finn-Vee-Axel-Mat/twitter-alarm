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
                Students are willing to be contacted on their university emails.
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
                        href="https://www.unicaen.fr/"
                      >
                        Unicaen
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://forge.info.unicaen.fr/projects/projets-l3/wiki/Twitter_Alarme"
                      >
                        Subject
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/Finn-Vee-Axel-Mat/twitter-alarm"
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
                Copyright © Finn-Vee-Axel-Mat
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
