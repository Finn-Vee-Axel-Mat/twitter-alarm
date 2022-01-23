import React from "react";

export default function Pagination() {
  return (
    <>
      <div className="flex justify-center py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            <li>
              <a
                href="#1"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 text-white bg-blue-500"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#1"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#1"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#1"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#1"
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500"
              >
                5
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
