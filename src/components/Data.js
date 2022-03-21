import React from "react";
import { TouchableOpacity } from "react-native";

export default function Data({ item }) {
  return (
    <>
      <div className="px-6 mb-3">
        <div className="flex flex-wrap justify-center">
          <div
            style={{ margin: "10px" }}
            className="w-full lg:w-4/12 px-4 lg:order-1"
          >
            <div className="mr-4 p-3 text-left">
              <a
                href={"/tweet/" + item.item._id}
                target="_blank"
                className="text-3xl font-bold block tracking-wide text-slate-800"
              >
                {item.item.title}
              </a>
              <span className="text-sm text-slate-600">
                Updated {item.delay} seconds ago
              </span>
            </div>
          </div>
          <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div className="relative"></div>
          </div>

          <div className="w-full lg:w-4/12 px-4 lg:order-2 lg:text-right lg:self-center">
            <div className="px-3">
              <div className="relative pt-1">
                <span className="text-sm text-slate-600">
                  Matching tweets : {item.item.occurence}/{item.item.total}
                </span>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div
                    style={{
                      width:
                        (
                          (100 * item.item.occurence) /
                          item.item.total
                        ).toString() + "%",
                    }}
                    className={
                      item.item.occurence >= item.item.total
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* <TouchableOpacity
            style={{ margin: "10px" }}
            onPress={() => {
              window.location.href = "/tweet/" + item.item._id;
            }}
          >
            <i className="fas fa-plus-circle" />
          </TouchableOpacity> */}
        </div>
      </div>
    </>
  );
}
