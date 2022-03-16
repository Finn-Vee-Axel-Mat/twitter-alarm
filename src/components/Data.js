import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Data({ item }) {
  return (
    <>
      <div className="px-6 mb-3">
        <div
          style={
            item.item.occurence >= item.item.total
              ? { borderRadius: "12px", backgroundColor: "#30d930" }
              : {}
          }
          className="flex flex-wrap justify-center"
        >
          <div
            style={{ margin: "10px" }}
            className="w-full lg:w-4/12 px-4 lg:order-1"
          >
            <div className="mr-4 p-3 text-left">
              <a
                href={"/tweet/" + item.item._id}
                target="_blank"
                className="text-3xl font-bold block tracking-wide text-blueGray-800"
              >
                {item.item.title}
              </a>
              <span className="text-sm text-blueGray-600">
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
                <span className="text-sm text-blueGray-600">
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
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <TouchableOpacity
            style={{ margin: "10px" }}
            onPress={() => {
              window.location.href = "/tweet?id=" + item.item._id;
            }}
          >
            <Image
              style={{ marginLeft: "25px", height: "17px", width: "17px" }}
              source={require("../assets/plus-outline.png")}
            />
          </TouchableOpacity>
        </div>
      </div>
    </>
  );
}
