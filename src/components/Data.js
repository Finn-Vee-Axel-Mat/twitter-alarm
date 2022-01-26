import React from "react";
import Tweet from "./Tweet";

export default function Data() {
  return (
    <>
      <div className="px-6 mb-3">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-4/12 px-4 lg:order-1">
            <div className="mr-4 p-3 text-left">
              <a
                href="/tweet"
                target="_blank"
                className="text-3xl font-bold block tracking-wide text-blueGray-800"
              >
                Sana
              </a>
              <span className="text-sm text-blueGray-600">
                Updated 3 minutes ago
              </span>
            </div>
          </div>
          <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div className="relative"></div>
          </div>

          <div className="w-full lg:w-4/12 px-4 lg:order-2 lg:text-right lg:self-center">
            <div className="px-3">
              <div className="relative pt-1">
                <span className="text-sm text-blueGray-600">
                  il y a 50/100 nouveaux tweets
                </span>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div className="w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
