import React, { useState, useEffect } from "react";
import axios from "axios";

import { TouchableOpacity, FlatList, View } from "react-native";
import { useNavigate, useParams } from "react-router-dom";
import Tweet from "../components/Tweet.js";
import Navbar from "../components/Navbar.js";
import FooterSmall from "../components/FooterSmall.js";
import twitter from "../scripts/twitter.js";

export default function Following() {
  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const [alarm, setAlarm] = useState([]);
  const [tweets, setTweets] = useState([]);

  const getAlarm = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get(`/api/alarms/${id}`, config)
      .then((res) => {
        setAlarm(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const deleteAlarm = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`/api/alarms/${id}`, config).catch((err) => {
      throw err;
    });
    navigate("/following");
  };

  if (alarm == null) {
    console.log("ALARME NON TROUVÉE");
  } else {
    console.log("ALARME TROUVÉE");
  }

  console.log(alarm);

  const getTweets = async () => {
    await twitter
      .get("/tweets/search/recent", {
        params: {
          query: alarm.title, //sometimes bad request
          "tweet.fields": "created_at,author_id",
        },
      })
      .then((res) => {
        setTweets(res.data.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getAlarm();
    getTweets();
  }, []);

  return (
    <>
      <Navbar fixed page="alarm" />
      <section className="relative block h-70-px" />
      <div
        style={
          alarm.occurence >= alarm.total
            ? { borderRadius: "6px", backgroundColor: "#30d930" }
            : {}
        }
        className="container mx-auto px-4"
      >
        <div className="w-full px-4 lg:order-1 flex justify-between">
          <div className="mr-4 p-3 text-left">
            <a
              href="/tweet"
              target="_blank"
              className="text-3xl font-bold block tracking-wide text-slate-800"
            >
              {alarm.title}
            </a>
            <span className="text-sm text-slate-600">
              Updated {new Date(alarm.lastUpdate).toDateString} minutes ago !
            </span>
          </div>
          <TouchableOpacity style={{ margin: "10px" }} onPress={deleteAlarm}>
            <i class="fa-2x fas fa-trash-alt pt-4" />
          </TouchableOpacity>
        </div>
        <div
          style={{ width: "100%" }}
          className="w-full lg:w-4/12 px-4 lg:order-2 lg:text-right lg:self-center"
        >
          <div className="px-3">
            <div className="relative pt-1">
              <span className="text-sm text-slate-600">
                Matching tweets : {alarm.occurence}/{alarm.total}
              </span>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{
                    width:
                      ((100 * alarm.occurence) / alarm.total).toString() + "%",
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#e1dada",
            width: "100%",
            marginBottom: "2em",
            padding: "10px 10px 10px 10px",
          }}
        >
          <h1 className="text-lg font-bold">
            <u>Description:</u>
          </h1>
          <p>{alarm.description}</p>
        </div>
        <div
          style={{
            backgroundColor: "#e6c9c9",
            width: "100%",
            marginBottom: "2em",
            padding: "10px 10px 10px 10px",
          }}
        >
          <h1 className="text-lg font-bold">
            <u>Tokens:</u>
          </h1>
          <p>
            <i>{alarm.search}</i>
          </p>
        </div>
        <div
          style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>

        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-xl p-4 bg-gray-100">
          <h1 className="text-lg font-bold">
            <u>Lasts tweets:</u>
          </h1>

          <FlatList
            data={tweets}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              return <Tweet item={item} />;
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 1, backgroundColor: "#808080" }} />;
            }}
          />
        </div>
      </div>
      <FooterSmall />
    </>
  );
}
